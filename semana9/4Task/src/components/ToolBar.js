import React from 'react'
import { connect } from 'react-redux';
import { completeAllTasks, deleteAllComplete, setfilter } from '../actions/task'

const ToolBar = (props) => {
	return (
		<div>
			<div>
			<button onClick={props.completeAllTasks}>Marcar Todas como completas</button>
			<h3>Filtros: </h3>				
			<button onClick={() => props.setfilter('todas')}>Todas</button>
			<button onClick={() => props.setfilter('pendentes')}>Pendentes</button>
			<button onClick={() => props.setfilter('completas')}>Completas</button>
		</div>
			<button onClick={props.deleteAllComplete}>Remover tarefas completas</button>
			
		</div>
				
	)
}

const mapDispatchToProps = (dispatch) =>{
	return{
		completeAllTasks: () => dispatch(completeAllTasks()),
		deleteAllComplete: () => dispatch (deleteAllComplete()),
		setfilter: (filter) => dispatch (setfilter(filter))
	}
}


export default connect(null, mapDispatchToProps)(ToolBar);