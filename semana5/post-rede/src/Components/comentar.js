import React from 'react';
import  './comentar.css';
import { render } from '@testing-library/react';

class Comentar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            numeroDeComentario:false,
            quantidadeComentario:0,
            imagem:"file:///C:/Users/Livia/Desktop/icones/comment_icon.svg"
        }
    }

 NovoComentario = () => {
     if(this.state.numeroDeComentario){
     this.setState({
         numeroDeComentario: false
        })
    }
else{
    this.setState({
        numeroDeComentario: true
    })
}

 }

 maisComentario = () =>{
     const somaComentario = this.state.quantidadeComentario;
     this.setState({
         quantidadeComentario: somaComentario + 1,
         numeroDeComentario:false
     })
 }

render() {
   return(
       <div className="Comentando">
           <button onClick={this.NovoComentario}>
               <img src={this.state.imagem}/>
           </button>
       </div>
   )
}

}

export default Comentar