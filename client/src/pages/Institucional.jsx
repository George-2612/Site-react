import React from 'react';
import { Link } from 'react-router-dom';

function Institucional() {
  return (
    <div className="min-vh-100 d-flex flex-column bg-light w-100">
      
      {/* HEADER PADRÃO HOME + BOTÃO VOLTAR */}
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
              <h1 className="fw-bold mb-0" style={{ fontSize: '2.25rem' }}>Informações Institucionais</h1>
              <p className="opacity-75 mb-0" style={{ fontSize: '0.8rem' }}>Portal da Transparência - FUNDARPE</p>
            </div>

            {/* Lado Direito: Botão Voltar Arredondado */}
            <div className="col-lg-3 text-center text-lg-end">
              <Link to="/" className="btn btn-outline-light rounded-pill px-4 fw-bold shadow-sm" style={{ fontSize: '0.8rem' }}>
                <i className="bi bi-arrow-left me-2"></i>Voltar para o Início
              </Link>
            </div>

          </div>
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="container py-5 flex-grow-1">
        <p className="text-center mb-5 text-muted">Acesse as informações institucionais clicando nas categorias abaixo.</p>

        {/* Acordeão com Estilo de Cards Arredondados */}
        <div className="accordion accordion-flush" id="accordionInstitucional">
          
          {/* 1. Identidade */}
          <div className="accordion-item mb-3 border-0 rounded-4 shadow-sm overflow-hidden">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed fw-bold text-dark py-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseIdentidade">
                IDENTIDADE INSTITUCIONAL
              </button>
            </h2>
            <div id="collapseIdentidade" className="accordion-collapse collapse" data-bs-parent="#accordionInstitucional">
              <div className="accordion-body bg-white text-muted border-top">
                <p>A Fundação do Patrimônio Histórico e Artístico de Pernambuco – FUNDARPE é órgão integrante da Administração Indireta do Poder Executivo Estadual.</p>
                <p><strong>MISSÃO</strong> – Preservar, promover e fomentar o patrimônio cultural pernambucano, garantindo o acesso da população às políticas públicas de cultura.</p>
                <p><strong>PLANEJAMENTO ESTRATÉGICO</strong> – <a href="/arquivos/planejamento-fundarpe.pdf" className="text-primary text-decoration-none fw-bold" target="_blank">Conheça o Planejamento Estratégico.</a></p>
              </div>
            </div>
          </div>

          {/* 2. Estrutura */}
          <div className="accordion-item mb-3 border-0 rounded-4 shadow-sm overflow-hidden">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed fw-bold text-dark py-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEstrutura">
                ESTRUTURA ORGANIZACIONAL
              </button>
            </h2>
            <div id="collapseEstrutura" className="accordion-collapse collapse" data-bs-parent="#accordionInstitucional">
              <div className="accordion-body bg-white text-muted border-top text-center py-4">
                <a href="/arquivos/Organograma.pdf" target="_blank" className="btn btn-primary rounded-pill px-4 fw-bold">
                  <i className="bi bi-diagram-3 me-2"></i>Visualizar Organograma Atualizado
                </a>
              </div>
            </div>
          </div>

          {/* 3. Currículo */}
          <div className="accordion-item mb-3 border-0 rounded-4 shadow-sm overflow-hidden">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed fw-bold text-dark py-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAutoridade">
                CURRÍCULO DA AUTORIDADE
              </button>
            </h2>
            <div id="collapseAutoridade" className="accordion-collapse collapse" data-bs-parent="#accordionInstitucional">
              <div className="accordion-body bg-white text-muted border-top">
                A presidência é o órgão superior de direção. <Link to="/autoridade" className="text-primary fw-bold">O currículo da autoridade máxima está disponível aqui</Link>.
              </div>
            </div>
          </div>

          {/* 4. Gestão */}
          <div className="accordion-item mb-3 border-0 rounded-4 shadow-sm overflow-hidden">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed fw-bold text-dark py-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseGestao">
                RELATÓRIOS DE GESTÃO
              </button>
            </h2>
            <div id="collapseGestao" className="accordion-collapse collapse" data-bs-parent="#accordionInstitucional">
              <div className="accordion-body bg-white text-muted border-top text-center py-4">
                <p className="mb-3">Acesse os relatórios anuais de atividades e balanços financeiros.</p>
                <a href="#" className="btn btn-primary rounded-pill px-4 fw-bold">
                  <i className="bi bi-file-earmark-pdf me-2"></i>Baixar Relatório Anual 2025
                </a>
              </div>
            </div>
          </div>

          {/* 5. Principais Contatos */}
          <div className="accordion-item mb-3 border-0 rounded-4 shadow-sm overflow-hidden">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed fw-bold text-dark py-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseContatos">
                PRINCIPAIS CONTATOS
              </button>
            </h2>
            <div id="collapseContatos" className="accordion-collapse collapse" data-bs-parent="#accordionInstitucional">
              <div className="accordion-body bg-white border-top">
                <div className="row g-4">
                  <div className="col-md-6 border-end">
                    <p className="fw-bold mb-1 text-dark">Atendimento Geral</p>
                    <small className="d-block text-muted mb-1"><i className="bi bi-telephone me-2"></i>(81) 3184-3000</small>
                    <small className="text-primary fw-bold"><i className="bi bi-envelope me-2"></i>atendimento@fundarpe.pe.gov.br</small>
                  </div>
                  <div className="col-md-6">
                    <p className="fw-bold mb-1 text-dark">Ouvidoria</p>
                    <small className="d-block text-muted mb-1"><i className="bi bi-headset me-2"></i>(81) 3184-3001</small>
                    <small className="text-primary fw-bold"><i className="bi bi-envelope-at me-2"></i>ouvidoria@fundarpe.pe.gov.br</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* FOOTER MANTENDO O PADRÃO */}
      <footer className="py-4 text-white mt-auto w-100 text-center" style={{ backgroundColor: '#0A1F44' }}>
        <p className="small mb-0 opacity-50">© 2026 FUNDARPE - Fundação do Patrimônio Histórico e Artístico de Pernambuco</p>
      </footer>
    </div>
  );
}

export default Institucional;