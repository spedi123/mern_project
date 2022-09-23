import React, { useState, useEffect } from 'react';
import MyBookCard from './MyBookCard';
import { getAllBooks } from '../services/internalApiService';

const MyBooks = (props) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getAllBooks()
            .then((data) => {
                console.log(data);
                setBooks(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    return (
        <div className="contentContainer">
            {books !== undefined && books.map((book, i) => {
                try {
                    return (
                        <MyBookCard
                            key={i}
                            _id={book._id}
                            bookId={book.id}
                            thumbnail={book.thumbnail}
                            title={book.title}
                            authors={book.authors}
                            publishedDate={book.publishedDate}
                            pageCount={book.pageCount}
                            averageRating={book.averageRating}
                            ratingsCount={book.ratingsCount}
                            description={book.description}
                        />
                    )
                }
                catch (err) {
                    <MyBookCard
                        key={i}
                        _id={book._id}
                        bookId={book.id}
                        thumbnail={""}
                        title={book.title}
                        authors={book.authors}
                        publishedDate={book.publishedDate}
                        pageCount={book.pageCount}
                        averageRating={book.averageRating}
                        ratingsCount={book.ratingsCount}
                        description={book.description}
                    />
                }
            })}
        </div >
    )
}


export default MyBooks;