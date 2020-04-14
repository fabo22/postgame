const BASE_URL = '/api/posts';

export function getAll() {
    return fetch(BASE_URL)
    .then(res => res.json());
}