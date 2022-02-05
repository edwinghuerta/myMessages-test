const express = require("express");
const messageSchema = require("../models/messages");
const router = express.Router();

//create message
router.post('/create-message', (req, res) => {
    const message = messageSchema(req.body);
    message
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//get all messages
router.get('/get-messages', (req, res) => {
    messageSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


module.exports = router; 