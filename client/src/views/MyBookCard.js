import React from 'react';

import { useNavigate } from 'react-router-dom';

import { deleteBookById } from '../services/internalApiService';

const MyBookCard = (props) => {    

    const navigate = useNavigate();

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
        navigate(`/books/${props.id}`, {
            state: {
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
        })
    }

    const handleRemoveClick = () => {
        if (window.confirm(`Are you sure you want to remove this book from your list?`)) {
            deleteBookById(props._id)
                .then((deletedBook) => {
                    console.log(props._id);
                    console.log('deleted Book:', deletedBook);
                    window.location.reload()
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
                <button className="bookmarkBtn"
                    onClick={handleRemoveClick}>
                    REMOVE
                </button>
            </div>

        </div>
    )
};

export default MyBookCard;