import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <header>
            <Link to="/" className="headerLink">
                <span>
                    MY LITTLE LIBRARY
                </span>
            </Link>
        </header>
    )
}

export default Header;