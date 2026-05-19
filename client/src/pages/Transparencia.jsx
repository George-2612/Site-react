import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Transparencia() {
  const [contatosBackend, setContatosBackend] = useState([]);
  const [busca, setBusca] = useState('');

  const cards = [
    { t: 'INFORMAÇÕES INSTITUCIONAIS', d: 'Consulte informações sobre identidade institucional, estrutura organizacional, competências, legislação aplicável, ética e integridade, horário de funcionamento, endereço, contatos, serviços prestados, entre outras informações da FUNDARPE', url: '/Institucional', isInternal: true },
    { t: 'LICITAÇÕES E CONTRATOS', d: 'Obtenha informações sobre o Plano de Contratações Anual, processos licitatórios, inexigibilidade, atas de registro de preço, contratos administrativos, mapa de terceirizados e realize consultas sobre fornecedores.', url: 'https://transparencia.pe.gov.br/licitacoes-e-contratos/' },
    { t: 'RECURSOS HUMANOS', d: 'Obtenha informações sobre servidores ativos, aposentados e pensionistas, estágiarios, remuneração, diárias, concursos entre outras.', url: 'https://transparencia.pe.gov.br/recursos-humanos/' },
    { t: 'LEGISLAÇÃO', d: 'Consulte as leis estaduais, decretos e portarias que regem as atividades da FUNDARPE, garantindo a conformidade e o cumprimento das normas vigentes', url: 'https://www.legislacao.pe.gov.br/' },
    { t: 'PERGUNTAS FREQUENTES', d: 'Acesse as perguntas e respostas mais frequentes da sociedade sobre as atividades desenvolvidas pela FUNDARPE.', url: '/Perguntas', isInternal: true },
    { t: 'SERVIÇO DE INFORMAÇÃO AO CIDADÃO – SIC', d: 'Conheça os Serviços de Informação ao Cidadão, o cumprimento da Lei de Acesso à Informação, entre outras informações.', url: 'https://transparencia.pe.gov.br/participacao-cidada-pe/acesso-a-informacao/' },
    { t: 'MAPA DE DIÁRIAS E PASSAGENS', d: 'Conheça o mapa de Diárias e Passagens da FUNDARPE com informações referentes ao servidor favorecido, eventos, valores, entre outras informações.', url: 'https://drive.google.com/drive/folders/1vr1u0JXcKy0jdk-qDV_Vtn2xX3E1QANA' },
    { t: 'PATRIMÔNIO PÚBLICO', d: 'Consulte informações sobre imóveis e veículos próprios registrados no patrimônio do Governo do Estado.', url: 'https://transparencia.pe.gov.br/gestao-estadual/patrimonio-publico/' },
    { t: 'DESPESAS', d: 'Confira informações sobre despesas estaduais e pagamentos realizados. Acesse dados detalhados sobre os tipos de gastos, fornecedores, serviços contratados, valores desembolsados e outras informações financeiras.', url: 'https://transparencia.pe.gov.br/despesas/menu-despesas/despesas-gerais/' }
  ];

  const cardsFiltrados = cards.filter(card => 
    card.t.toLowerCase().includes(busca.toLowerCase()) || 
    card.d.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="min-vh-100 d-flex flex-column bg-light w-100" style={{ fontFamily: '"Segoe UI", Roboto, sans-serif' }}>
      
      <header style={{ 
        background: 'linear-gradient(135deg, #001f3f 0%, #003366 90%, #00509d 100%)', 
        color: '#fff',
        paddingBottom: '40px'
      }}>
        <div className="container-fluid d-flex align-items-center justify-content-between py-3 px-4 border-bottom border-white border-opacity-10">
          <div className="d-flex align-items-center">
            <img 
              src="/img/fundarpe.png" 
              alt="Logo Fundarpe" 
              style={{ maxHeight: '100px', filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.2))' }} 
            />
          </div>

          <div className="text-center d-none d-md-block">
            <h1 className="fw-bold mb-0" style={{ fontSize: '1.4rem', letterSpacing: '0.5px' }}>
              Portal da Transparência
            </h1>
            <p className="mb-0 opacity-75" style={{ fontSize: '0.85rem' }}>
              Fundação do Patrimônio Histórico e Artístico de Pernambuco
            </p>
          </div>

          <div>
            <Link to="/contato" className="btn btn-outline-light rounded-pill px-4 btn-sm fw-semibold transition-all">
              <i className="bi bi-envelope-fill me-2"></i>Fale Conosco
            </Link>
          </div>
        </div>

        <div className="container text-center mt-5 px-3">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="input-group shadow-lg rounded-pill overflow-hidden bg-white p-1" style={{ border: 'none' }}>
                <span className="input-group-text bg-transparent border-0 ps-3">
                  <i className="bi bi-search text-muted fs-5"></i>
                </span>
                <input 
                  type="text" 
                  className="form-control border-0 form-control-lg fs-6 shadow-none ps-2" 
                  placeholder="Pesquise por licitações, pessoal, nomes, serviços..." 
                  value={busca}
                  onChange={(e) => setBusca(e.target.value)}
                />
                {busca && (
                  <button className="btn btn-link text-muted border-0 me-2" onClick={() => setBusca('')}>
                    <i className="bi bi-x-circle-fill"></i>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container py-5 flex-grow-1">
        
        <div className="row g-4">
          {cardsFiltrados.length > 0 ? (
            cardsFiltrados.map((card) => (
              <div key={card.t} className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm p-4 text-center rounded-3 bg-white border-bottom border-3 border-transparent custom-card-hover"
                     style={{ transition: 'all 0.3s ease' }}>
                  <div className="card-body d-flex flex-column justify-content-between p-0">
                    <div>
                      <h2 className="h5 fw-bold mb-3" style={{ color: '#0A1F44', minHeight: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {card.t}
                      </h2>
                      <p className="small text-muted mb-4">{card.d}</p>
                    </div>
                    <div>
                      {card.isInternal ? (
                        <Link to={card.url} className="btn btn-outline-primary rounded-pill px-4 fw-semibold w-100">
                           Acessar
                        </Link>
                      ) : (
                        <a href={card.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary rounded-pill px-4 fw-semibold w-100">
                          Acessar   
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center w-100 py-5">
              <i className="bi bi-search-heart display-4 text-muted opacity-50"></i>
              <p className="mt-3 text-muted fs-5">Nenhum serviço ou contato encontrado para "{busca}".</p>
              <button className="btn btn-sm btn-secondary rounded-pill mt-2" onClick={() => setBusca('')}>Limpar busca</button>
            </div>
          )}
        </div>
      </main>

      {/* FOOTER ATUALIZADO COM REDES SOCIAIS */}
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
                <p className="fw-bold mb-0">atendimento@</p>
                <p className="fw-bold mb-0">fundarpe.pe.gov.br</p>
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
              <a href="https://www.facebook.com/fundarpe" target="_blank" rel="noopener noreferrer" className="text-white fs-4 transition-all hover-primary">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://www.youtube.com/user/fundarpe" target="_blank" rel="noopener noreferrer" className="text-white fs-4 transition-all hover-primary">
                <i className="bi bi-youtube"></i>
              </a>
              <a href="https://twitter.com/fundarpe" target="_blank" rel="noopener noreferrer" className="text-white fs-4 transition-all hover-primary">
                <i className="bi bi-twitter-x"></i>
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

export default Transparencia;