import tokenService from './tokenService';

const BASE_URL = '/api/posts' || 'https://postgame-app.herokuapp.com/api/posts';

export function getAllPosts() {
    return fetch(BASE_URL)
	.then(async res => {
		return await res.json()
	});
}

function create(post) {
	return fetch(BASE_URL, {
		method: 'POST',
		headers: { 
			'content-type': 'application/json' ,
		},
		body: JSON.stringify(post),
	}).then((res) => res.json());
}

function deleteOne(id) {
	return fetch(`${BASE_URL}/${id}`, {
		method: 'DELETE'
	}).then((res) => res.json());
}

export default {
    getAllPosts,
    create,
	deleteOne,
};