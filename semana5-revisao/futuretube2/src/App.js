import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h2>FutureTube</h2>
        <input type="text" placeholder="Buscar"/>
      </header>
      
      <div className="video-container">
      <nav>
          <p>Início</p>
          <p>Em alta</p>
          <p>Inscrições</p>
          <p>Originais</p>
          <p>Biblioteca</p>
          <p>Histórico</p>
        </nav>


      <section>

        <article>
        <img src={require('./img/img1.jpg')} alt="img1"/>
            <p className="nome-video">Video 1</p>
        </article>

        <article>
        <img src={require('./img/img2.jpg')} alt="img2"/>
            <p className="nome-video">Video 2</p>
        </article>

        <article>
        <img src={require('./img/img3.jpg')} alt="img3"/>
            <p className="nome-video">Video 3</p>
        </article>

        <article>
        <img src={require('./img/img4.jpg')} alt="img4"/>
            <p className="nome-video">Video 4</p>
        </article>

        <article>
        <img src={require('./img/img5.jpg')} alt="img5"/>
            <p className="nome-video">Video 5</p>
        </article>

        <article>
        <img src={require('./img/img6.jpg')} alt="img6"/>
            <p className="nome-video">Video 6</p>
        </article>

        <article>
        <img src={require('./img/img7.jpg')} alt="img7"/>
            <p className="nome-video">Video 7</p>
        </article>

        <article>
        <img src={require('./img/img8.jpg')} alt="img8"/>
            <p className="nome-video">Video 8</p>
        </article>

      </section>
    </div>
    <footer>
      Oi! Eu sou da Turma Sagan!
      <div className="redes-sociais">
        <p>Redes Sociais</p>

      </div>
    </footer>

    </div>

  );
}

export default App;
