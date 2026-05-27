import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function Contato() {
  return (
    <div className="min-vh-100 d-flex flex-column bg-light w-100">
      
      {/* HEADER PADRÃO */}
      <header className="text-white shadow-sm w-100" style={{ 
        background: 'linear-gradient(135deg, #0A1F44 0%, #153670 100%)',
        padding: '1.5rem 0' 
      }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 text-center text-lg-start mb-3 mb-lg-0">
              <img src="/img/fundarpe.png" alt="Logo Fundarpe" style={{ maxHeight: '60px' }} />
            </div>
            <div className="col-lg-6 text-center">
              <h1 className="fw-bold mb-0" style={{ fontSize: '1.25rem' }}>Fale Conosco</h1>
              <p className="opacity-75 mb-0" style={{ fontSize: '0.8rem' }}>Portal da Transparência - FUNDARPE</p>
            </div>
            <div className="col-lg-3 text-center text-lg-end">
              <Link to="/Transparencia" className="btn btn-outline-light rounded-pill px-4 fw-bold shadow-sm" style={{ fontSize: '0.8rem' }}>
                <i className="bi bi-arrow-left me-2"></i>{' '}Voltar para o início
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container py-5 flex-grow-1">
        
        <div className="row g-4 mb-5">
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm text-center p-4 rounded-4 bg-white">
              <i className="bi bi-telephone-fill fs-1 text-primary mb-3"></i>
              <h5 className="fw-bold">Telefone</h5>
              <p className="fw-bold mb-0">(81) 3184-3000</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm text-center p-4 rounded-4 bg-white">
              <i className="bi bi-geo-alt-fill fs-1 text-primary mb-3"></i>
              <h5 className="fw-bold">Endereço</h5>
              <p className="fw-bold mb-0">Rua da Aurora, 463, Recife-PE</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm text-center p-4 rounded-4 bg-white">
              <i className="bi bi-envelope-at-fill fs-1 text-primary mb-3"></i>
              <h5 className="fw-bold">E-mail</h5>
              <p className="fw-bold mb-0 text-primary">atendimento@fundarpe.pe.gov.br</p>
            </div>
          </div>
        </div>

        <div className="row g-4 align-items-stretch">
          
          <div className="col-lg-6">
            <div className="bg-white p-2 rounded-4 shadow-sm h-100">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.414734731804!2d-34.8819586!3d-8.0591147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18949826317b%3A0x6b8036d0e65c52c5!2sFundarpe!5e0!3m2!1spt-BR!2sbr!4v1715090000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="350" 
                style={{ border: 0, borderRadius: '15px' }} 
                allowFullScreen="" 
                loading="lazy"
                title="Mapa Fundarpe"
              ></iframe>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="bg-white p-4 rounded-4 shadow-sm h-100 d-flex flex-column justify-content-center">
              <h4 className="fw-bold mb-4" style={{ color: '#0A1F44' }}>
                <i className="bi bi-clock-history me-2 text-primary"></i>{' '}Horário de Atendimento
              </h4>
              <ul className="list-unstyled mb-4">
                <li className="mb-3 d-flex align-items-center">
                  <span className="badge bg-primary-subtle text-primary rounded-pill me-3 px-3">Seg à Sex</span>
                  <span className="fw-semibold text-dark">08:00 às 17:00</span>
                </li >
                <li className="text-muted small">
                  * Atendimento presencial sujeito a agendamento prévio em períodos de editais.
                </li>
              </ul>
              
              <div className="rounded-4 overflow-hidden mt-2 shadow-sm">
                <img 
                  src="/public/img/fundarpe-frente.jpg" 
                  alt="Sede Fundarpe" 
                  className="img-fluid w-80"
                  style={{ objectFit: 'cover', maxHeight: '180px' }}
                  onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/600x200?text=Sede+Fundarpe"; }}
                />
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Contato;