import React from "react";
import { connect } from "react-redux";

class Planner extends React.Component {
  render() {
    return 
      <div>
        <p>Segunda - Feira</p>
        <input></input>
        <p>Terça - Feira</p>
        <input></input>
        <p>Quarta - Feira</p>
        <input></input>
        <p>Quinta - Feira</p>
        <input></input>
        <p>Sexta - Feira</p>
        <input></input>
        <p>Sabado</p>
        <input></input>
        <p>Domingo</p>
        <input></input>
      </div>
  }
}

export default connect()(Planner);
