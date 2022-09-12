import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './components/header/Header';
import SearchBar from './components/searchbar/SearchBar';
import Welcome from './components/welcome/Welcome';
import BookList from './components/book/BookList';
import Error from './components/errorMessage/Error';
import './App.css';

function App () {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
