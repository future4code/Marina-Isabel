  
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './Components/Feed/Feed';
import Autor from './Components/autor';
import FotoDoPost from './Components/fotopost';
import Comentar from './Components/comentar';
import likes from './Components/likes';


function App() {
  return (
    <div className="App">
      
<Post>
       <Autor nome="@viagem_perfeita"/>
       <FotoDoPost imagem="https://miro.medium.com/proxy/0*5Ip23mZea7oQxjsk"/>
       <Comentar/>
       <likes/>



</Post>
       
    </div>
  );
}

export default App;  