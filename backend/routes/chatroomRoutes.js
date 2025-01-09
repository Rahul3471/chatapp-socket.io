const express = require('express');
const { createChatroom } = require('../Controllers/chatroomController');
const router = express.Router();

router.post('/create', createChatroom);

module.exports = router;
