import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { getBookById } from '../services/internalApiService';

const OneBook = ({ props }) => {
    const navigate = useNavigate();

    const location = useLocation();

    // const {
    //     image,
    //     title,
    //     authors,
    //     publishedDate,
    //     rating
    // }=book

    // const [book, setBook] = useState({
    //     image: props.image,
    //     title: props.title,
    //     authors: props.authors,
    //     publishedDate: props.publishedDate,
    //     rating: props.rating
    // });

    const handleReturnClick = () => {
        navigate(-1)
    }
    return (
        <div className="contentContainer">
            <div className="oneBookContainer">
                <div className="oneBookRow1">
                    <div className="oneBookRow1Left">
                        {/* {props.location.state.image} */}
                    </div>
                    <div className="oneBookRow1Right">
                        description goes here
                    </div>
                </div>

                <div className="oneBookRow2">
                    <button onClick={handleReturnClick}>
                        RETURN
                    </button>
                </div>
            </div>

        </div>
    )
};

export default OneBook;