//A lista começa vazia no estado inicial 

const initialState = {
	todosList: [{
		id: 1,
		text: 'tarefa 1 do redux',
		complete: false
	}]
}

export const todos  = (state = initialState, action) => {
	switch(action.type) {
		case "ADD_TASK":
			const newTodo = {
				id: Date.now(),
				text: action.payload.text,
				complete: false
			}
			return {
				todosList: [newTodo, ...state.todosList]
			}
		default:
			return state
	}
}