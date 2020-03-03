import React, { Component } from 'react'
import styled from 'styled-components'


const FormularioCadastro = styled.form`
    border: 1px solid black;
    border-radius: 40px;
    width: 25vw;
    height: 34vh;
    margin: 20px;
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

class TelaCadastro extends React.Component {
    constructor(props){
        super(props);
        this.state ={

        };
    }

    render(){
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

export default TelaCadastro;