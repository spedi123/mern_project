import React from 'react';

const SearchBar = (props) => {
    return (
        <div className="searchBarContainer">
            <form className="searchForm" onSubmit={props.handleSearchSubmit}>
                <input
                    type="text"
                    className="form-control"
                    id="searchInputField"
                    placeholder="Search a book title or author"
                    onChange={props.handleSearchChange}
                />

                <button className="searchBtn">
                    <span>SEARCH</span>
                </button>

                <select
                    className="form-select"
                    id="sortBtn"
                    defaultValue="sortBy"
                    onChange={props.handleSortChange}>
                    <option value="sortBy">Sort by</option>
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                </select>
            </form>
        </div>
    )
}

export default SearchBar;