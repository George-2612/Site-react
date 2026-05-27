import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      
      {/* CONTEÚDO PRINCIPAL (CENTRALIZADO) */}
      <div className="container flex-grow-1 d-flex align-items-center py-5">
        <div className="row justify-content-center text-center w-100 m-0">
          <div className="col-md-8 col-lg-6">
            
            {/* Brasão ou Identificação Visual */}
            <div className="mb-4">
              <img 
                src="/Brasão_de_Pernambuco.svg" 
                alt="Brasão do Estado de Pernambuco" 
                style={{ width: '120px', height: 'auto' }}
                className="img-fluid"
              />
            </div>

            {/* Cabeçalho do Portal */}
            <h1 className="fw-bold text-dark mb-2">Fundarpe</h1>

            {/* Alerta de Em Construção */}
            <div className="alert alert-warning border-0 shadow-sm rounded-3 py-3 mb-5" role="alert">
              <i className="bi bi-exclamation-triangle-fill me-2"></i>{' '}
              Atenção: O novo <strong>Portal da Fundarpe</strong> está em fase de construção.
            </div>

            {/* Seção de Links e Direcionamentos */}
            <div className="d-grid gap-3">
              
              {/* Link Interno para a Área de Transparência */}
              <Link 
                to="/transparencia" 
                className="btn btn-primary btn-lg shadow-sm py-3 fw-semibold d-flex align-items-center justify-content-center"
              >
                <i className="bi bi-shield-check me-2 fs-5"></i>{' '}
                Acessar Área de Transparência
              </Link>

              {/* Link Externo para o Portal da Cultura PE */}
              <a 
                href="https://www.cultura.pe.gov.br" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline-dark btn-lg shadow-sm py-3 fw-semibold d-flex align-items-center justify-content-center"
              >
                <i className="bi bi-globe2 me-2 fs-5"></i>{' '}
                Ir para o Portal da Cultura PE
                {' '}<i className="bi bi-box-arrow-up-right ms-2 fs-6 opacity-50"></i>
              </a>

            </div>
          </div>
        </div>
      </div>

      {/* RODAPÉ CUSTOMIZADO */}
      <Footer />

    </div>
  );
}

export default Home;