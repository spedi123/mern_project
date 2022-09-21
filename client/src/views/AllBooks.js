import React from 'react';
import BookCard from './BookCard'

const AllBooks = (props) => {

    return (
        <div className="contentContainer">
            {props.books !== undefined && props.books.map((book, i) => {
                try {
                    return (
                        <BookCard
                            key={i}
                            id={book.id}
                            thumbnail={book.volumeInfo.imageLinks.thumbnail}
                            title={book.volumeInfo.title}
                            authors={book.volumeInfo.authors}
                            publishedDate={book.volumeInfo.publishedDate}
                            pageCount={book.volumeInfo.pageCount}
                            averageRating={book.volumeInfo.averageRating}
                            ratingsCount={book.volumeInfo.ratingsCount}
                            description={book.volumeInfo.description}
                        />
                    )
                }
                catch (err) {
                    <BookCard
                    key={i}
                    id={book.id}
                    thumbnail={""}
                    title={book.volumeInfo.title}
                    authors={book.volumeInfo.authors}
                    publishedDate={book.volumeInfo.publishedDate}
                    pageCount={book.volumeInfo.pageCount}
                    averageRating={book.volumeInfo.averageRating}
                    ratingsCount={book.volumeInfo.ratingsCount}
                    description={book.volumeInfo.description}
                />
                }
            })}
        </div >
    )
}


export default AllBooks;