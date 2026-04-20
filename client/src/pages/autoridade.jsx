import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Autoridade() {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    // Busca os dados da Presidente no servidor Node (REQ-18)
    fetch('http://localhost:5000/api/autoridade')
      .then(res => res.json())
      .then(data => setInfo(data))
      .catch(err => console.error(err));
  }, []);

  if (!info) return <div className="container py-5 text-center">Carregando informações...</div>;

  return (
    <div className="min-vh-100 bg-light">
      {/* Barra de Navegação Superior */}
      <nav className="p-3 shadow-sm" style={{ backgroundColor: '#0A1F44' }}>
        <div className="container">
          <Link to="/" className="text-white text-decoration-none">
            <i className="bi bi-arrow-left me-2"></i>Voltar ao Portal
          </Link>
        </div>
      </nav>

      <main className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10"> {/* Aumentado o espaço para acomodar foto e texto */}
            <div className="bg-white p-5 rounded-4 shadow-sm border-top border-warning border-5">
              
              {/* SISTEMA DE GRID PARA FOTO E NOME */}
              <div className="row align-items-center mb-5">
                <div className="col-md-5 col-lg-4 text-center mb-4 mb-md-0">
                  <img 
                    src="/img/renata1.jpg" // CAMINHO DA IMAGEM NA PASTA PUBLIC
                    alt={`Foto oficial de ${info.nome}`}
                    className="img-fluid rounded-3 shadow border border-3 border-light"
                    style={{ maxHeight: '280px', objectFit: 'cover' }}
                  />
                </div>
                
                <div className="col-md-7 col-lg-8 text-center text-md-start">
                  <h1 className="fw-bold mb-1" style={{ color: '#0A1F44' }}>{info.nome}</h1>
                  <p className="text-muted fw-bold text-uppercase small mb-1">{info.cargo}</p>
                </div>
              </div>

              <hr />
              
              <h2 className="h5 fw-bold mb-3">Biografia e Trajetória</h2>
              <p className="text-secondary mb-5" style={{ lineHeight: '1.8', textAlign: 'justify' }}>
                {info.curriculo}
              </p>

              {/* ÁREA DE DOWNLOAD DO ORGANOGRAMA */}
              <div className="p-4 bg-light rounded-3 d-flex align-items-center justify-content-between border">
                <div>
                  <h3 className="h6 fw-bold mb-1">Organograma Institucional</h3>
                  <p className="small text-muted mb-0">Arquivo oficial em formato PDF</p>
                </div>
                <a 
                  href="/arquivos/Organograma.pdf" 
                  download 
                  className="btn btn-outline-dark fw-bold"
                >
                  <i className="bi bi-file-earmark-pdf me-2 text-danger"></i>Baixar PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Autoridade;