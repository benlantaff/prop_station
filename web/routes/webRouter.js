const express = require('express');
const router = express.Router();
const controller = require('../controllers/webController');

// Index
router.route('/').get(controller.renderHomePage);

module.exports = router;
