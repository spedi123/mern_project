import React from 'react';
import { Link } from 'react-router-dom';

const SubMenu = (props) => {
    return (
        <div className="menuContainer">
            <ul>
                <Link to="/" className="menuLink">
                    <li>Home</li>
                </Link>
                <Link to="/mybooks" className="menuLink">
                    <li>My Favorite Books</li>
                </Link>
                <Link to="/users" className="menuLink">
                    <li>Sign In / Register</li>
                </Link>
            </ul>
        </div>
    )
}

export default SubMenu;