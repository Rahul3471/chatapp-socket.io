const Message = require('../models/Message');
const User = require('../models/User');

exports.getMessages = async (req, res) => {
  const { chatroomId } = req.params;
  try {
    const messages = await Message.findAll({
      where: { chatroomId },
      include: [{ model: User, attributes: ['username'] }],
      order: [['createdAt', 'ASC']],
    });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
