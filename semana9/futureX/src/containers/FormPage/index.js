import React from 'react'
import { connect } from 'react-redux'

const FormPage = props => {
    console.log(props)
    return(
        <div>
            <div>
                <h3>Formulário do Candidato</h3>
                <input type="text" placeholder="Nome"></input>
                <input type="text" placeholder="Idade"></input>
                <input type="text" placeholder="Profissão"></input>
                <input type="text" placeholder="País"></input>
                <input type="Text" placeholder="Escreva aqui porque você que ir nessa viagem!"></input>
                <button>Salvar</button>
            </div>
        </div>
    )
}

export default connect (FormPage)