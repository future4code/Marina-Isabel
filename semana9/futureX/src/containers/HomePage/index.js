import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components';
// import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import LoginPage from '../LoginPage';

const meuTema = createMuiTheme({
    palette:{
        primary:{ 
            main:"#FFFF00",

        },
        secondary:{
            main:"#ffb74d",
        },
    },
});




const ContainerHeader = styled.header`
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    width: 100%;
    background-color: #FF8C00;
`

const ContainerHome = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    text-align:center;
    width: 100%;
    padding:0 10%;
    background-color: white;
    font-family: Arial;
   
`
const Logo = styled.img`
    max-width:200px;
    max-height:100px;
    width: auto;
    height: auto;
`
const Image = styled.img`
    text-align:center;
    width:50%;
    border-radius: 8%;
    
`
const Footer = styled.div`
   position: fixed;
   left: 0;
   bottom: 0;
   width: 100%;
   background-color: #FF8C00;
   color: black;
   font-family: Arial;
   text-align: center;
`

class HomePage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        mostraTelaHome: true,
        mostraTelaLogin: false,
        mostraTelaApplication:false
      };
    }

    lidaComMudancaDeTelaLogin = () => {
        this.setState({mostraTelaLogin: !this.state.mostraTelaLogin})
         
    }

    lidaComMudancaDeTelaApplication = () => {
        this.setState({mostraTelaApplication: !this.state.mostraTelaApplication})
         
    }
    
    render(){
    return(
        <MuiThemeProvider theme={meuTema}>
            <ContainerHeader>
                <Button  onClick={this.lidaComMudancaDeTelaLogin}
                variant="outline" 
                size="large" 
                color="primary">
                Minha Conta</Button>
                { this.state.mostraTelaLogin === true ?
                <LoginPage/> : null}

                {/* <img src={require('/img/futurex.png')} alt="imagem-do-logo" /> */}
                <Logo src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F03b944d0-9121-4032-9d0d-be54d6f7cb84%2Ffuturex.png?table=block&id=abe15383-e5c0-4d54-a320-ea8ec68676d4&width=770&cache=v2"/>
             </ContainerHeader>  

            <ContainerHome> 
                <h2>Bem-vindo a plaforma de viagens espaciais FutureX</h2>  
                <Button  onClick={this.lidaComMudancaDeTelaApplication}
                variant="outline" 
                size="large"
                color="primary">
                Clique aqui para se candidatar a uma viagem</Button>
                { this.state.mostraTelaApplication === true ?
                <ApplicationForm/> : null}    

                <Image src="https://images.unsplash.com/photo-1517976384346-3136801d605d?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"/>        
            </ContainerHome>

            <Footer>
                <p> Viagens Espaciais FutureX - Sagan</p>
            </Footer>
        </MuiThemeProvider>
    )
}

}
export default HomePage;