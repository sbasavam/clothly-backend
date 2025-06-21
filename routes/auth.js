const express = require('express');
const router = express.Router();
const { login, register } = require('../Controller/auth');

router.post('/login', login);
router.post('/create-user', register); // Make sure this matches your frontend

module.exports = router;