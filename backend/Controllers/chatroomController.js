const Chatroom = require('../models/Chatroom');

exports.createChatroom = async (req, res) => {
  const { name } = req.body;
  try {
    const chatroom = await Chatroom.create({ name });
    res.status(201).json(chatroom);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
