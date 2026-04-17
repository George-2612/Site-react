import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

function App() {
  const cards = [
    { t: 'Informações Institucionais', d: 'Relatórios de gestão fiscal, balanços e despesas.' },
    { t: 'Licitações e Contratos', d: 'Editais, resultados de licitações e contratos firmados.', url: 'https://transparencia.pe.gov.br/licitacoes-e-contratos/' },
    { t: 'Recursos Humanos', d: 'Folha de pagamento, lista de servidores e seleções.', url: 'https://transparencia.pe.gov.br/recursos-humanos/' },
    { t: 'Legislação', d: 'Leis estaduais, decretos e portarias da Fundarpe.' },
    { t: 'Ouvidoria / e-SIC', d: 'Solicite informações e envie sugestões.', url:'https://www.ouvidoria.pe.gov.br/' },
    { t: 'Estrutura Organizacional', d: 'Organograma e quem é quem na fundação.', url:'/public/arquivos/organograma.pdf'}
  ];

  return (
    <div className="min-vh-100 d-flex flex-column bg-light">
      {/* HEADER */}
      <header className="py-5 text-white shadow" style={{ backgroundColor: '#0A1F44' }}>
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-center text-center text-md-start">
          <img src="/img/01logo.png" alt="Logo FUNDARPE" style={{ maxHeight: '90px' }} className="mb-3 mb-md-0 me-md-4" />
          <div>
            <h1 className="fw-bold mb-0 display-6">Portal da Transparência</h1>
            <p className="opacity-75 mb-0 fw-light">Fundação do Patrimônio Histórico e Artístico de Pernambuco</p>
          </div>
        </div>
      </header>

      {/* CARDS */}
      <main className="container py-5 flex-grow-1">
        <div className="row g-4">
          {cards.map((card,) => (
            <div key={card.t} className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm p-4 text-center">
                <div className="card-body d-flex flex-column">
                  <h5 className="fw-bold mb-3">{card.t}</h5>
                  <p className="small text-muted mb-4 flex-grow-1">{card.d}</p>
                  <a href={card.url} target="_blank" rel="noopener noreferrer" className="btn btn-warning rounded-pill px-4 fw-bold shadow-sm text-uppercase" style={{ fontSize: '0.8rem', textDecoration: 'none' }}>
                    Acessar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="py-5 text-white mt-auto" style={{ backgroundColor: '#0A1F44' }}>
        <div className="container text-center">
          <p className="mb-1 small">Rua da Aurora, 463 - Recife/PE</p>
          <p className="mb-0 small">(81) 3184-3000 | atendimento@fundarpe.pe.gov.br</p>
          <div className="mt-4 pt-4 border-top border-secondary opacity-50 x-small">
            Desenvolvido e Customizado pela FUNDARPE - 2026.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;