const express = require('express');
const router = express.Router();

// Importação dos Controllers (Certifique-se de que os nomes dos arquivos na pasta coincidem)
const institucional = require('../controllers/institucionalController');
const contato = require('../controllers/contatoController');
const estatistica = require('../controllers/estatisticaController');

// Rotas do Portal
router.get('/contatos', institucional.getContatos);
router.get('/autoridade', institucional.getAutoridade);
router.get('/estatisticas/mais-acessadas', estatistica.getMaisAcessadas);
router.get('/estatisticas/volume-mensal', estatistica.getVolumeMensal);
router.post('/contato/enviar', contato.enviarMensagem);

module.exports = router;