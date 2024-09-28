// Function to generate a random number between 1 and 6
function rollDice() {
    return Math.floor(Math.random() * 6) + 1; // Math.random generates a number between 0 and 1, multiplied by 6 gives us a range 0-5, so we add 1
}

// Function to play the Craps game
function playGame() {
    // Generate two random numbers (representing the dice)
    let die1 = rollDice();
    let die2 = rollDice();

    // Calculate the sum of both dice
    let sum = die1 + die2;

    // Get the result area by its id
    let resultArea = document.getElementById('gameResult');

    // Check the rules of the game and update the result accordingly
    if (sum === 7 || sum === 11) {
        resultArea.innerHTML = `You rolled ${die1} and ${die2}. Sum is ${sum}. <strong>CRAPS! You lose!</strong>`;
    } else if (die1 === die2 && die1 % 2 === 0) {
        resultArea.innerHTML = `You rolled doubles! ${die1} and ${die2}. <strong>You won!</strong>`;
    } else {
        resultArea.innerHTML = `You rolled ${die1} and ${die2}. Sum is ${sum}. <strong>You pushed!</strong>`;
    }
}
