const url = 'http://localhost:3030/jsonstore/todos';

export const getTodoData = () => {
    return fetch(url)
        .then(res => res.json())
        .catch(err => console.log(err));
};

export const updateStatus = (todo) => {
    return fetch(`${url}/${todo._id}`, {
        method: 'Put',
        'content-type': 'application/json',
        body: JSON.stringify(todo)
    })
        .then(res => res.json())
        .catch(err => console.log(err));
};

