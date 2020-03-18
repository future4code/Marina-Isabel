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
				<form>
					<input type="" placeholder="O que tem que ser feito?"></input>
					<button>Adicionar</button>
				</form>

				<ul>
					<li>Task 1</li>
					<li>Task 2</li>
				</ul>
				<div>
					<button>Marcar Todas como completas</button>
					<p>Filtros: </p>				
					<button>Todas</button>
					<button>Pendentes</button>
					<button>Completas</button>
				</div>
					<div>
					<button>Remover tarefas completas</button>
					</div>
		    </div>
		)	
	}
}

export default FormularioTarefa;