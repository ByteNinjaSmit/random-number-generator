const express = require('express');
const router = express.Router();
const { getCurrentNumber } = require('../controller/number-generate');

// Define a route to get the current number
router.get('/number', (req, res) => {
    res.json({ number: getCurrentNumber() });
});

module.exports = router;
