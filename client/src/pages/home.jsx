import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [contatosBackend, setContatosBackend] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/contatos')
      .then(res => res.json())
      .then(data => setContatosBackend(data))
      .catch(err => console.error("Erro ao conectar:", err));
  }, []);

  const cards = [
    { t: 'Informações Institucionais', d: 'Relatórios de gestão fiscal e balanços.', url: 'https://transparencia.pe.gov.br/' },
    { t: 'Licitações e Contratos', d: 'Editais e contratos firmados.', url: 'https://transparencia.pe.gov.br/licitacoes-e-contratos/' },
    { t: 'Recursos Humanos', d: 'Folha de pagamento e servidores.', url: 'https://transparencia.pe.gov.br/recursos-humanos/' },
    { t: 'Legislação', d: 'Leis estaduais e decretos da Fundarpe.', url: 'https://www.legislacao.pe.gov.br/' },
    { t: 'Ouvidoria / e-SIC', d: 'Solicite informações e envie sugestões.', url: 'https://www.ouvidoria.pe.gov.br/' },
    { t: 'Estrutura Organizacional', d: 'Organograma e currículo da autoridade.', url: '/autoridade', isInternal: true }
  ];

  return (
    <div className="min-vh-100 d-flex flex-column bg-light w-100">
      <header className="py-5 text-white shadow-lg w-100" style={{ backgroundColor: '#0A1F44' }}>
        <div className="container">
          <div className="row align-items-center">
            
            {/* 1. Lado Esquerdo (col-3) */}
            <div className="col-md-3 text-center text-md-start mb-3 mb-md-0">
              <img src="/img/01logo.png" alt="Logo Fundarpe" style={{ maxHeight: '80px' }} />
            </div>

            {/* 2. Centro (col-6) - TÍTULO CENTRALIZADO */}
            <div className="col-md-6 text-center">
              <h1 className="fw-bold mb-0 display-6">Portal da Transparência</h1>
              <p className="opacity-75 mb-0 fw-light small">Fundação do Patrimônio Histórico e Artístico de Pernambuco</p>
            </div>

            {/* 3. Lado Direito (col-3) */}
            <div className="col-md-3 text-center text-md-end">
              <Link to="/contato" className="btn btn-outline-light rounded-pill px-3 py-2 fw-bold shadow-sm" style={{ fontSize: '0.8rem' }}>
                <i className="bi bi-envelope-paper me-2"></i>Fale Conosco
              </Link>
            </div>

          </div>
        </div>
      </header>

      <main className="container py-5 flex-grow-1">
        {contatosBackend.length > 0 && (
          <section className="mb-5 p-4 bg-white rounded shadow-sm border-top border-warning border-4">
            <h3 className="h5 fw-bold mb-4" style={{ color: '#0A1F44' }}>Principais Contatos</h3>
            <div className="row">
              {contatosBackend.map(c => (
                <div key={c.id} className="col-md-4 mb-3">
                  <div className="p-3 border rounded bg-light">
                    <p className="mb-1 fw-bold text-dark">{c.nome}</p>
                    <small className="text-muted">{c.cargo}</small><br/>
                    <small className="text-primary">{c.email}</small>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="row g-4">
          {cards.map((card) => (
            <div key={card.t} className="col-md-6 col-lg-4">
              <section className="card h-100 border-0 shadow-sm p-4 text-center">
                <div className="card-body d-flex flex-column">
                  <h2 className="h5 fw-bold mb-3" style={{ color: '#0A1F44' }}>{card.t}</h2>
                  <p className="small text-muted mb-4 flex-grow-1">{card.d}</p>
                  {card.isInternal ? (
                    <Link to={card.url} className="btn btn-warning rounded-pill px-4 fw-bold shadow-sm">Acessar</Link>
                  ) : (
                    <a href={card.url} target="_blank" rel="noopener noreferrer" className="btn btn-warning rounded-pill px-4 fw-bold shadow-sm">Acessar</a>
                  )}
                </div>
              </section>
            </div>
          ))}
        </div>
      </main>

      <footer className="py-4 text-white mt-auto w-100 text-center" style={{ backgroundColor: '#0A1F44' }}>
        <p className="small mb-0 opacity-50">Desenvolvido pela FUNDARPE - 2026</p>
      </footer>
    </div>
  );
}

export default Home;