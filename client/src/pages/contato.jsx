import { useState } from 'react';
import { Link } from 'react-router-dom';

function Contato() {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui no futuro você conectaria com seu back-end Node
    setEnviado(true);
  };

  return (
    <div className="min-vh-100 bg-light">
      <nav className="p-3 shadow-sm" style={{ backgroundColor: '#0A1F44' }}>
        <div className="container">
          <Link to="/" className="text-white text-decoration-none">
            <i className="bi bi-arrow-left me-2"></i>Voltar ao Portal
          </Link>
        </div>
      </nav>

      <main className="container py-5">
        <div className="row g-4">
          {/* Lado Esquerdo: Formulário */}
          <div className="col-md-7">
            <div className="bg-white p-4 rounded shadow-sm border-top border-warning border-4">
              <h2 className="fw-bold h4 mb-4" style={{ color: '#0A1F44' }}>Envie uma Mensagem</h2>
              
              {enviado ? (
                <div className="alert alert-success">Mensagem enviada com sucesso! Em breve entraremos em contato.</div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label small fw-bold">Nome Completo</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label small fw-bold">E-mail</label>
                    <input type="email" className="form-control" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label small fw-bold">Assunto</label>
                    <select className="form-select">
                      <option>Dúvidas</option>
                      <option>Sugestões</option>
                      <option>E-SIC (Acesso à Informação)</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label small fw-bold">Mensagem</label>
                    <textarea className="form-control" rows="5" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-warning fw-bold px-4">ENVIAR</button>
                </form>
              )}
            </div>
          </div>

          {/* Lado Direito: Informações Institucionais */}
          <div className="col-md-5">
            <div className="bg-white p-4 rounded shadow-sm mb-4">
              <h2 className="fw-bold h5 mb-3" style={{ color: '#0A1F44' }}>Sede Administrativa</h2>
              <p className="small mb-2"><i className="bi bi-geo-alt-fill me-2 text-danger"></i>Rua da Aurora, 463 - Recife/PE</p>
              <p className="small mb-2"><i className="bi bi-telephone-fill me-2 text-primary"></i>(81) 3184-3000</p>
              <p className="small mb-4"><i className="bi bi-envelope-fill me-2 text-primary"></i>atendimento@fundarpe.pe.gov.br</p>
              
              <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.39058514172!2d-34.8812!3d-8.06!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMDMnMzYuMCJTIDM0wrA1MicyOC4zIlc!5e0!3m2!1spt-BR!2sbr!4v1" title="Mapa Fundarpe"></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contato;