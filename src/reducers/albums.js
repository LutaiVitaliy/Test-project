import {userConstants} from "../constants/user-constants";


const initialState = {
	albums: []
};

export const albums = (state = initialState, { type, payload }) => {
	switch (type) {
		case userConstants.FETCH_ALBUMS_SUCCESS:
			return {
				...state,
				albums: payload
			};	
		case userConstants.FETCH_ALBUMS_FAILURE:
			return {
				...state,
				isError: true,
				errorMessage: payload
			};
		default:
			return state;
	}
};
