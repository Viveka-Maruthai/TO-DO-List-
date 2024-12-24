// Get references to HTML elements
const addButton = document.getElementById("add-task-btn");
const taskInput = document.getElementById("new-task");
const taskDate = document.getElementById("task-date");
const taskTime = document.getElementById("task-time");
const taskList = document.getElementById("task-list");
const prioritySelect = document.getElementById("priority");
const clearCompletedButton = document.getElementById("clear-completed-btn");

// Load tasks from local storage on page load
window.onload = () => {
    loadTasksFromStorage();
};

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    const dateText = taskDate.value;
    const timeText = taskTime.value;
    const priority = prioritySelect.value;

    if (taskText !== "" && dateText && timeText) {
        const li = document.createElement("li");
        li.classList.add(priority);

        // Task content with date and time
        const taskContent = document.createElement("div");
        taskContent.classList.add("task-details");
        const taskName = document.createElement("span");
        taskName.textContent = taskText;
        const taskDateTime = document.createElement("small");
        taskDateTime.textContent = `Due: ${dateText} at ${timeText}`;

        taskContent.appendChild(taskName);
        taskContent.appendChild(taskDateTime);
        li.appendChild(taskContent);

        // Create delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn");
        deleteButton.onclick = () => deleteTask(li);
        li.appendChild(deleteButton);

        // Add task to the list
        taskList.appendChild(li);

        // Store tasks in local storage
        saveTasksToStorage();

        // Clear the input fields after adding task
        taskInput.value = "";
        taskDate.value = "";
        taskTime.value = "";

        // Toggle completion on click
        taskContent.addEventListener("click", () => toggleCompletion(li));
    }
}

// Function to delete a task
function deleteTask(task) {
    taskList.removeChild(task);
    saveTasksToStorage();
}

// Function to toggle task completion
function toggleCompletion(task) {
    task.classList.toggle("completed");
    saveTasksToStorage();
}

// Function to save tasks to local storage
function saveTasksToStorage() {
    const tasks = [];
    const taskItems = taskList.querySelectorAll("li");
    taskItems.forEach(task => {
        tasks.push({
            text: task.querySelector(".task-details span").textContent,
            date: task.querySelector(".task-details small").textContent,
            priority: task.classList[0], // Using the first class (priority)
            completed: task.classList.contains("completed")
        });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to load tasks from local storage
function loadTasksFromStorage() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.classList.add(task.priority);
        if (task.completed) li.classList.add("completed");

        // Task content with date and time
        const taskContent = document.createElement("div");
        taskContent.classList.add("task-details");
        const taskName = document.createElement("span");
        taskName.textContent = task.text;
        const taskDateTime = document.createElement("small");
        taskDateTime.textContent = task.date;

        taskContent.appendChild(taskName);
        taskContent.appendChild(taskDateTime);
        li.appendChild(taskContent);

        // Create delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn");
        deleteButton.onclick = () => deleteTask(li);
        li.appendChild(deleteButton);

        // Add task to the list
        taskList.appendChild(li);

        // Toggle completion on click
        taskContent.addEventListener("click", () => toggleCompletion(li));
    });
}

// Function to clear completed tasks
clearCompletedButton.addEventListener("click", () => {
    const completedTasks = document.querySelectorAll("li.completed");
    completedTasks.forEach(task => {
        taskList.removeChild(task);
    });
    saveTasksToStorage();
});

// Add event listener to "Add Task" button
addButton.addEventListener("click", addTask);

// Allow pressing "Enter" to add a task
taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});



