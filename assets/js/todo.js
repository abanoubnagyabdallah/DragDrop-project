const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoLane = document.querySelector("#todo-lane");

loadTask();

function addTask() {
  let task = todoInput.value;
  if (task != "") {
    if (task == "aaa" || task == "asd" || task == "sss") {
      Swal.fire({
        title: "Are you sure?",
        text: "😒😒😒😒😒!",
        icon: "warning",
      });
      todoInput.value = "";
    }
    else{
      createElement(task);
    // start successful task
    Swal.fire({
      title: "Good job!",
      text: "Your task has been added",
      icon: "success",
    });
    todoInput.value = "";
    saveTasks();
    // end successful task
    }
  }
}

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask();
});

function createElement(task) {
  const paragraph = document.createElement("p");
  const content = document.createTextNode(task);
  paragraph.append(content);
  todoLane.append(paragraph);
  paragraph.classList.add("task");
  paragraph.setAttribute("draggable", "true");
  todoLane.appendChild(paragraph);

  paragraph.addEventListener("dragstart", () => {
    paragraph.classList.add("is-dragging");
  });
  paragraph.addEventListener("dragend", () => {
    paragraph.classList.remove("is-dragging");
  });
}

function saveTasks() {
  let tasks = [];
  document.querySelectorAll("#todo-lane p").forEach((Element) => {
    tasks.push(Element.innerHTML.trim());
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTask() {
  tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(createElement);
}


