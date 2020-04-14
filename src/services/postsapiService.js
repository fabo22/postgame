const BASE_URL = '/api/posts';

export function getAllPosts() {
    return fetch(BASE_URL)
    .then(res => res.json());
}

function create(post) {
	return fetch(BASE_URL, {
		method: 'POST',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify(post),
	}).then((res) => res.json());
}

function deleteOne(id) {
	return fetch(`${BASE_URL}/${id}`, {
		method: 'DELETE',
	}).then((res) => res.json());
}

function update(post) {
	return fetch(`${BASE_URL}/${post._id}`, {
		method: 'PUT',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify(post),
	}).then((res) => res.json());
}

export default {
    getAllPosts,
    create,
	deleteOne,
	update,
};