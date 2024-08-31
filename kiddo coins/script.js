const kidImage = document.getElementById('kid-image');
const numberContainer = document.getElementById('number-container');
const gameOverScreen = document.getElementById('game-over-screen');
const collectedNumberSpan = document.getElementById('collected-number');
const playAgainButton = document.getElementById('play-again-button');

let currentNumber = 1;
let collectedNumbers = [];

function generateNumbers() {
    for (let i = 1; i <= 100; i++) {
        const numberDiv = document.createElement('div');
        numberDiv.classList.add('number');
        numberDiv.textContent = i;
        numberContainer.appendChild(numberDiv);
    }
}

function checkNumber(number) {
    if (number === currentNumber) {
        collectedNumbers.push(number);
        currentNumber++;
        number.style.backgroundColor = 'green';
    } else {
        gameOver();
    }
}

function gameOver() {
    gameOverScreen.style.display = 'block';
    collectedNumberSpan.textContent = collectedNumbers.length;
    currentNumber = 1;
    collectedNumbers = [];
    numberContainer.innerHTML = '';
}

function playAgain() {
    gameOverScreen.style.display = 'none';
    generateNumbers();
}

generateNumbers();

numberContainer.addEventListener('click', (event) => {
    const clickedNumber = parseInt(event.target.textContent);
    checkNumber(clickedNumber);
});

playAgainButton.addEventListener('click', playAgain);