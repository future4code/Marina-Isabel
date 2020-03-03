import React from 'react';
import './App.css';
import TelaCadastro from './Components/TelaCadastro';
import TelaLista from './Components/TelaLista';






class App extends React.Component {
    constructor(props){
      super(props);

      this.state ={
        clicouLista: false,
      }
    }

    handleClicou = () => {
      const mudouLista = !this.state.clicouLista;
      this.setState({ clicouLista: mudouLista });
    };


    render(){

      if(this.state.clicouLista){
       return ( 
       <TelaLista/>
       )
      } else {   
         return (
          <div>
            <button onClick={this.handleClicou}>Ir para página de lista</button>
            <TelaCadastro/>
          </div>
        );
      }
    }
  }

export default App;
