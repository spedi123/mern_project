import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookCard = (props) => {

    const navigate = useNavigate();

    const updateTitle = () => {
        return (
            props.title.length > 26
                ? `${props.title.substring(0, 27)}...`
                : props.title
        )
    }

    const updateAuthors = () => {
        return (
            props.authors.length > 1
                ? `${props.authors[0]} et al.`
                : props.authors

        )
    }

    const updatePublishedDate = () => {
        return (props.publishedDate.substring(0, 4))
    }

    const updateRating = () => {
        return (
            props.rating == undefined
                ? 'Average Rating: None'
                : `Average Rating: ${props.rating} out of 5`
        )
    }

    const handleViewDetailsClick = () => {
            navigate(`/books/${props.id}`, {
                image: props.image,
                title: props.title,
                authors: props.authors,
                publishedDate: props.publishedDate,
                rating: props.rating
            })
    }

    return (
        <div className="bookCardContainer">
            <div className="bookCardImgContainer">
                <img src={props.image} alt="bookcover"
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
                    {updateRating(props.rating)}
                </p>
            </div>

            <div className="bookCardBtnsContainer">
                <button className="viewDetailsBtn"
                    onClick={handleViewDetailsClick}>
                    VIEW DETAILS
                </button>
                <button className="bookmarkBtn">
                    ADD TO MY LIST
                </button>
            </div>

        </div>
    )
};

export default BookCard;