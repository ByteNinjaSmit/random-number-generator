const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

let currentNumber;

// Function to generate a 6-digit random number
function generateRandomNumber() {
    currentNumber = Math.floor(100000 + Math.random() * 900000);
}

// Generate the initial random number
generateRandomNumber();

// Update the random number every 30 seconds
setInterval(generateRandomNumber, 5000);

// Serve the current random number
app.get('/number', (req, res) => {
    res.json({ number: currentNumber });
});

// Serve static files (your HTML page)
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});