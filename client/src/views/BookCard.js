import React from 'react';
<<<<<<< HEAD
import { useState } from 'react';
=======
import { useState, useEffect } from 'react';
>>>>>>> 3e4480a7b200621a95d64fe5596c46aa0a6d3411
import { useNavigate, Link } from 'react-router-dom';
import {
    getAllBooks,
    createBook,
    deleteBookById,
    getAllBooks
} from '../services/internalApiService';


const BookCard = (props) => {

    const navigate = useNavigate();

    const [books, setBooks] = useState([]);

    useEffect(() => {
        getAllBooks()
            .then((data) => {
                setBooks(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const [buttonText, setButtonText] = useState('ADD TO MY LIST');
    const [disableBtn, setDisableBtn] = useState(false);

    const updateTitle = () => {
        return (
            props.title !== undefined && props.title.length > 25
                ? `${props.title.substring(0, 26)}...`
                : props.title
        )
    }

    const updateAuthors = () => {
        if (props.authors !== undefined && props.authors.includes(',')) {
            for (let i = 0; i < props.authors.length; i++) {
                if (props.authors[i] === ",") {
                    return `${props.authors.substring(0, i)} et al.`
                }
            }
        }
        else if (props.authors === undefined) {
            return `Anonymous`
        }
        else {
            return props.authors
        }
    }

    const updatePublishedDate = () => {
        return (
            props.publishedDate === '0000'
                ? 'Not available'
                : props.publishedDate.substring(0, 4)
        )
    }

    const updateRating = () => {
        return (
            props.averageRating !== undefined
                ? `Average Rating: ${props.averageRating} out of 5`
                : 'Average Rating: None'
        )
    }

    const handleViewDetailsClick = () => {
        navigate(`/books/${props.bookId}`, {
            state: {
                bookId: props.bookId,
                thumbnail: props.thumbnail,
                title: props.title,
                authors: props.authors,
                publishedDate: props.publishedDate,
                averageRating: props.averageRating,
                ratingsCount: props.ratingsCount,
                pageCount: props.pageCount,
                description: props.description
            }
        })
    }

    // Solution 1: Disable button
    // const handleAddToMyListClick = (e) => {
    //     const favoriteBook = {
    //         bookId: props.bookid,
    //         thumbnail: props.thumbnail,
    //         title: props.title,
    //         authors: props.authors,
    //         publishedDate: props.publishedDate,
    //         averageRating: props.averageRating,
    //         ratingsCount: props.ratingsCount,
    //         pageCount: props.pageCount,
    //         description: props.description
    //     }

    //     createBook(favoriteBook)
    //         .then((data) => {
    //             console.log('Added Book:', data);
    //             setButtonText('ADDED');
    //             setDisableBtn(true);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }

    //  Solution 2: Change Add to my list to delete button
    const handleAddToMyListClick = (e) => {
        const favoriteBook = {
            id: props.id,
            thumbnail: props.thumbnail,
            title: props.title,
            authors: props.authors,
            publishedDate: props.publishedDate,
            averageRating: props.averageRating,
            ratingsCount: props.ratingsCount,
            pageCount: props.pageCount,
            description: props.description
        }
        if (buttonText === "ADD TO MY LIST") {
            createBook(favoriteBook)
                .then((data) => {
                    console.log('Added Book:', data);
                    setButtonText('ADDED');
<<<<<<< HEAD
                    console.log(favoriteBook._id);

=======
>>>>>>> 3e4480a7b200621a95d64fe5596c46aa0a6d3411
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        else if (buttonText === "ADDED") {
<<<<<<< HEAD
            console.log('iamhere', favoriteBook._id);

            deleteBookById(props.id)
=======
            books.map((book) => {
                if(book.id === props.id) {
                    return book._id
                }
                return book
            })
            console.log(book);
            
            deleteBookById(books[0]._id)
>>>>>>> 3e4480a7b200621a95d64fe5596c46aa0a6d3411
                .then((deletedBook) => {
                    console.log('Deleted Book:', deletedBook);
                    setButtonText('ADD TO MY LIST')
                })
                .catch((error) => {
                    console.log(error);
                })
        }

    }

    return (
        <div className="bookCardContainer">
            <div className="bookCardImgContainer">
                <img src={props.thumbnail} alt="bookcover"
                    className="bookCardThumbnail"
                />
            </div>

            <div className="bookCardInfoContainer">
                <p className="bookCardInfoTitle">
                    {updateTitle(props.title)}
                </p>
                <p className="bookCardInfoAuthorsAndDate">
                    {updateAuthors(props.authors)} ({updatePublishedDate(props.publishedDate)})
                </p>
                <p className="bookCardInfoRating">
                    {updateRating(props.averageRating)}
                </p>
            </div>

            <div className="bookCardBtnsContainer">
                <button className="viewDetailsBtn"
                    onClick={handleViewDetailsClick}>
                    VIEW DETAILS
                </button>
<<<<<<< HEAD

=======
>>>>>>> 3e4480a7b200621a95d64fe5596c46aa0a6d3411
                {localStorage.getItem('token') ? <button className="bookmarkBtn"
                    disabled={disableBtn}
                    onClick={handleAddToMyListClick}>
                    {buttonText}
<<<<<<< HEAD
                </button> : <Link className="viewDetailsBtn" to="/users">Sign In / Register</Link>}
=======
                </button> :  <Link className="viewDetailsBtn" to="/users">Sign In / Register</Link>}
                
>>>>>>> 3e4480a7b200621a95d64fe5596c46aa0a6d3411
            </div>

        </div>
    )
};

export default BookCard;