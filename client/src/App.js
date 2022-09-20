import {
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import {
  React,
  useState,
} from 'react';
import axios from 'axios';
import Header from './components/header/Header';
import SearchBar from './components/searchBar/SearchBar';
import SubMenu from './components/menu/menu';
import Welcome from './views/Welcome';
import AllBooks from './views/AllBooks';
import OneBook from './views/OneBook';
import MyBooks from './views/MyBooks';
import NotFound from './views/NotFound';
import './App.css';

function App () {
  const [searchInput, setSearchInput] = useState("");
  const [books, setBooks] = useState("");
  const [book, setBook] = useState("");

  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    console.log(e.target.value);
    setSearchInput(e.target.value);
  }


  const handleSearchSubmit = (e) => {
    e.preventDefault();
    axios
      .get('https://www.googleapis.com/books/v1/volumes',
        { params: { q: searchInput } })
      .then(response => {
        console.log(response.data);
        setBooks([...response.data.items]);
        navigate('/books');
      })
      .catch(() => navigate("/error"));
  }

  return (
    <div className="App">
      <nav className="navbar sticky-top navbar-dark bg-light" id="navBarContainer">
        <Header />
        <SearchBar
          handleSearchChange={handleSearchChange}
          handleSearchSubmit={handleSearchSubmit}
        />
        <SubMenu />
      </nav>

      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/books" element={<AllBooks books={books} />} />
        <Route path="/books/:id" element={<OneBook book={book} />} />
        <Route path="/mybooks" element={<MyBooks />} />
        <Route path="/error" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
