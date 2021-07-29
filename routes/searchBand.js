const express = require('express');

const router = express.Router();


const searchController = require('../controllers/search');

router.get('/index3', searchController.index3);
router.post('/create', searchController.index3);

module.exports = router;