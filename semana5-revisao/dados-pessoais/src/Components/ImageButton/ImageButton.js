import React from 'react'
import './ImageButton.css'



function ImageButton (props){
    return(
        <div className="botao-container">
        <img src={require('./img/facebook.png')} alt=""/>
         <p>{props.texto}</p>

        </div>

    
    )
}


export default ImageButton