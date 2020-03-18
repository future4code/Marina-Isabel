import React from 'react'
import { connect } from 'react-redux'

//É preciso mostrar a lista de tarefas aqui, para isso acontecer
//é necessário utilizar a connect, para conectar a lista com o reducer
class TaskList extends React.Component {
	render(){
		
			return(
			 <ul>
				{this.props.taskList.map(task =>
				<li key={task.id} onClick=
				{() => this.props.toggleTask(task.id)}>
				{task.text} - Completa: {String(task.complete)}</li>
				)}		
			 </ul>
		)
	}
}


//Mapear o estado do redux para a props.
const mapStateToProps = (state)  =>{
	return {
		taskList: state.todos.todosList
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		toggleTask: id => dispatch(toggleTask(id))
	}
}


//exportar as funções no connect
export default connect (mapStateToProps, mapDispatchToProps)(TaskList);