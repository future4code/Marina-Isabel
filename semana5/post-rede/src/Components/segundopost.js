import React from 'react'
import './primeiropost'

function PostDois(props) {
    return(

        <div className="dados-container2"> 
            <p> { props.nome } </p>
            <p>  { props.texto } </p>
                <div>               
                    <img src={ props.imagem} alt={ props.nome }/>
                    <div>
                <img src={ props.imagem2} /> 
                <div>
                <img src={ props.imagem3} />
              </div>  
            </div>    
          </div>
        </div>
    )
}
export default PostDois