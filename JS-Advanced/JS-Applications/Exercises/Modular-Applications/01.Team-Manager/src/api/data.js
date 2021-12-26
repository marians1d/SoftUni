import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getTeams(offset) {
    return api.get(`/data/teams?offset=${(offset - 1) * 5}&pageSize=5`);
}

export async function getTeamById(id) {
    return api.get('/data/teams/' + id);
}

export async function getAllMembers() {
    return api.get('/data/members?where=status%3D%22member%22');
}

export async function getAllMemberships(teamId) {
    return api.get(`/data/members?where=teamId%3D%22${teamId}%22&load=user%3D_ownerId%3Ausers`);
}

export async function createTeam(name, logoUrl, description) {
    return api.post('/data/teams', {name, logoUrl, description});
}

export async function editTeam(id, name, logoUrl, description) {
    return api.put('/data/teams/' + id, {name, logoUrl, description});
}

// Edit member status
export async function becomeAMember(teamId) {
    return api.post('/data/members', {teamId})
}

export async function approveMember(id) {
    const member = {
        status: 'member'
    }

    return api.put('/data/members/' + id, member)
}

export async function declineRequest(id) {
    return deleteRequest(id);
}

export async function cancelRequest(id) {
    return deleteRequest(id);
}

async function deleteRequest(id) {
    return api.del('/data/members/' + id);
}

// User spesific teams

export async function getUserTeams(userId, offset) {
    return api.get(`/data/members?where=_ownerId%3D%22${userId}%22%20AND%20status%3D%22member%22&load=team%3DteamId%3Ateams&offset=${(offset - 1) * 5}&pageSize=5`);
}

export async function getPageMembers(memberIds) {
    return api.get(`/data/members?where=${encodeURIComponent(`teamId IN ("${memberIds.join('","')}") AND status="member"`)}`);
}

export async function getAllTeamsCount() {
    return api.get('/data/teams?count')
}

export async function getUserTeamsCount(userId) {
    return api.get(`/data/members?where=_ownerId%3D%22${userId}%22%20AND%20status%3D%22member%22&load=team%3DteamId%3Ateams&count`);
}