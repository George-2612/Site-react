// Lógica para o REQUISITO 10 (Fale Conosco)
exports.enviarMensagem = (req, res) => {
    const { nome, email, assunto, mensagem } = req.body;

    // Validação básica de Analista
    if (!nome || !email || !mensagem) {
        return res.status(400).json({ error: "Por favor, preencha todos os campos obrigatórios." });
    }

    // Aqui, no futuro, adicionaremos o Nodemailer para enviar o e-mail real
    // e o código para salvar no Banco SQL para o Relatório da Ouvidoria (REQ-30)
    
    console.log(`Nova mensagem de ${nome} (${email}) sobre: ${assunto}`);

    res.status(201).json({ 
        message: "Mensagem recebida com sucesso! A Ouvidoria da FUNDARPE responderá em breve." 
    });
};