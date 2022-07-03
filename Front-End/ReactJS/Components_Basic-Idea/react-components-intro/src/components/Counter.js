import { useState } from 'react';

const Counter = (props) => {
    const [count, setCount] = useState(props.count || 0);

    const addCount = () => setCount(count => count + 1);
    const removeCount = () => setCount(count => count - 1);

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={addCount}>+</button>
            <button onClick={removeCount}>-</button>
        </div>
    );
};

export default Counter;