import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = (props) => {
    const [searchKeyword, setSearchKeyword] = useState({
        input:""
    });

    const handleChange = (e) => {
        console.log(e.target.value);
        setSearchKeyword({ ...searchKeyword, input: e.target.value })
    }
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/books");

    }
    return (
        <div className="searchbar">
            <form onSubmit={handleSubmit}>
                <input type="text" value={searchKeyword.input} onChange={handleChange} />
                <button>Search</button>
            </form>
        </div>
    )
}

export default SearchBar;