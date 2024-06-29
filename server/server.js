const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');
const cors = require('cors');
const numberRoutes = require('./routes/number');
const { getCurrentNumber } = require('./controller/number-generate');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3001",
    methods: ["GET", "POST"]
  }
});
const port = 3000;

// Use CORS middleware
app.use(cors({ origin: 'http://localhost:3001' }));

// Middleware to serve static files from client
app.use(express.static(path.join(__dirname, '../client')));

// Use routes
app.use('/api', numberRoutes);

io.on('connection', (socket) => {
    console.log('New client connected');
    // Send the current number immediately on connection
    socket.emit('newNumber', getCurrentNumber());

    // Broadcast new numbers every second
    setInterval(() => {
        socket.emit('newNumber', getCurrentNumber());
    }, 500);

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
