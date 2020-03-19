import React from 'react'
import { connect } from 'react-redux'
import { toggleTask } from '../actions/task'
import { deleteTask } from '../actions/task'


//É preciso mostrar a lista de tarefas aqui, para isso acontecer
//é necessário utilizar a connect, para conectar a lista com o reducer
class TaskList extends React.Component {
	render(){
		
			return(
			 <ul>
				{this.props.taskList.filter((task) =>{
					const filter = this.props.filter
					if(filter === 'pendentes'){
					return task.complete === false
					}
					if(filter === 'completas'){
					return task.complete === true
					}
					return true 	
				}).map(task =>
				<li key={task.id} onClick=
				{() => this.props.toggleTask(task.id)}>
				{task.text} 
				{/* - Completa: */}
				 {/* {String(task.complete)} */}
				 <button onClick={() => this.props.deleteTask(task.id)}>Deletar</button>
				 </li>
				)}		
			 </ul>
		)
	}
}


//Mapear o estado do redux para a props.
const mapStateToProps = (state)  =>{
	return {
		taskList: state.todos.todosList,
		filter: state.todos.filter
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		toggleTask: id => dispatch(toggleTask(id)),
		deleteTask: id => dispatch(deleteTask(id))
	}
}


//exportar as funções no connect
export default connect (mapStateToProps, mapDispatchToProps)(TaskList);