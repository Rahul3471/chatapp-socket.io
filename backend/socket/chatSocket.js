const Message = require('../models/Message');

const chatSocket = (io) => {
  io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);

    // Join a chatroom
    socket.on('joinRoom', (chatroomId) => {
      socket.join(chatroomId);
      console.log(`User joined room: ${chatroomId}`);
    });

    
    socket.on('sendMessage', async ({ chatroomId, userId, content }) => {
      try {
        console.log('Received message data:',{chatroomId, userId, content});
        const message = await Message.create({ chatroomId, userId, content });
    
        
        io.to(chatroomId).emit('newMessage', message);
    
        
        console.log(`Message sent to room ${chatroomId}:`, message);
    
        
        socket.emit('messageSent', { success: true, message });
      } catch (error) {
        console.error('Error saving message:', error);
    
        
        socket.emit('messageError', { success: false, error: error.message });
      }
    });
    

    
    socket.on('disconnect', () => {
      console.log(`User disconnected: ${socket.id}`);
    });
  });
};

module.exports = { chatSocket };
