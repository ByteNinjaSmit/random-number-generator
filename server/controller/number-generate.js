let currentNumber;

// Function to generate a 6-digit random number
function generateRandomNumber() {
    currentNumber = Math.floor(100000 + Math.random() * 900000);
}

// Generate the initial random number
generateRandomNumber();

// Update the random number every second
setInterval(generateRandomNumber, 1000);

module.exports = {
    getCurrentNumber: () => currentNumber,
};
