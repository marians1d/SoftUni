import styles from './TodoItem.module.css';

export const TodoItem = ({ todo, changeStatus }) => {

    let row = `${styles.todo}`;
    if (todo.isCompleted) {
        row += ` ${styles['is-completed']}`;
    }


    return (
        <tr className={row}>
            <td>{todo.text}</td>
            <td>{todo.isCompleted ? 'Complete' : 'Incomplete'}</td>
            <td className="todo-action">
                <button onClick={() => changeStatus(todo)} className="btn todo-btn">Change status</button>
            </td>
        </tr>
    );
};