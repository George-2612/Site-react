import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Autoridade from './pages/Autoridade';
import Contato from './pages/Contato';

// Estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

function App() {
  // Estados de Acessibilidade
  const [menuAberto, setMenuAberto] = useState(false);
  const [isAltoContraste, setIsAltoContraste] = useState(
    localStorage.getItem('altoContraste') === 'true'
  );
  const [fontSize, setFontSize] = useState(
    parseInt(localStorage.getItem('portalFontSize')) 
  );

  // 1. Efeito para Inicializar o VLibras
  useEffect(() => {
    if (window.VLibras) {
      new window.VLibras.Widget('https://vlibras.gov.br/app');
    }
  }, []); // Roda apenas uma vez ao montar o componente

  // 2. Efeito para Alto Contraste
  useEffect(() => {
    if (isAltoContraste) {
      document.body.classList.add('alto-contraste');
    } else {
      document.body.classList.remove('alto-contraste');
    }
    localStorage.setItem('altoContraste', isAltoContraste);
  }, [isAltoContraste]);

  // 3. Efeito para Tamanho da Fonte
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
    localStorage.setItem('portalFontSize', fontSize);
  }, [fontSize]);

  // Funções de Controle
  const alterarFonte = (delta) => {
    setFontSize(prev => {
      const novoTamanho = prev + delta;
      return (novoTamanho >= 12 && novoTamanho <= 24) ? novoTamanho : prev;
    });
  };

  const resetAcessibilidade = () => {
    setIsAltoContraste(false);
    setFontSize(16);
    localStorage.removeItem('altoContraste');
    localStorage.removeItem('portalFontSize');
  };

  return (
    <Router>
      {/* WIDGET DE ACESSIBILIDADE FLUTUANTE */}
      <div className={`menu-acessibilidade-container ${menuAberto ? 'aberto' : ''}`}>
        
        {/* BOTÃO PRINCIPAL (O que aparece na imagem) */}
        <button 
          className="botao-acessibilidade-mestre"
          onClick={() => setMenuAberto(!menuAberto)}
          title="Opções de Acessibilidade"
        >
          <i className={`bi ${menuAberto ? 'bi-x-lg' : 'bi-person-arms-up'}`}></i>
        </button>

        {/* LISTA DE OPÇÕES (Só aparece quando menuAberto é true) */}
        <div className="opcoes-acessibilidade">
          <button onClick={() => alterarFonte(2)} title="Aumentar texto">
            <i className="bi bi-plus-circle"></i>
          </button>
          <button onClick={() => alterarFonte(-2)} title="Diminuir texto">
            <i className="bi bi-dash-circle"></i>
          </button>
          <button onClick={() => setIsAltoContraste(!isAltoContraste)} title="Contraste">
            <i className="bi bi-moon-stars-fill"></i>
          </button>
          <button onClick={resetAcessibilidade} title="Resetar">
            <i className="bi bi-arrow-counterclockwise"></i>
          </button>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/autoridade" element={<Autoridade />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  );
}

export default App;