let randomNumber;
let attempts = 0;
const maxAttempts = 5;

function generateRandomNumber() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
}

function checkGuess() {
  const userGuess = parseInt(document.getElementById('userGuess').value);
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    alert('Please enter a valid number between 1 and 100.');
    return;
  }

  attempts++;
  if (userGuess === randomNumber) {
    document.getElementById('feedback').innerText = `Congratulations! You guessed the number ${randomNumber} correctly in ${attempts} attempts.`;
    attempts = 0;
    generateRandomNumber();
  } else if (attempts >= maxAttempts) {
    document.getElementById('feedback').innerText = `Sorry, you've reached the maximum number of attempts. The correct number was ${randomNumber}.`;
    attempts = 0;
    generateRandomNumber();
  } else if (userGuess < randomNumber) {
    document.getElementById('feedback').innerText = 'Too low! Try again.';
  } else {
    document.getElementById('feedback').innerText = 'Too high! Try again.';
  }
}

generateRandomNumber();
