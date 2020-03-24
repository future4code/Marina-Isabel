import React from 'react'
import { connect } from 'react-redux'

const CandidateList = props => {
    console.log(props)
    return(
        <div>
            <div>
                <h3>Lista de Candidatos</h3>
                <button>aceitar</button>
                <button>rejeitar</button>
            </div>
        </div>
    )
}

export default connect (CandidateList)