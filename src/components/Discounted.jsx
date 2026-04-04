import React from 'react';
import { books } from '../data'
import Book from "./ui/Book"

const Discounted = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <h2>
                        Discount <span className="purple">Books</span>
                    </h2>
                </div>
                <div className="books">
                    {books
                        .filter(book => book.salePrice > 0)
                        .slice(0, 8)
                        //The slice means you are only getting the first 8 books. If you want all of them, delete the slice.
                        .map((book) => (
                            <Book book={book} key={book.id} />
                        ))}
                </div>
            </div>
        </section>
    );
}

export default Discounted;