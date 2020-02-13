import React from 'react';
import './likes.css';
import { render } from '@testing-library/react';


class likes extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            curtir: false,
            quantidadeCurtida:0,

        }
    }


curtindo = () => {
    const numeroCurtida =this.state.quantidadeCurtida;
    if(this.state.curtir){
       this.setState({
           curtir: true,
           quantidadeCurtida: numeroCurtida + 1 
       }) 
    }
    else{
        this.setState({
            curtir:false,
            quantidadeCurtida: numeroCurtida -1
        })
    }
}


render() {
    return (
        <div className="likes">
            <button onClick={this.curtir}>
            <img src={this.state.imagem} onClick={this.state}/>
            </button>
            {this.state.quantidadeCurtida}
        </div>
    )
}
}

export default likes 