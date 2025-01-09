const express = require('express');
const { sendMessage, getMessages } = require('../Controllers/messageController');
const authMiddleware = require('../middlewares/authMiddlewares');
const router = express.Router();

// router.post('/send', authMiddleware, sendMessage);
router.get('/:chatroomId', authMiddleware, getMessages);

module.exports = router;
