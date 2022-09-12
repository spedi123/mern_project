import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../searchbar/SearchBar';
import BookCard from './BookCard';
import axios from 'axios';

const BookList = (props) => {
    const [bookList, setBookList] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://www.googleapis.com/books/v1/volumes?q=harry%20potter')
        // ,{params: {SearchBar.useState.searchKeyword}})
            .then(response => {
                console.log(response.data);
                setBookList(response.data);
            })
            .catch(() => navigate("/error"));
    }, []);

    return (
        <div className="searchResult">
            <BookCard />
            {bookList.length > 0 && bookList.map((book, index) => {
                return <BookCard />
            })}
        </div>
    )
}


export default BookList;