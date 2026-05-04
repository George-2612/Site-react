import React from 'react';
import { Link } from 'react-router-dom';

function Institucional() {
  return (
    <div className="min-vh-100 d-flex flex-column bg-light w-100">
      
      <header className="py-5 text-white shadow-lg w-100" style={{ backgroundColor: '#0A1F44' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-3 text-center text-md-start mb-3 mb-md-0">
              <img src="/img/01logo.png" alt="Logo Fundarpe" style={{ maxHeight: '80px' }} />
            </div>
            <div className="col-md-6 text-center">
              <h1 className="fw-bold mb-0 display-6">Informações Institucionais</h1>
              <p className="opacity-75 mb-0 fw-light small">Fundação do Patrimônio Histórico e Artístico de Pernambuco</p>
            </div>
            <div className="col-md-3 text-center text-md-end">
              <Link to="/contato" className="btn btn-outline-light rounded-pill px-3 py-2 fw-bold shadow-sm" style={{ fontSize: '0.8rem' }}>
                <i className="bi bi-envelope-paper me-2"></i>Fale Conosco
              </Link>
            </div>
          </div>
          
        </div>
      </header>
      

      <main className="container py-5 flex-grow-1">
        <p className="text-center mb-5 text-muted">Acesse as informações institucionais clicando nas opções abaixo.</p>

        <div className="accordion accordion-flush shadow-sm" id="accordionInstitucional">
          
          {/* Tópico 1: Identidade */}
          <div className="accordion-item mb-2 border rounded">
  <h2 className="accordion-header">
    <button className="accordion-button collapsed fw-bold text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseIdentidade">
      IDENTIDADE INSTITUCIONAL
    </button>
  </h2>
  <div id="collapseIdentidade" className="accordion-collapse collapse" data-bs-parent="#accordionInstitucional">
    <div className="accordion-body bg-white text-muted">
      <p>
        A Fundação do Patrimônio Histórico e Artístico de Pernambuco – FUNDARPE é órgão integrante da Administração Indireta do Poder Executivo Estadual.
      </p>
      
      <p><strong>MISSÃO</strong> – Preservar, promover e fomentar o patrimônio cultural pernambucano, garantindo o acesso da população às políticas públicas de cultura.</p>
      
      <p><strong>LEGISLAÇÃO</strong> – A Fundarpe rege-se pelo estatuto instituído pela Lei Estadual nº 10.403, de 29 de dezembro de 1989, que dispõe sobre a sua criação e estrutura.</p>

      <p><strong>PLANEJAMENTO ESTRATÉGICO</strong> – <a href="/arquivos/planejamento-fundarpe.pdf" target="_blank" rel="noopener noreferrer">Conheça o Planejamento Estratégico da Fundarpe.</a></p>
    </div>
  </div>
</div>
          
          {/* Tópico 2: Estrutura */}
          <div className="accordion-item mb-2 border rounded">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed fw-bold text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEstrutura">
                ESTRUTURA ORGANIZACIONAL
              </button>
            </h2>
            <div id="collapseEstrutura" className="accordion-collapse collapse" data-bs-parent="#accordionInstitucional">
              <div className="accordion-body bg-white text-muted">
                <a href="/arquivos/Organograma.pdf" target="_blank" rel="noopener noreferrer">Clique aqui para visualizar o organograma atualizado</a>.
              </div>
            </div>
          </div>

          {/* Tópico 3: Currículo */}
          <div className="accordion-item mb-2 border rounded">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed fw-bold text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAutoridade">
                CURRÍCULO DA AUTORIDADE
              </button>
            </h2>
            <div id="collapseAutoridade" className="accordion-collapse collapse" data-bs-parent="#accordionInstitucional">
              <div className="accordion-body bg-white text-muted">
                A presidência é o órgão superior de direção. <Link to="/autoridade">O currículo da autoridade máxima está disponível aqui</Link> em conformidade com a Lei de Acesso à Informação.
              </div>
            </div>
          </div>

          {/* Tópico 4: Gestão */}
          <div className="accordion-item mb-2 border rounded">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed fw-bold text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseGestao">
                RELATÓRIOS DE GESTÃO - 2025
              </button>
            </h2>
            <div id="collapseGestao" className="accordion-collapse collapse" data-bs-parent="#accordionInstitucional">
              <div className="accordion-body bg-white text-muted">
                <p className="mb-3">Acesse aqui os relatórios anuais de atividades e balanços financeiros.</p>
                <a href="#" className="btn btn-warning rounded-pill px-4 fw-bold shadow-sm">
                  <i className="bi bi-file-earmark-pdf me-2"></i>Baixar Relatório Anual 2025
                </a>
              </div>
            </div>
          </div>

        </div>
      </main>

      <footer className="py-4 text-white mt-auto w-100 text-center" style={{ backgroundColor: '#0A1F44' }}>
        <p className="small mb-0 opacity-50">Desenvolvido pela FUNDARPE - 2026</p>
      </footer>
    </div>
  );
}

export default Institucional;