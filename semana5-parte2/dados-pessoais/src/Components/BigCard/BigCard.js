import React from 'react'
import './BigCard.css'



function BigCard(props){
    return(
        <div className="bigcard-container">
            <img src={require('./img/eu.jpg')} alt={props.nome}/>
            <div>
                <h3>{props.nome}</h3>
                <p>{props.texto}</p>
            </div>
        </div>
    )
}
export default  BigCard 