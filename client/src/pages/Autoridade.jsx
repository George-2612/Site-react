import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function Autoridade() {
  const info = {
    nome: "Renata Borba",
    cargo: "Presidente da FUNDARPE",
    curriculo: "Renata Duarte Borba é formada em Arquitetura e Urbanismo pela Universidade Federal de Pernambuco, bacharel em Administração pela Universidade de Pernambuco e possui MBA em Gestão e Qualidade das Construções pela Universidade Salvador. Especialista em Conservação e Restauração do Patrimônio Cultural Edificado pela Fundação Joaquim Nabuco, foi superintendente do Instituto do Patrimônio Histórico e Artístico Nacional em Pernambuco entre os anos de 2016 e 2020. Desde 2023, exerce o cargo de presidente da Fundação do Patrimônio Histórico e Artístico de Pernambuco."
  };

  return (
    <div className="min-vh-100 d-flex flex-column bg-light w-100">

      {/* HEADER PADRÃO UNIFICADO */}
      <header className="text-white shadow-sm w-100" style={{
        background: 'linear-gradient(135deg, #0A1F44 0%, #153670 100%)',
        padding: '1.5rem 0'
      }}>
        <div className="container">
          <div className="row align-items-center">

            {/* Lado Esquerdo: Logo */}
            <div className="col-lg-3 text-center text-lg-start mb-3 mb-lg-0">
              <img src="/img/fundarpe.png" alt="Logo Fundarpe" style={{ maxHeight: '100px' }} />
            </div>

            {/* Centro: Título */}
            <div className="col-lg-6 text-center">
              <h1 className="fw-bold mb-0" style={{ fontSize: '2.25rem' }}>Autoridade</h1>
              <p className="opacity-75 mb-0" style={{ fontSize: '0.8rem' }}>Portal da Transparência - FUNDARPE</p>
            </div>

            {/* Lado Direito: Botão Voltar Arredondado */}
            <div className="col-lg-3 text-center text-lg-end">
              <Link to="/Transparencia" className="btn btn-outline-light rounded-pill px-4 fw-bold shadow-sm" style={{ fontSize: '0.8rem' }}>
                <i className="bi bi-arrow-left me-2"></i>Voltar para o Início
              </Link>
            </div>

          </div>
        </div>
      </header>

      <main className="container py-5 flex-grow-1">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {/* Card Principal - Troquei a borda amarela pela azul do projeto */}
            <div className="bg-white p-5 rounded-4 shadow-sm border-top border-primary border-5">

              <div className="row align-items-center mb-5">
                <div className="col-md-5 col-lg-4 text-center mb-4 mb-md-0">
                  <img
                    src="/img/presidente.jpeg"
                    alt={`Foto oficial de ${info.nome}`}
                    className="img-fluid rounded-4 shadow-sm border border-3 border-light"
                    style={{ maxHeight: '300px', objectFit: 'cover' }}
                    onError={(e) => e.target.src = "https://via.placeholder.com/300x400?text=Foto+Oficial"}
                  />
                </div>

                <div className="col-md-7 col-lg-8 text-center text-md-start">
                  <h1 className="fw-bold mb-1" style={{ color: '#0A1F44' }}>{info.nome}</h1>
                  <p className="text-primary fw-bold text-uppercase small mb-1" style={{ letterSpacing: '1px' }}>
                    {info.cargo}
                  </p>
                </div>
              </div>

              <hr className="opacity-10 mb-4" />

              <h2 className="h5 fw-bold mb-3" style={{ color: '#0A1F44' }}>Biografia e Trajetória</h2>
              <p className="text-secondary mb-5" style={{ lineHeight: '1.8', textAlign: 'justify' }}>
                {info.curriculo}
              </p>

              {/* ÁREA DE DOWNLOAD */}
              <div className="p-4 bg-light rounded-4 d-flex flex-column flex-md-row align-items-center justify-content-md-between text-center text-md-start border gap-3">

                {/* Bloco de Texto: centralizado no mobile, alinhado à esquerda no PC */}
                <div className="mb-2 mb-md-0">
                  <h3 className="h6 fw-bold mb-1" style={{ color: '#0A1F44' }}>Organograma Institucional</h3>
                  <p className="small text-muted mb-0">Confira a estrutura de hierarquia da fundação</p>
                </div>
                <a
                  href="/arquivos/Organograma.pdf"
                  target="_blank"
                  className="btn btn-primary rounded-pill px-4 fw-bold shadow-sm"
                >
                  <i className="bi bi-file-earmark-pdf me-2"></i>Visualizar PDF
                </a>

              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Autoridade;