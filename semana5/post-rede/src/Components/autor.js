import React from 'react'
import './autor.css'

function Autor (props){
    return(
        <div className="autor"> 
            <img src={ props.imagem}/>
            <p>{ props.titulo}</p>
        </div>
    )
}


export default Autor 