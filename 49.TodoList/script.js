const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUl = document.getElementById("todos");

const todos = JSON.parse(localStorage.getItem("todos"));

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});

const updateLS = () => {
  const todosEl = document.querySelectorAll("li");
  const todos = [];
  todosEl.forEach((todoEl) =>
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains("completed"),
    })
  );
  localStorage.setItem("todos", JSON.stringify(todos));
};

const addTodo = (todo) => {
  let text = input.value;
  if (todo) text = todo.text;
  if (text) {
    const todoEl = document.createElement("li");
    if (todo && todo.completed) todoEl.classList.add("completed");
    todoEl.innerText = text;
    todoEl.addEventListener("click", () => {
      todoEl.classList.toggle("completed");
      updateLS();
    });
    todoEl.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      todoEl.remove();
      updateLS();
    });
    todosUl.append(todoEl);
    input.value = "";
    updateLS();
  }
};

if (todos) todos.forEach((todo, i) => addTodo(todo));
