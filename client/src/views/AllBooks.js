import React from 'react';
import BookCard from './BookCard'

const AllBooks = (props) => {
    return (
        <div className="contentContainer">
            {props.books.map((book, i) => {
                return (
                    <BookCard
                        key={i}
                        id={book.id}
                        image={book.volumeInfo.imageLinks.thumbnail}
                        title={book.volumeInfo.title}
                        authors={book.volumeInfo.authors}
                        publishedDate={book.volumeInfo.publishedDate}
                        rating={book.volumeInfo.averageRating}
                    />
                )
            })}
        </div >
    )
}


export default AllBooks;