import baseApi from './axiosParams';
const path = 'users';

const Users = {
	getUsers: () => {
		return baseApi.get(`${path}`)
	},
    getUserAlbums: (id) => {
        return baseApi.get(`${path}/${id}/albums`)
    },
    getUserPosts: (id) => {
        return baseApi.get(`${path}/${id}/posts`)
    }
    // ...
}

export default Users;
