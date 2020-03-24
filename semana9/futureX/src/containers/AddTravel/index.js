import React from 'react'
import { connect } from 'react-redux'

const AddTravel = props => {
    console.log(props)
    return(
        <div>
            <div>
                <button>Clique aqui para ver a lista de condidatos!</button>
                <input type="text"></input>
                <button>Criar Viagem</button>
            </div>
        </div>
    )
}

export default connect (AddTravel)