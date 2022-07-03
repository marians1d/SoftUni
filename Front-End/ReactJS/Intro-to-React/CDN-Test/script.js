const container = document.getElementById('app');


const Title = () => {
    return <h1>Hello world!!!</h1>
}

const Content = () => {
    return (
        <div>
            <Title />
            <button>Like</button>
        </div>
    )
}

const root = ReactDOM.createRoot(container);
root.render(<Content />);

