import React from 'react'
import './SmallCard.css'


function SmallCard(pros){
    return (
        <div className="smallcard-container">
            <img src={require('./img/email.svg')} alt="imagemEmail" />
            <img src={require('./img/house.svg')} alt="imagem" />
            <h3>{props.chave}:</h3>
            <p>{props.valor}</p>
            </div>
    )
}


export default SmallCard 