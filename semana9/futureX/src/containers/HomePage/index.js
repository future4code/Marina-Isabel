import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

const meuTema = createMuiTheme({
    palette:{
        primary:{ 
            main:"#ffb74d",

        },
        secondary:{
            main:"#ffb74d",
        },
    },
});

const styles = theme => ({
    margin: {
      margin: theme.spacing.unit,
    }
  });


const ContainerHeader = styled.header`
    border: 1px solid #FFFACD;
    width: 100%;
    background-color: white;
`

const Title = styled.h1`
    text-align:center;
    font-family: cursive;
    margin-top: -70px;

`
const ContainerHome = styled.div`
    align-items:center;
    text-align:center;
    border: 2px solid #FFFACD;
    height:20%;
    width: 100%;
    padding:0 10%;
    background-color: #FFFACD;
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
    
`

class HomePage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        
      };
    }
    render(){
    return(
        <MuiThemeProvider theme={meuTema}>
        <div>    
            <ContainerHeader>
                {/* <img src={require('/img/futurex.png')} alt="imagem-do-logo" /> */}
                <Logo src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F03b944d0-9121-4032-9d0d-be54d6f7cb84%2Ffuturex.png?table=block&id=abe15383-e5c0-4d54-a320-ea8ec68676d4&width=770&cache=v2"/>
                <Title>Bem-vindo a sua plaforma de viagens espaciais</Title>
             </ContainerHeader>  

            <ContainerHome> 
                <h3>Varios lugares incriveis esperando por você!</h3>   
                <Image src="https://images.unsplash.com/photo-1517976384346-3136801d605d?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"/>
                <hr/>
                <Button  variant="outline" size="large" color="primary"  >Clique aqui para se candidatar a uma viagem</Button>
            </ContainerHome>

            <footer>
                <p> Viagens Espaciais Future4 - Sagan</p>
            </footer>
        </div>
        </MuiThemeProvider>
    )
}

}
export default withStyles(styles)(HomePage);