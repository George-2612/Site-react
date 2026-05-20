import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function Perguntas() {
  return (
    <div className="min-vh-100 d-flex flex-column bg-light w-100">
      
      {/* HEADER PADRÃO HOME + BOTÃO VOLTAR */}
      <header className="text-white shadow-sm w-100" style={{ 
        background: 'linear-gradient(135deg, #0A1F44 0%, #153670 100%)',
        padding: '1.5rem 0' 
      }}>
        <div className="container">
          <div className="row align-items-center">
            
            {/* Lado Esquerdo: Logo */}
            <div className="col-lg-3 text-center text-lg-start mb-3 mb-lg-0">
              <img src="/img/fundarpe.png" alt="Logo Fundarpe" style={{ maxHeight: '100px' }} />
            </div>

            {/* Centro: Título */}
            <div className="col-lg-6 text-center">
              <h1 className="fw-bold mb-0" style={{ fontSize: '2.25rem' }}>Perguntas Frequentes</h1>
              <p className="opacity-75 mb-0" style={{ fontSize: '0.8rem' }}>Portal da Transparência - FUNDARPE</p>
            </div>

            {/* Lado Direito: Botão Voltar Arredondado */}
            <div className="col-lg-3 text-center text-lg-end">
              <Link to="/Transparencia" className="btn btn-outline-light rounded-pill px-4 fw-bold shadow-sm" style={{ fontSize: '0.8rem' }}>
                <i className="bi bi-arrow-left me-2"></i>{' '}Voltar para o Início
              </Link>
            </div>

          </div>
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="container py-5 flex-grow-1">
        <p className="text-center mb-5 text-muted">Acesse as principais perguntas frequentes sobre a Fundarpe clicando nas categorias abaixo.</p>

        {/* Acordeão com Estilo de Cards Arredondados */}
        <div className="accordion accordion-flush" id="accordionPerguntas">
          
          {/* 1. Endereço */}
          <div className="accordion-item mb-3 border-0 rounded-4 shadow-sm overflow-hidden">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed fw-bold text-dark py-3" type="button" data-bs-toggle="collapse" data-bs-target="#faqEndereco">
                Qual é o endereço da FUNDARPE e como posso entrar em contato?
              </button>
            </h2>
            <div id="faqEndereco" className="accordion-collapse collapse" data-bs-parent="#accordionPerguntas">
              <div className="accordion-body bg-white text-muted border-top">
                <p>Nossa sede fica na <strong>Rua da Aurora, 463/469, Boa Vista, Recife - PE, CEP: 50050-000</strong>.</p>
                <p>Você pode entrar em contato pelo telefone <strong>(81) 3184-3000</strong> ou pelo e-mail <strong>atendimento@fundarpe.pe.gov.br</strong>.</p>
              </div>
            </div>
          </div>

          {/* 2. Horário */}
          <div className="accordion-item mb-3 border-0 rounded-4 shadow-sm overflow-hidden">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed fw-bold text-dark py-3" type="button" data-bs-toggle="collapse" data-bs-target="#faqHorario">
                Qual o horário de atendimento ao público?
              </button>
            </h2>
            <div id="faqHorario" className="accordion-collapse collapse" data-bs-parent="#accordionPerguntas">
              <div className="accordion-body bg-white text-muted border-top">
                <p>O atendimento presencial na sede e os serviços administrativos funcionam de <strong>segunda a sexta-feira, das 08h às 17h</strong>, exceto em feriados nacionais ou estaduais.</p>
              </div>
            </div>
          </div>

          {/* 3. Editais Funcultura */}
          <div className="accordion-item mb-3 border-0 rounded-4 shadow-sm overflow-hidden">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed fw-bold text-dark py-3" type="button" data-bs-toggle="collapse" data-bs-target="#faqEditais">
                Onde encontro informações sobre os próximos editais do Funcultura?
              </button>
            </h2>
            <div id="faqEditais" className="accordion-collapse collapse" data-bs-parent="#accordionPerguntas">
              <div className="accordion-body bg-white text-muted border-top">
                <p>Todos os editais vigentes e futuros são publicados no site oficial da FUNDARPE e no Diário Oficial do Estado.</p>
                <p>Você também pode acompanhar o calendário de fomento diretamente no site da Transparência de Pernambuco ou em nossas redes sociais oficiais.</p>
              </div>
            </div>
          </div>

          {/* 4. Tombamento */}
          <div className="accordion-item mb-3 border-0 rounded-4 shadow-sm overflow-hidden">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed fw-bold text-dark py-3" type="button" data-bs-toggle="collapse" data-bs-target="#faqTombamento">
                Como solicitar o tombamento de um imóvel ou patrimônio histórico?
              </button>
            </h2>
            <div id="faqTombamento" className="accordion-collapse collapse" data-bs-parent="#accordionPerguntas">
              <div className="accordion-body bg-white text-muted border-top">
                <p>O pedido deve ser formalizado via requerimento dirigido à <strong>Gerência de Patrimônio Cultural da FUNDARPE</strong>.</p>
                <p>É necessário anexar justificativa do valor histórico ou cultural, fotos do bem e dados de identificação do proprietário. O processo passará por análise técnica do Conselho Estadual de Preservação do Patrimônio Cultural.</p>
              </div>
            </div>
          </div>

          {/* 5. e-SIC */}
          <div className="accordion-item mb-3 border-0 rounded-4 shadow-sm overflow-hidden">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed fw-bold text-dark py-3" type="button" data-bs-toggle="collapse" data-bs-target="#faqSIC">
                Como posso protocolar um pedido de informação oficial (e-SIC)?
              </button>
            </h2>
            <div id="faqSIC" className="accordion-collapse collapse" data-bs-parent="#accordionPerguntas">
              <div className="accordion-body bg-white border-top">
                <p>Você pode utilizar o <strong>Sistema de Informação ao Cidadão (e-SIC)</strong> disponível no site da Transparência de Pernambuco.</p>
                <p>Caso prefira o atendimento presencial, pode procurar a nossa Ouvidoria na sede da Fundarpe para protocolar o seu pedido de acesso à informação.</p>
              </div>
            </div>
          </div>

          {/* 6. Cadastro de Produtor Cultural (CPC) */}
          <div className="accordion-item mb-3 border-0 rounded-4 shadow-sm overflow-hidden">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed fw-bold text-dark py-3" type="button" data-bs-toggle="collapse" data-bs-target="#faqCPC">
                Como faço para obter ou renovar o meu Cadastro de Produtor Cultural (CPC)?
              </button>
            </h2>
            <div id="faqCPC" className="accordion-collapse collapse" data-bs-parent="#accordionPerguntas">
              <div className="accordion-body bg-white text-muted border-top">
                <p>O cadastro e a renovação devem ser realizados através do <strong>Prosas</strong> ou do sistema indicado no site oficial da FUNDARPE.</p>
                <p>É necessário apresentar documentos como RG, CPF, comprovante de residência e um portfólio detalhado que comprove atuação na área cultural há, pelo menos, um ou dois anos (conforme exigido no regulamento vigente).</p>
              </div>
            </div>
          </div>

          {/* 7. Agendamento de Espaços */}
          <div className="accordion-item mb-3 border-0 rounded-4 shadow-sm overflow-hidden">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed fw-bold text-dark py-3" type="button" data-bs-toggle="collapse" data-bs-target="#faqEspacos">
                Como solicitar o uso de equipamentos culturais (Teatros, Cinemas e Museus)?
              </button>
            </h2>
            <div id="faqEspacos" className="accordion-collapse collapse" data-bs-parent="#accordionPerguntas">
              <div className="accordion-body bg-white text-muted border-top">
                <p>A solicitação de pauta para equipamentos como o <strong>Cinema São Luiz, Teatro Arraial ou museus estaduais</strong> deve ser feita via ofício direcionado à diretoria do espaço ou através de editais de ocupação específicos.</p>
                <p>Verifique as taxas de uso e a disponibilidade de datas na aba "Equipamentos Culturais" do nosso site principal.</p>
              </div>
            </div>
          </div>

          {/* 8. Prestação de Contas */}
          <div className="accordion-item mb-3 border-0 rounded-4 shadow-sm overflow-hidden">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed fw-bold text-dark py-3" type="button" data-bs-toggle="collapse" data-bs-target="#faqContas">
                Onde encontro orientações para prestação de contas de projetos aprovados?
              </button>
            </h2>
            <div id="faqContas" className="accordion-collapse collapse" data-bs-parent="#accordionPerguntas">
              <div className="accordion-body bg-white text-muted border-top">
                <p>As orientações completas, manuais e formulários para prestação de contas do <strong>Funcultura, Lei Paulo Gustavo ou Aldir Blanc</strong> estão disponíveis na área do proponente.</p>
                <p>Em caso de dúvidas técnicas, você pode agendar um atendimento com a Unidade de Prestação de Contas da FUNDARPE.</p>
              </div>
            </div>
          </div>

          {/* 9. Acessibilidade */}
          <div className="accordion-item mb-3 border-0 rounded-4 shadow-sm overflow-hidden">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed fw-bold text-dark py-3" type="button" data-bs-toggle="collapse" data-bs-target="#faqAcessibilidade">
                Quais recursos de acessibilidade estão disponíveis no Portal da Transparência?
              </button>
            </h2>
            <div id="faqAcessibilidade" className="accordion-collapse collapse" data-bs-parent="#accordionPerguntas">
              <div className="accordion-body bg-white text-muted border-top">
                <p>Este portal conta com ferramentas de <strong>alto contraste, ajuste de tamanho de fonte e integração com o VLibras</strong> para tradução de conteúdos em tempo real para a Língua Brasileira de Sinais.</p>
                <p>Utilize o menu flutuante lateral para ativar essas opções conforme sua necessidade.</p>
              </div>
            </div>
          </div>

          {/* 10. Agenda de Eventos */}
          <div className="accordion-item mb-3 border-0 rounded-4 shadow-sm overflow-hidden">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed fw-bold text-dark py-3" type="button" data-bs-toggle="collapse" data-bs-target="#faqAgenda">
                Onde posso consultar a programação cultural do Estado (Carnaval, São João, Festival de Inverno)?
              </button>
            </h2>
            <div id="faqAgenda" className="accordion-collapse collapse" data-bs-parent="#accordionPerguntas">
              <div className="accordion-body bg-white text-muted border-top">
                <p>A programação detalhada dos grandes ciclos festivos e festivals realizados pela FUNDARPE pode ser acessada no portal <strong>Cultura.PE</strong> e no site oficial do Governo de Pernambuco.</p>
                <p>Lá são publicados os horários, locais das apresentações e a lista completa de artistas habilitados.</p>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer/>
    </div>
  );
}

export default Perguntas;