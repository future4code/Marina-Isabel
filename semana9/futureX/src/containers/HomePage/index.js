import React from 'react'
import { connect } from 'react-redux'


class HomePage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        
      };
    }
    render(){
    return(
        <div>
            <div>
                <h1>As melhores viagens!</h1>
                <button>Clique aqui para se candidatar</button>
            </div>
        </div>
    )
}

}
export default HomePage