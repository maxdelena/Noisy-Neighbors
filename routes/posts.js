const express = require('express');

const router = express.Router();

const postController = require('../controllers/postController');

// router.get('/posts', postController.getPostEntry);
router.get('/index', postController.index);
router.get('/all', postController.getPostEntry);
router.get('/form', postController.retrieveForm);
router.post('/', postController.index2);

module.exports = router;