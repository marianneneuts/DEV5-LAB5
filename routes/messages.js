var express = require('express');
var router = express.Router();
const messagesController = require('../controllers/messages');

router.get("/", messagesController.getAll);
router.get("/:id", messagesController.getId);

module.exports = router;