import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const FormularioCadastro = styled.form`
    border: 1px solid black;
    border-radius: 40px;
    width: 25vw;
    height: 34vh;
    margin: 50px;
    text-align:center;
    
    
`

const BotaoSalvar =styled.button`
    background-color: #483D8B;
    padding: 14px 17px;
    color: white;
    

`
const Cadastrando = styled.div`
     margin: 50px;
`


const baseUrl = "https://us-central1-future4-users.cloudfunctions.net/api";




class TelaCadastro extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            listaDeCadastrados:[],
        };
    }

    componentDidMount(){
        this.mostrarCadastro()
    }

    mostrarCadastro  = () => {
        const listaDeCadastradosPromessa = axios.post(`${baseUrl}/users/createUser`, {
        headers:{
            auth: 'string',
        }
    })

    render() {
        return (
            <FormularioCadastro>
                <Cadastrando>
                <label>Nome: </label>
                <input type="text" alt=""/><br/>
                <label>E-mail: </label>
                <input type="email" alt=""/>
                </Cadastrando>
                <BotaoSalvar>Salvar</BotaoSalvar>
            </FormularioCadastro>
        );
        
    }
}
}   
export default TelaCadastro;