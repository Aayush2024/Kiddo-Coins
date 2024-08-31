document.getElementById('addTaskForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const task = document.getElementById('task').value;

    // Get existing tasks from localStorage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Add the new task to the list
    tasks.push(task);

    // Save the updated task list to localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Clear the form
    document.getElementById('task').value = '';

    alert('Task added successfully!');
});