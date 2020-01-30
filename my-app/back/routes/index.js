const express = require('express');

const router = express.Router();

const formulaire = require('./formulaire');

router.use('/formulaire', formulaire);

module.exports = router;