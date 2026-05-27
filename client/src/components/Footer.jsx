import React from 'react';

function Footer() {
  return (
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
            <div>
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
  );
}

export default Footer;