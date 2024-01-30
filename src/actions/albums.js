import API from '../services/api';
import {userConstants} from '../constants/user-constants';


const requestSuccess = data => {
	return {
		type: userConstants.FETCH_ALBUMS_SUCCESS,
		payload: data
	};
};

const requestFailure = error => {
	return {
		type: userConstants.FETCH_ALBUMS_FAILURE,
		payload: error
	}
};

export const albumsRequest = (id) => dispatch => {    
	return API.users
        .getUserAlbums(id)
		.then(res => {
			dispatch(requestSuccess(res.data));
		})
		.catch(error => dispatch(requestFailure(error.toString())));
};