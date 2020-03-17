import React from 'react';


class FormularioTarefa extends React.Component {
	constructor(props) {
		super(props)
		this.state={
			
		}
	}


	mudarDeLista = () =>{

	}


	render() {
		return( 
		<div>
			<h1>4Task</h1>
			<input type="" placeholder="O que tem que ser feito?"></input>
			<p>Marcar Todas como completas</p>
			<p>Marcar Todas como pendentes</p>
			<button>Todas</button>
			<button>Pendentes</button>
			<button>Completas</button>
		</div>
		)	
	}
}

export default FormularioTarefa;