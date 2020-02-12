import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostUM from './Components/primeiropost';
import PostDois from './Components/segundopost';
import PostTres from './Components/terceiropost';


function App() {
  return (
    <div className="App">

      <PostUM nome="@viagem_perfeita" imagem="https://miro.medium.com/proxy/0*5Ip23mZea7oQxjsk" imagem2="http://soter.ninja/static/media/favorite-white.042aa417.svg" imagem3="http://soter.ninja/static/media/comment.de299b47.svg" />
      <PostDois nome="@restaurante_grand" imagem="https://images.unsplash.com/photo-1562967914-4e98de8260ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80"imagem2="http://soter.ninja/static/media/favorite-white.042aa417.svg"/>
      <PostTres nome="@favorita_store" imagem="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"imagem2="http://soter.ninja/static/media/favorite-white.042aa417.svg"/>
     
    </div>
  );
}

export default App;
