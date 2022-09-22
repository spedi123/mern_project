import React, { useState } from 'react';
import { ReactDOM } from 'react';
import { createBook } from '../../services/internalApiService';
import MyBooks from '../../views/MyBooks';

const AddToMyListBtn = (props) => {
    const [buttonText, setButtonText] = useState('ADD TO MY LIST');
    const [disableBtn, setDisableBtn] = useState(false);

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

        createBook(favoriteBook)
            .then((data) => {
                console.log('favorite book:', data);
                setButtonText('ADDED');
                setDisableBtn(true);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <button className="bookmarkBtn"
            disabled={disableBtn}
            onClick={handleAddToMyListClick}>
            {buttonText}
        </button>
    )
}

const AddedBtn = (props) => {
    return (
        <button className="bookmarkBtn" disabled>
            ADDED
        </button>
    )
}

const AddBtnControl = (props) => {
    for (let i = 0; i < MyBooks.books.length; i++) {
        if (MyBooks.books[i]['id'] === props.id) {
            return <AddedBtn />;
        }
        else {
            return <AddToMyListBtn />
        }
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AddBtnControl />);

export {
    AddToMyListBtn,
    AddedBtn,
    AddBtnControl
};