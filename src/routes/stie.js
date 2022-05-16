const express = require('express');
const router = express.Router();
const stiteController = require('../app/controller/stiteController');
router.use('/:slug', stiteController.show);
router.use('/', stiteController.index);

module.exports = router;
