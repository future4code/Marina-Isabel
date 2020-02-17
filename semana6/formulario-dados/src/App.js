import React from 'react';
import logo from './logo.svg';
import './App.css';
import PrimeiroFormulario from './Components/formulario1';
import SegundoFormulario from './Components/formulario2';
import TerceiroFormulario from './Components/formulario3';
import FimFormulario from './Components/fim';

function App() {
  return (
    <div className="App">
      <PrimeiroFormulario/>
      <SegundoFormulario/>
      <TerceiroFormulario/>
      <FimFormulario/>
    
      </div>
  );
}

export default App;
