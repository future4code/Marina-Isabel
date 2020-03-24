import React from 'react'
import { connect } from 'react-redux'

const HomePage = props => {
    console.log(props)
    return(
        <div>
            <div>
                <h1>As melhores viagens!</h1>
                <button>Clique aqui para se candidatar</button>
            </div>
        </div>
    )
}

export default connect (HomePage)