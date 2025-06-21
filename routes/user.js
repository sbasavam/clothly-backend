// routes/user.js
const express = require('express');
const router = express.Router();
const { getAllUsers } = require('../Controller/users');

// GET /api/users
router.get('/', getAllUsers);

module.exports = router;