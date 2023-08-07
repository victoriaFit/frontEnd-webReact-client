const express = require('express');
const router = express.Router();
const { generateInfo } = require('./generateInfo');

router.post('/generate-info', generateInfo);

module.exports = router;