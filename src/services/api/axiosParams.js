import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com/';

const baseApi = {
	get: async (path) => {
		return request({
			path,
			method: 'GET',
			body: undefined
		});
	},
	post: async (path, payload = {}) => {
		return request({
			path,
			method: 'POST',
			body: payload,
		});
	},
	delete: async (path, payload = {}) => {
		return request({
			path,
			method: 'DELETE',
			body: payload,
		});
	},
	patch: async (path, payload = {}) => {
		return request({
			path,
			method: 'PATCH',
			body: payload,
		});
	}
	//...
};

const request = async ({ path, method, body }) => {
	const resp = axios({
		withCredentials: true,
		method: method,
		url: `${baseURL}${path}`,
		data: method !== 'GET' ? body : undefined,
	});
	return resp;
};

export default baseApi;
