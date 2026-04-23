// Dados que atendem aos REQUISITOS 18 e 20
const dadosPortal = {
    contatos: [
        { id: 1, nome: "Renata Borba", cargo: "Presidente", email: "presidencia@fundarpe.pe.gov.br", tel: "(81) 3184-3000" },
        { id: 2, nome: "Lidiane Pessoa", cargo: "Vice-Presidente", email: "lidiane.pessoa@fundarpe.pe.gov.br", tel: "(81) 3184-3001" },
        { id: 3, nome: "Pablo Navarro", cargo: "Superintendente de Compras", email: "pablo.navarro@fundarpe.pe.gov.br", tel: "(81) 3184-3002"}
    ],
    autoridade: {
        nome: "Renata Borba",
        cargo: "Presidente da FUNDARPE",
        curriculo: "Renata Duarte Borba (Presidente da Fundarpe) é formada em Arquitetura e Urbanismo pela Universidade Federal de Pernambuco, Bacharel em Administração pela Universidade de Pernambuco (FCAP) e com MBA em Gestão da Qualidade das Construções..."
    }
};

// Função para retornar os contatos (REQ-20)
exports.getContatos = (req, res) => {
    res.json(dadosPortal.contatos);
};

// Função para retornar o currículo (REQ-18)
exports.getAutoridade = (req, res) => {
    res.json(dadosPortal.autoridade);
};