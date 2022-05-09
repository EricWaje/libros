import { Book } from '../types';

interface Props {
    books: Book[];
}

const Lista = ({ books }: Props) => {
    return (
        <div>
            {books.map((book) => (
                <div key={book.id} className="libro">
                    <img src={book.img} alt="Img" />
                    <hr />
                    <div className="info">
                        <h4>{book.title}</h4>
                        <p>
                            {book.description
                                ? `${book.description?.substring(0, 50)}...`
                                : null}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Lista;
