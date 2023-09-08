// Define your game logic here
const storyText = document.getElementById("story-text");
const choice1Button = document.getElementById("choice-1");
const choice2Button = document.getElementById("choice-2");

// Initial game state
let gameState = 0;

// Function to update the game based on choices
function updateGame() {
    if (gameState === 0) {
        storyText.textContent = "You are in a dark cave.";
        choice1Button.textContent = "Go deeper into the cave";
        choice2Button.textContent = "Turn back";
        gameState = 1;
    } else if (gameState === 1) {
        storyText.textContent = "You encounter a dragon!";
        choice1Button.textContent = "Fight the dragon";
        choice2Button.textContent = "Run away";
        gameState = 2;
    } else if (gameState === 2) {
        storyText.textContent = "You defeated the dragon and found a treasure!";
        choice1Button.textContent = "Play again";
        choice2Button.textContent = "";
        gameState = 0;
    }
}

// Event listeners for choice buttons
choice1Button.addEventListener("click", updateGame);
choice2Button.addEventListener("click", updateGame);
