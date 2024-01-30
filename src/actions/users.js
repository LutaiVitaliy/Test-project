import API from '../services/api';
import {userConstants} from '../constants/user-constants';


const requestSuccess = data => {
	return {
		type: userConstants.FETCH_USERS_SUCCESS,
		payload: data
	};
};

const requestFailure = error => {
	return {
		type: userConstants.FETCH_USERS_FAILURE,
		payload: error
	}
};

export const usersRequest = () => dispatch => {    
	return API.users
        .getUsers()
		.then(res => {
			dispatch(requestSuccess(res.data));
		})
		.catch(error => dispatch(requestFailure(error.toString())));
};