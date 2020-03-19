// Fazer alterações no estado Global

//Ação de criar uma tarefa com a função actionCreator
const addTask = (text) => {
		return {
			type: "ADD_TASK",
			payload: {
				text
		}
	}
}

const toggleTask = (id) => {
		return {
			type: "TOGGLE_TASK",
			payload: {
				id
		}
	}
}

//informação para deletar a tarefa e completar tarefa são apresentadas no id (para identificar)

const deleteTask = (id) => {
		return {
			type: "DELETE_TASK",
			payload: {
				id
		}
	}
}

const completeAllTasks = () => {
	return {
		type: "COMPLETE_ALL_TASKS",
	
	}
}


const deleteAllComplete= () => {
	return{
		type: "DELETE_ALL_COMPLETE"
	};

}

const setfilter = (filter) => {
		return {
			type: "SET_FILTER",
			payload: {
				filter
		}
	}
}