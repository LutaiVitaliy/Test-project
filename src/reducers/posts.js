import {userConstants} from "../constants/user-constants";


const initialState = {
	posts: []
};

export const posts = (state = initialState, { type, payload }) => {
	switch (type) {
		case userConstants.FETCH_POSTS_SUCCESS:
			return {
				...state,
				posts: payload
			};	
		case userConstants.FETCH_POSTS_FAILURE:
			return {
				...state,
				isError: true,
				errorMessage: payload
			};
		default:
			return state;
	}
};
