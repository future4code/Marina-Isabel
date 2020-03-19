import axios from 'axios'


// Fazer alterações no estado Global

//Ação de criar uma tarefa com a função actionCreator
export const addTask = (text) => {
		return {
			type: "ADD_TASK",
			payload: {
				text
		}
	}
}

export const toggleTask = (id) => {
		return {
			type: "TOGGLE_TASK",
			payload: {
				id
		}
	}
}

//informação para deletar a tarefa e completar tarefa são apresentadas no id (para identificar)

export const deleteTask = (id) => {
		return {
			type: "DELETE_TASK",
			payload: {
				id
		}
	}
}

export const completeAllTasks = () => {
	return {
		type: "COMPLETE_ALL_TASKS",
	
	}
}


export const deleteAllComplete= () => {
	return{
		type: "DELETE_ALL_COMPLETE",
	};

}

export const setfilter = (filter) => {
		return {
			type: "SET_FILTER",
			payload: {
				filter
		}
	}
}

const createTask = text => async (dispatch, getState) => {
	const response = await axios.post ("https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/:marina/todos", {text});

	dispatch(
		addTask(
			response.data.post.text,
			response.data.post.id,
			response.data.post.done
		)
	)
}

const deleteTasks = () => async (dispatch, getState) => {
	const response = await axios.del("https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/:marina/todos/:id");

	dispatch(deleteTask(response.data.del.id))
}


const searchTask = () => async (dispatch, getState) => {
	const result = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/:marina/todos")

	dispatch(
		setfilter(
			result.data.get.text,
			result.data.get.id,
			result.data.get.done 
		)
	)
} 


const toggleTasks = id => async (dispatch, getState) =>{
	const response = await axios.put("https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/:marina/todos/:id/toggle")
	dispatch(toggleTask(response.data.put.id))
}
