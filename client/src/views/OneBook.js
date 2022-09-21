import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'

const OneBook = ({ props }) => {
    const navigate = useNavigate();

    const location = useLocation();

    const updateAuthors = () => {
        return (
            location.state.authors !== undefined && location.state.authors.length > 1
                ? `${location.state.authors.join(', ')}`
                : location.state.authors
        )
    }

    const updateRating = () => {
        return (
            location.state.averageRating !== undefined
                ? `Average Rating: ${location.state.averageRating} out of 5 (${location.state.ratingsCount} ratings)`
                : 'Average Rating: None'
        )
    }


    const handleReturnClick = () => {
        navigate(-1)
    }
    return (
        <div className="contentContainer">
            <div className="oneBookContainer">
                <div className="oneBookRow1">
                    <div className="oneBookRow1Left">
                        <img src={location.state.thumbnail} alt="bookcover"
                            className="oneBookImage"
                        />
                    </div>
                    <div className="oneBookRow1Right">
                        <ul>
                            <li>Title: {location.state.title}</li>
                            <li>Author(s): {updateAuthors(location.state.authors)}</li>
                            <li>Published Date: {location.state.publishedDate}</li>
                            <li>Number of Pages: {location.state.pageCount} pages</li>
                            <li>Description: {location.state.description} </li>
                            <li>{updateRating(location.state.averageRating)}</li>
                        </ul>
                    </div>
                </div>

                <div className="oneBookRow2">
                    <button onClick={handleReturnClick}
                        className="returnToAllBooksBtn">
                        RETURN
                    </button>
                </div>
            </div>

        </div>
    )
};

export default OneBook;