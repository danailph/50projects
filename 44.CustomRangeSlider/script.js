const range = document.getElementById("range");

range.addEventListener(
  "input",
  ({ target, target: { value, nextElementSibling: label, min, max } }) => {
    label.innerHTML = value;
    const rangeWidth = +getComputedStyle(target)
      .getPropertyValue("width")
      .slice(0, -2);
    const labelWidth = +getComputedStyle(label)
      .getPropertyValue("width")
      .slice(0, -2);

    const left =
      value * (rangeWidth / max) -
      labelWidth / 2 +
      scale(value, min, max, 10, -10);
    label.style.left = `${left}px`;
  }
);

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
