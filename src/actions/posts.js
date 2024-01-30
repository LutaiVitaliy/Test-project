import API from '../services/api';
import {userConstants} from '../constants/user-constants';


const requestSuccess = data => {
	return {
		type: userConstants.FETCH_POSTS_SUCCESS,
		payload: data
	};
};

const requestFailure = error => {
	return {
		type: userConstants.FETCH_POSTS_FAILURE,
		payload: error
	}
};

export const postsRequest = (id) => dispatch => {    
	return API.users
        .getUserPosts(id)
		.then(res => {
			dispatch(requestSuccess(res.data));
		})
		.catch(error => dispatch(requestFailure(error.toString())));
};