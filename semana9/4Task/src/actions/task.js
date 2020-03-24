


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