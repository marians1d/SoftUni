import {getUserData, notify, removeUserData, setUserData} from '../util.js';

const host = 'http://localhost:3030';

async function request(url, options) {
    try {
        const response = await fetch(host + url, options);
        
        if (response.ok == false) {
            if (response.status == 403) {
                removeUserData();
            }

            const error = await response.json();
            throw new Error(error.message);
        }

        if (response.status == 204) {
            return response;
        } else {
            return response.json();
        }
    } catch (err) {
        notify(err.message);
        throw err;
    }
}

function createOptions(method = 'get', body) {
    const options = {
        method,
        headers: {}
    };

    if (body != undefined) {
        options.body = JSON.stringify(body);
        options.headers['Content-Type'] = 'application/json';
    }

    const userData = getUserData();
    if (userData != null) {
        options.headers['X-Authorization'] = userData.token;
    }

    return options;
}

export async function get(url) {
    return request(url, createOptions());
}

export async function post(url, body) {
    return request(url, createOptions('post', body));
}

export async function put(url, body) {
    return request(url, createOptions('put', body));
}

export async function del(url) {
    return request(url, createOptions('delete'));
}

export async function login(email, password) {
    const result = await post('/users/login', {email, password});

    const userData = {
        username: result.username,
        email: result.email,
        id: result._id,
        token: result.accessToken,
    };

    setUserData(userData);

    return result;
}

export async function register(username, email, password) {
    const result = await post('/users/register', {username, email, password});

    const userData = {
        username: result.username,
        email: result.email,
        id: result._id,
        token: result.accessToken,
    };

    setUserData(userData);

    return result;
}

export async function logout() {
    get('/users/logout');
    removeUserData();
}