const express = require('express');

const router = express.Router();

const postController = require('../controllers/postController');

// router.get('/posts', postController.getPostEntry);
router.get('/index', postController.index);

module.exports = router;