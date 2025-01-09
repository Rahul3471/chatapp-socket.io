require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { connectDb } = require('./models');
const userRoutes = require('./routes/userRoutes');
const chatroomRoutes = require('./routes/chatroomRoutes');
const messageRoutes = require('./routes/messageRoutes');
const http = require('http');
const { Server } = require('socket.io');
const { chatSocket } = require('./socket/chatSocket');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*', 
    methods: ['GET', 'POST'],
  },
});

app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/api/chatrooms', chatroomRoutes);
app.use('/api/messages', messageRoutes);


connectDb().then(() => {
  
  const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
}).catch(() => {
    console.log("Error in connecting Db")
});


chatSocket(io);


