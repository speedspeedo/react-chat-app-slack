const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
const harperSaveMessage = require('./services/harper-save-message');
require('dotenv').config()
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello world');
});

const server = http.createServer(app);

// Create an io server and allow for CORS from http://localhost:3000 with GET and POST methods
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
    },
})

const CHAT_BOT = 'ChatBot';
let chatRoom = '';
let allUsers = [];
// Listen for when the client connects via socket.io-client
io.on('connection', (socket) => {
    console.log(`User connected ${socket.id}`);

    // Add a user to a room
    socket.on('join_room', (data) => {
        const { username, room } = data; // Data sent from client when join_room event emitted 
        socket.join(room); // Join the user to a socket room

        let __createtime__ = Date.now();
        // Send all msgs to all users currently in the room, apart from the use that just joined
        socket.to(room).emit('receive_message', {
            message: `${username} has joined the caht room`,
            username: 'CHAT_BOT',
            __createtime__,
        });
        socket.emit('receive_message', {
            message: `Welcome ${username}`,
            username: CHAT_BOT,
            __createtime__,
        });

        // Save the new user to the room
        chatRoom = room;
        allUsers.push({ id: socket.id, username, room });
        chatRoomUsers = allUsers.filter((user) => user.room === room);
        socket.to(room).emit('chatroom_users', chatRoomUsers);
    });

    socket.on('send_message', (data) => {
        const { message, username, room, __createtime__ } = data;
        io.in(room).emit('receive_message', data);
        harperSaveMessage( message, username, room, __createtime__ )
            .then((response) => console.log(response))
            .catch((err) => console.log(err));
    });
});

server.listen(4000, () => 'Server is running on port 4000');
