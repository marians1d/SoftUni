import { useState, useEffect } from 'react';
import { Loading } from '../../Loading/Loading';

import { getTodoData, updateStatus } from '../../../services/todos-data.js';
import { TodoItem } from '../TodoItem/TodoItem';
import styles from './TodoList.module.css';

export const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        getTodoData().then(data => {
            setTodos(Object.values(data));
            setIsLoading(false);
        });
    }, []);

    const changeStatusHandler = (todo) => {
        setTodos(oldTodos => {
            updateStatus({...todo, isCompleted: !todo.isCompleted}).then((data) => console.log('worked', data));


            return oldTodos.map(t => {
                if (t._id === todo._id) {
                    return { ...t, isCompleted: !t.isCompleted };
                }

                return t;
            });
        });
    };

    return (
        <section className={styles['todo-list-container']}>
            <h1>Todo List</h1>

            <div className={styles['add-btn-container']}>
                <button className="btn">+ Add new Todo</button>
            </div>

            <div className={styles['table-wrapper']}>

                {/* Loading spinner - show the load spinner when fetching the data from the server */}
                {isLoading && <Loading />}

                {/* Todo list table */}
                <table className={styles['table']}>
                    <thead>
                        <tr>
                            <th className={styles['table-header-task']}>Task</th>
                            <th className={styles['table-header-status']}>Status</th>
                            <th className={styles['table-header-action']}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map(t => <TodoItem key={t._id} todo={t} changeStatus={changeStatusHandler} />)}
                    </tbody>
                </table>
            </div>
        </section>
    );
};