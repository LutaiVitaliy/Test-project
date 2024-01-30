import { userConstants } from "../constants/user-constants";

const initialState = {
	users: []
};

export const users = (state = initialState, { type, payload }) => {
	switch (type) {
		case userConstants.FETCH_USERS_SUCCESS:
			return {
				...state,
				users: payload
			};	
		case userConstants.FETCH_USERS_FAILURE:
			return {
				...state,
				isError: true,
				errorMessage: payload
			};
		default:
			return state;
	}
};
