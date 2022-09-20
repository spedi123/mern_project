import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import { getBookById } from '../services/internalApiService';

const OneBook = ({props}) => {
    const navigate = useNavigate();

    const [book, setBook] = useState("");

    const { id } = useParams();

    useEffect(() => {
        getBookById(id)
        .then((data) => {
            console.log(data);
            setBook(data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, [id]);

    if (book === null) {
        return null;
    }

    const {
        image,
        title,
        authors,
        publishedDate,
        rating
    } = book;

    const handleReturnClick = () => {
        navigate(-1)
    }
    return (
        <div className="contentContainer">
            <div className="oneBookContainer">
                <div className="oneBookRow1">
                    <div className="oneBookRow1Left">
                        {image}
                    </div>
                    <div className="oneBookRow1Right">
                        {title}
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