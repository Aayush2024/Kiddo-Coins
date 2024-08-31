window.onload = function() {
    // Get tasks from localStorage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    const taskList = document.getElementById('taskList');

    // Display the tasks
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;
        taskList.appendChild(li);
    });

    // Show upload section if tasks are available
    if (tasks.length > 0) {
        document.getElementById('uploadSection').style.display = 'block';
    }
};

document.getElementById('uploadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const file = document.getElementById('videoUpload').files[0];
    alert(`Video ${file.name} uploaded successfully!`);

    // Logic for awarding coins can be added here
});