document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('taskList');
    const uploadForm = document.getElementById('uploadForm');
    const videoUpload = document.getElementById('videoUpload');

    // Get query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const age = urlParams.get('age');
    const subject = urlParams.get('subject');

    // Define tasks based on age and subject
    let tasks = [];

    if (age) {
        if (age === '4' || age === '5') {
            tasks.push("Write 1 to 10 five times");
        }
        if (age === '6') {
            if (subject === 'english') {
                tasks.push("Write A to Z in cursive");
            } else if (subject === 'maths') {
                tasks.push("Write the multiplication table from 2 to 10");
            }
        }
    }

    // Display tasks
    tasks.forEach(taskText => {
        const li = document.createElement('li');
        li.textContent = taskText;
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
            // You might add coin logic here if needed
        });
        taskList.appendChild(li);
    });

    uploadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (videoUpload.files.length > 0) {
            const file = videoUpload.files[0];
            alert(`Video ${file.name} uploaded successfully!`);
            
            // Add 100 coins and redirect to the success page
            addCoins(100);  // Update this to use the correct function
            window.location.href = 'success.html';
        }
    });
});

function addCoins(amount) {
    const coinDisplay = document.getElementById('coinDisplay');
    let currentCoins = parseInt(coinDisplay.textContent.replace('Coins: ', ''));
    coinDisplay.textContent = `Coins: ${currentCoins + amount}`;
}