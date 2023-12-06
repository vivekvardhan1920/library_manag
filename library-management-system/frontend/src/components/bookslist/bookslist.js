import React, { useState, useEffect } from 'react';
import BackendApi from '../../user/backend-api';
import "./bookslist.css";


export const Bookslist = () => {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const { books } = await BackendApi.book.getAllBooks();
        console.log(books);
        setBooks(books);

    }

    useEffect(() => {
        fetchBooks();
    }, []);

    return (
        <>
            <h1>BookList</h1>
            <ul>
                {books.map(book => (
                    <li key={book.id}>
                        <strong>{book.title}</strong> by {book.author}
                    </li>
                ))}
            </ul>
        </>
    );
};
