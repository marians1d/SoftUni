import * as api from './api.js'

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

const endpoints = {
    all: '/data/catalog',
    byId: '/data/catalog/',
    byUser: (userId) => `/data/catalog?where=_ownerId%3D%22${userId}%22`,
    create: '/data/catalog',
    update: '/data/catalog/',
    delete: '/data/catalog/'
}

export async function getAllItems() {
    return api.get(endpoints.all)
}

export async function getItemById(id) {
    return api.get(endpoints.byId + id);
}

export async function getMyItems(userId) {
    return api.get(endpoints.byUser(userId));
}

export async function createItem(data) {
    return api.post(endpoints.create, data);
}

export async function updateItem(id, data) {
    return api.put(endpoints.update + id, data);
}

export async function deleteItem(id) {
    return api.del(endpoints.delete + id);
}