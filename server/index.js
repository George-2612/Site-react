const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// --- DADOS INSTITUCIONAIS (REQUISITOS 18, 20 e 30) ---
// No futuro, esses dados virão do seu Banco de Dados
const dadosPortal = {
    contatos: [
        { id: 1, nome: "Renata Borba", cargo: "Presidente", email: "presidencia@fundarpe.pe.gov.br", tel: "(81) 3184-3000" },
        { id: 2, nome: "Lidiane Pessoa", cargo: "Vice-Presidente", email: "lidiane.pessoa@fundarpe.pe.gov.br", tel: "(81) 3184-3001" },
        { id: 3, nome: "Pablo Navarro", cargo: "Superintendente de Compras", email: "pablo.navarro@fundarpe.pe.gov.br", tel: "(811)3184-3002"}
    ],
    autoridade: {
        nome: "Renata Borba",
        cargo: "Presidente da FUNDARPE",
        curriculo: "Renata Duarte Borba (Presidente da Fundarpe) é formada em Arquitetura e Urbanismo pela Universidade Federal de Pernambuco, Bacharel em Administração pela Universidade de Pernambuco (FCAP) e com MBA em Gestão da Qualidade das Construções, pela Universidade de Salvador, Renata acumula quase uma década de dedicação à gestão de projetos de empreendimentos em Pernambuco e na Bahia."
    }
};

// --- ROTAS DA API ---

// Rota base para teste
app.get('/', (req, res) => {
    res.send('API do Portal da Transparência FUNDARPE rodando! 🚀');
});

// Endpoint para o REQUISITO 20 (Contatos)
app.get('/api/contatos', (req, res) => {
    res.json(dadosPortal.contatos);
});

// Endpoint para o REQUISITO 18 (Currículo da Autoridade)
app.get('/api/autoridade', (req, res) => {
    res.json(dadosPortal.autoridade);
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`
    =============================================
    🚀 Servidor rodando na porta ${PORT}
    📡 Endpoint: http://localhost:${PORT}/api/contatos
    =============================================
    `);
});