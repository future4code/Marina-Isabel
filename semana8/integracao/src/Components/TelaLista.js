import React from 'react'
import TelaCadastro from './TelaCadastro'
import App from '../App';

class TelaLista extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            clicouCadastro: false,
        };
    }


    handleClicado = () => {
        const voltaCadastro = !this.state.clicouCadastro;
        this.setState({ clicouCadastro: voltaCadastro});
    }
    render(){

                if(this.state.clicouCadastro){
                return (
                    <App/>

                )
                } else {
                return (     
                <div>
                    <button onClick={this.handleClicado}>Ir para página de cadastro</button>    
                    <h1>Usuários Cadastrados:</h1>
                </div>
            );
        }    
    
    } 
}    

export default TelaLista;