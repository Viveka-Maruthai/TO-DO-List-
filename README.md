# To-Do List with Date & Time
This web-based To-Do List application allows users to create tasks with a due date, time, and priority. Users can add tasks, mark them as completed, delete tasks, and clear completed tasks. The tasks are saved in the browser’s local storage, so they persist even after the page is reloaded.

## Features
- **Add Tasks**: Users can input a task description, select a due date and time, and assign a priority (Low, Medium, High).
- **Mark Tasks as Completed**: Users can click on a task to mark it as completed, which will strike through the task and change its color.
- **Delete Tasks**: Users can delete tasks from the list.
- **Clear Completed Tasks**: Users can clear all tasks that have been marked as completed.
- **Persistent Data**: Tasks are stored in local storage, so the data is saved even after refreshing or closing the browser.
- **Priority Indicators**: Tasks are displayed with different left border colors based on their priority:
  - **Low Priority**: Green
  - **Medium Priority**: Orange
  - **High Priority**: Red

## Files
- `index.html`: The HTML structure for the To-Do List.
- `styles.css`: The CSS for styling the application.
- `script.js`: The JavaScript for handling the logic of adding, deleting, marking tasks as completed, and managing local storage.

## How to Use
1. Open the `index.html` file in your browser.
2. **Add a Task**: Enter a task description, select a due date and time, and choose a priority. Click "Add Task" to add it to the list.
3. **Complete a Task**: Click on a task to mark it as completed. This will strike through the task and change its color.
4. **Delete a Task**: Click "Delete" next to a task to remove it from the list.
5. **Clear Completed Tasks**: Click "Clear Completed Tasks" to remove all tasks marked as completed.

## How It Works
- **Adding a Task**: When you click "Add Task", the task along with its details (text, date, time, priority) is added to the list and stored in local storage.
- **Task Completion**: Clicking on a task toggles the "completed" state, which adds a line-through effect and changes the text color.
- **Deleting a Task**: Clicking the "Delete" button next to a task removes it from the list and updates the local storage.
- **Clearing Completed Tasks**: Clicking the "Clear Completed Tasks" button removes all completed tasks from the list and updates the local storage.

## Local Storage
Tasks are saved in the browser’s local storage, which means the tasks will persist even when the page is reloaded. You can view the stored tasks in the browser's local storage under `tasks`.

## Requirements
- A modern web browser (Chrome, Firefox, Safari, etc.).
- No additional software or installations required.

## Customization
You can modify the task priorities, add more features like task categorization, or extend the application to include additional functionalities like task editing or notifications.
