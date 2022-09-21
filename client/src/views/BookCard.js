import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookCard = (props) => {

    const navigate = useNavigate();

    const updateTitle = () => {
        return (
            props.title !== undefined && props.title.length > 25
                ? `${props.title.substring(0, 26)}...`
                : props.title
        )
    }

    const updateAuthors = () => {
        return (
            props.authors !== undefined && props.authors.length > 1
                ? `${props.authors[0]} et al.`
                : props.authors
        )
    }

    const updatePublishedDate = () => {
        return (
            props.publishedDate !== undefined
                ? props.publishedDate.substring(0, 4)
                : null
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
                <button className="bookmarkBtn">
                    ADD TO MY LIST
                </button>
            </div>

        </div>
    )
};

export default BookCard;