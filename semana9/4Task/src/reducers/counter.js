const initialState = {
	value: 0
}

export const counterReducer = (state = initialState, action) => {
	switch(action.type){
		case "ADD_TASK":
			const oldValue = state.value;
			const newState = {value: oldValue + 1};
			return newState;
	}

	case "ADD_TASK": {
			const oldValue = state.value;
			const newState = {value: oldValue - 1};
			return newState;
}

		default:
			return state;
	}
};