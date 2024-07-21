
const express = require('express');
const router = express.Router();
const ChatbotController = require('../controller/ChatbotController');

router.post('/', ChatbotController.HandleUserQueries);

module.exports = router;