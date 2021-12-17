import * as api from './api.js'

export async function getAllMovies() {
    return api.get('/data/movies');
}

export async function updateMovie(title, description, img, id) {
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    const body = {title, description, img, _ownerId: userData.id};

    return api.put('/data/movies/' + id, body);
}

export async function createMovie(title, description, img) {
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    const body = {title, description, img, _ownerId: userData.id};

    return api.post('/data/movies', body);
}

export async function getDetails(id) {
    const url = '/data/movies/' + id;
    return api.get(url)
}

export async function deleteMovie(id) {
    const url = '/data/movies/' + id;
    return api.del(url)
}

export async function postLike(id) {
    return api.post('/data/likes', {movieId: id});
}

export async function getLikes(movieId) {
    return api.get(`/data/likes?where=movieId%3D%22${movieId}%22&distinct=_ownerId&count`);
}

export async function getLikeByUser(movieId) {
    const userData = JSON.parse(sessionStorage.getItem('userData'));

    return api.get(`/data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userData.id}%22`);
}

export const login = api.login;
export const register = api.register;
export const logout = api.logout;