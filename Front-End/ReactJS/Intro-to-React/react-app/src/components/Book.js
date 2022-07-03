const Book = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.author}</p>
        </div>
    );
};

export default Book;