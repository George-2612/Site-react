const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Importação da Central de Rotas
const apiRoutes = require('./routes/apiRoutes'); 

// Aplicação Única das Rotas - Evita o erro de "Identifier already declared"
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    res.send('API do Portal da Transparência FUNDARPE está a rodar! 🚀');
});

// Porta 3001 definida no seu .env
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`
    =============================================
    🚀 SERVIDOR ATIVO
    📡 Endereço: http://localhost:${PORT}
    📂 Rotas Ativas (prefixo /api):
       - /api/contatos
       - /api/autoridade
       - /api/estatisticas/mais-acessadas
    =============================================
    `);
});