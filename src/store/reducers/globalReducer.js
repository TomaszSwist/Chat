const initState = {
	username: 'Elon',
	numberOfPeople: 12,
}

export const pizzaReducer = (state = initState, action) => {
	switch (action.type) {
		case 'CHANGE_USERNAME': {
			return { ...state, username: action.payload }
		}

		case 'CHANGE_NUMBER_OF_PEOPLE': {
			return { ...state, numberOfPeople: action.payload }
		}

		default:
			return state
	}
}