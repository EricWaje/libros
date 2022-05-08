import Lista from './components/Lista';
import { useEffect, useState } from 'react';
import { Form } from './components/Form';
import { Book } from './types';

const INITIAL_STATE = [
    {
        id: 1,
        title: 'Mi primer Libro',
        img: 'https://picsum.photos/200',
        description: 'Esta es una descripción que pensé para mi primer libro',
    },
];

interface AppState {
    books: Book[];
}

function App() {
    const [books, setBooks] = useState<AppState['books']>([]);

    useEffect(() => {
        setBooks(INITIAL_STATE);
    }, []);

    const handleNewBook = (newBook: Book) => {
        setBooks((books) => [...books, newBook]);
    };

    return (
        <div className="App">
            <h2>Libros</h2>
            <Lista books={books} />
            <Form onNewBook={handleNewBook} />
        </div>
    );
}

export default App;
