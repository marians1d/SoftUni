import Book from './Book';


const BookList = () => {

    const books = [
        {
            title: 'Dune',
            author: 'Frank Herbert'
        },
        {
            title: 'Dune: Mesiyah',
            author: 'Frank Herbert'
        },
        {
            title: 'Harry Poter',
            author: 'JK. Rouling'
        }
    ];

    const list = books.map(b => <Book title={b.title} author={b.author} />);

    return (
        <div>{list}</div>
    );
};

export default BookList;