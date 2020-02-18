import React from 'react';
import logo from './logo.svg';
import avatar from "./img/facebook.png";
import email from "./img/email.svg";
import house from "./img/house.svg";
import expand from "./img/expand.svg";
import './App.css';
import BigCard from "./Components/BigCard";
import ImageButton from "./Components/BigCard";
import PageSection from "./Components/PageSection";
import SmallCard from "./Components/SmallCard";



const imagemEmail = email;
const imagem = house;
const botaovermais = {
  imagem: expand,
  texto: "Ver Mais"
};

const redesocial ={
  imagem:avatar,
  texto: "Facebook"
};

const pessoa = {
  nome: "Marina Isabel",
  avatar:avatar,
  textoPerfil: "Eu sou a Marina, aluna Web Full Stack da Future4! Meu principal objetivo é trabalhar com desenvolvimento de aplicações para web.",
  email: "marinaisabels@live.com",
  endereco: "Rua Maria Francisca da Silva, 35"
};

const empresas = [
  {
    nome:"Future4",
    cargo: "Desenvolvedor Full Stack",
    imagem: avatar
  },
  {
    nome: "OutSmart",
    cargo: "Assistente",
    imagem: avatar
  }
];





function App() {
  return (
    <div className="App">
      <header>
        <h1>Dados Pessoais</h1>
      </header>
     <PageSection heading="Dados Pessoais">
       <BigCard
       nome={pessoa.nome}
       avatar={pessoa.avatar}
       texto={pessoa.perfil}
        />
       
     <SmallCard 
     imagem={imagemEmail}
     chave='Email' 
     valor={pessoa.email}

     />

     <SmallCard 
      imagem={imagem}
      chave="Endereço"
      valor={pessoa.endereco}
      />   
  
     <ImageButton
     imagem={botaovermais.imagem}
     texto={botaovermais.texto}

     />
     </PageSection>
      

      <PageSection heading="Experiências Profissionais">
        {empresas.map(element => (
          <BigCard
          nome={element.nome}
          avatar={element.imagem}
          texto={element.cargo}

      />
        ))}    
      </PageSection>
     
     <PageSection heading="Minhas redes sociais">
       <ImageButton 
       imagem={redesocial.imagem}
       texto={redesocial.texto}

       />
     </PageSection>
      </div>
    
  );
}

export default App;
