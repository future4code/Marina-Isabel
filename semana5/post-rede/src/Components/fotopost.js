import React from 'react'
import './fotopost.css'

function FotoDoPost(props){
    return(
        <div className='foto-post'>
            <img src={props.imagem}/>
        </div>
    )
}


export default FotoDoPost