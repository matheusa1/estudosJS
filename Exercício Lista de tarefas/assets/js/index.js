const input = document.querySelector(".input");
const buttonAddTask = document.querySelector(".add-task-button");
const list = document.querySelector(".list");

const loadTasks = () => {
  const tasks = localStorage.getItem("tasks");
  const tasksList = JSON.parse(tasks);

  for (let task of tasksList) {
    createTask(task);
  }
};

const saveTaskList = () => {
  const tasks = [];
  for (let li of list.children) {
    const task = li.innerText.replace("Apagar", "").trim();
    tasks.push(task);
  }
  const tasksJSON = JSON.stringify(tasks);
  localStorage.setItem("tasks", tasksJSON);
};

const createDeleteButton = (li) => {
  li.innerText += " ";
  const button = document.createElement("button");
  button.innerText = "Apagar";
  button.classList.add("delete-button");
  li.appendChild(button);
};

const reset = () => {
  input.value = "";
  input.focus();
};

const createTask = (task) => {
  const item = document.createElement("li");
  item.innerText = task;
  list.appendChild(item);
  createDeleteButton(item);
  reset();

  saveTaskList();
};

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const text = input.value;
    if (!text) return;
    createTask(input.value);
  }
});

buttonAddTask.addEventListener("click", () => {
  const text = input.value;
  if (!text) return;
  createTask(text);
});

document.addEventListener("click", () => {
  const element = event.target;
  if (element.classList.contains("delete-button")) {
    element.parentElement.remove();
    saveTaskList();
  }
});

loadTasks();
