document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const addButton = document.getElementById("addButton");
  const taskList = document.getElementById("taskList");

  function addTask(taskText) {
    const newTask = document.createElement("li");
    newTask.textContent = taskText;
    taskList.appendChild(newTask);
    newTask.addEventListener("click", toggleTask);
    saveTasks();
  }

  function toggleTask() {
    this.classList.toggle("checked");
    saveTasks();
  }

  function saveTasks() {
    const tasks = [];
    const taskElements = taskList.querySelectorAll("li");
    taskElements.forEach((task) => {
      tasks.push(task.textContent);
    });
    localStorage.setItem("tasks", tasks.join("|"));
  }

  addButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;
    addTask(taskText);
    taskInput.value = "";
  });

  const savedTasks = localStorage.getItem("tasks");
  if (savedTasks) {
    const tasks = savedTasks.split("|");
    tasks.forEach((task) => {
      addTask(task);
    });
  }
});
localStorage.clear();
