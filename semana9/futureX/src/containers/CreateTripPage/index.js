import React from 'react'
import { connect } from 'react-redux'


class CreateTripPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        
      };
    }
    render(){
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
}

export default CreateTripPage