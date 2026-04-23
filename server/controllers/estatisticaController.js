const estatisticasSimuladas = {
    maisAcessadas: [
        { id: 1, pagina: "Licitações", acessos: 2540 },
        { id: 2, pagina: "Pessoal", acessos: 2100 },
        { id: 3, pagina: "Contratos", acessos: 1850 }
    ],
    volumeMensal: { mes: "Abril/2026", total: 12500 }
};

// REQ-07: Note o nome da função
exports.getMaisAcessadas = (req, res) => {
    res.json(estatisticasSimuladas.maisAcessadas);
};

// REQ-08
exports.getVolumeMensal = (req, res) => {
    res.json(estatisticasSimuladas.volumeMensal);
};