function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }
// Generate a random number between 1 and 10
let randomNumber = generateRandomNumber();
console.log(randomNumber); // For testing purposes

function checkGuess() {
  const guess = parseInt(document.getElementById('guessField').value);

  if (guess === randomNumber) {
    alert("Congratulations! You guessed the correct number!");
    randomNumber = generateRandomNumber();
    console.log(randomNumber); // For testing purposes
  } else {
    alert("Sorry, try again!");
  }
}

function setMessage(msg) {
  document.getElementById('message').innerText = msg;
}
