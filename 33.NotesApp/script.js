const addBtn = document.getElementById("add");
addBtn.addEventListener("click", () => addNewNote(""));

const addNewNote = (text) => {
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `
    <div class="tools">
    <button class="edit"><i class="fas fa-edit"></i></button>
    <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
  `;

  const editBtn = note.querySelector(".edit");
  const deleteBtn = note.querySelector(".delete");
  const main = note.querySelector(".main");
  const textArea = note.querySelector("textarea");

  textArea.value = text;
  main.innerHTML = marked(text);

  deleteBtn.addEventListener("click", () => {
    note.remove();
    updateLS();
  });
  editBtn.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });

  textArea.addEventListener("input", ({ target: { value } }) => {
    main.innerHTML = marked(value);
    updateLS();
  });

  document.body.appendChild(note);
};

const updateLS = () => {
  const notesText = document.querySelectorAll("textarea");
  const notes = [];
  notesText.forEach(({ value }) => notes.push(value));
  localStorage.setItem("notes", JSON.stringify(notes));
};

const notes = JSON.parse(localStorage.getItem("notes"));
notes.forEach((note) => addNewNote(note));
