const express = require('express');
const router = express.Router();
const institucionalController = require('../controllers/institucionalController');

// Define os endpoints da API
router.get('/contatos', institucionalController.getContatos);
router.get('/autoridade', institucionalController.getAutoridade);

module.exports = router;