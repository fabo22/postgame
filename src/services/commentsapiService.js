const BASE_URL = '/api/comments';

function create(comment) {
	return fetch(BASE_URL, {
		method: 'POST',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify(comment),
	}).then((res) => res.json());
}

function deleteOne(id) {
	return fetch(`${BASE_URL}/${id}`, {
		method: 'DELETE',
	}).then((res) => res.json());
}

function update(comment) {
	return fetch(`${BASE_URL}/${comment._id}`, {
		method: 'PUT',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify(comment),
	}).then((res) => res.json());
}

export default {
    create,
	deleteOne,
	update,
};