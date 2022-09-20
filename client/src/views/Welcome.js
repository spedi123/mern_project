import React from 'react';
import background from '../img/books.png';

const Welcome = (props) => {
    return (
        <div className="welcome"
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
        >
                <h4>Welcome to My Little Library</h4>
                <h1>Find your favorite book and</h1>
                <h1>Save it to your favorites list!</h1>
        </div>
    )
}

export default Welcome;