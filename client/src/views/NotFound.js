import React from 'react';

const NotFound = (props) => {
    return (
        <div className="contentContainer">
            <div className="notFound">
                <h5>Your search {props.searchInput} did not match any book results.</h5>
                <br></br>
                <p>Suggestions:</p>
                <p>Make sure all words are spelled correctly.</p>
                <p>Try different keywords.</p>
                <p>Try more general keywords.</p>
                <p>Try fewer keywords.</p>
            </div>
        </div>
    )
}

export default NotFound;