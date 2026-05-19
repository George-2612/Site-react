import React from 'react';
import { Link } from 'react-router-dom';

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
      <footer className="py-5 text-white shadow-lg" style={{ backgroundColor: '#001a35' }}>
        <div className="container">
          <div className="row text-center align-items-start g-4">
            
            {/* Coluna 1: Localização */}
            <div className="col-md-4 d-flex flex-column align-items-center">
              <i className="bi bi-geo-alt-fill text-primary fs-3 mb-2"></i>
              <div style={{ maxWidth: '200px' }}>
                <p className="fw-bold mb-0">Rua da Aurora, 463/469</p>
                <p className="small opacity-75">Recife - PE</p>
              </div>
            </div>

            {/* Coluna 2: Telefone */}
            <div className="col-md-4 d-flex flex-column align-items-center">
              <i className="bi bi-telephone-fill text-primary fs-3 mb-2"></i>
              <div style={{ maxWidth: '200px' }}>
                <p className="fw-bold mb-0">(81) 3184-3000</p>
                <p className="small opacity-75">Seg-Sex: 08h-17h</p>
              </div>
            </div>

            {/* Coluna 3: E-mail */}
            <div className="col-md-4 d-flex flex-column align-items-center">
              <i className="bi bi-envelope-fill text-primary fs-3 mb-2"></i>
              <div style={{ maxWidth: '200px' }}>
                <p className="fw-bold mb-0">atendimento@fundarpe.pe.gov.br</p>
              </div>
            </div>
          </div>

          {/* NOVA SEÇÃO: REDES SOCIAIS */}
          <div className="text-center mt-5 mb-4">
            <p className="small text-uppercase opacity-50 mb-3" style={{ letterSpacing: '2px' }}>Siga nossas redes</p>
            <div className="d-flex justify-content-center gap-4">
              <a href="https://www.instagram.com/fundarpe" target="_blank" rel="noopener noreferrer" className="text-white fs-4 transition-all hover-primary">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>

          {/* Linha de Copyright */}
          <div className="text-center pt-4 border-top border-white border-opacity-10">
            <small className="text-uppercase opacity-50" style={{ fontSize: '0.75rem' }}>
              © {new Date().getFullYear()} Governo do Estado de Pernambuco • Todos os direitos reservados
            </small>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default Home;