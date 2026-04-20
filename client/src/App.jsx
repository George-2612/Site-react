import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Autoridade from './pages/Autoridade';
import Contato from './pages/Contato';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

function App() {
  const [isAltoContraste, setIsAltoContraste] = useState(
    localStorage.getItem('altoContraste') === 'true'
  );

  const [fontSize, setFontSize] = useState(
    parseInt(localStorage.getItem('portalFontSize')) || 16
  );

  useEffect(() => {
    if (isAltoContraste) {
      document.body.classList.add('alto-contraste');
    } else {
      document.body.classList.remove('alto-contraste');
    }
    localStorage.setItem('altoContraste', isAltoContraste);
  }, [isAltoContraste]);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
    localStorage.setItem('portalFontSize', fontSize);
  }, [fontSize]);

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
      <div className="grupo-acessibilidade-flutuante">
        <button onClick={() => alterarFonte(2)} title="Aumentar texto">
          <i className="bi bi-plus-circle"></i>
        </button>
        <button onClick={() => alterarFonte(-2)} title="Diminuir texto">
          <i className="bi bi-dash-circle"></i>
        </button>
        <button onClick={resetAcessibilidade} title="Redefinir Padrões" className="border-top mt-1 pt-2">
          <i className="bi bi-arrow-counterclockwise"></i>
        </button>
        <button 
          onClick={() => setIsAltoContraste(!isAltoContraste)}
          title={isAltoContraste ? "Modo Claro" : "Modo Noturno"}
          className={isAltoContraste ? "text-warning" : ""}
        >
          <i className={`bi ${isAltoContraste ? 'bi-sun-fill' : 'bi-moon-stars-fill'}`}></i>
        </button>
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