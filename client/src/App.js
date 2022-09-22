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
import SearchBar from './components/search/SearchBar';
import SubMenu from './components/menu/menu';
import Welcome from './views/Welcome';
import AllBooks from './views/AllBooks';
import OneBook from './views/OneBook';
import MyBooks from './views/MyBooks';
import NotFound from './views/NotFound';
import './App.css';
import LoginAndRegister from './views/LoginAndRegister';

function App () {
  const [searchInput, setSearchInput] = useState("");
  const [books, setBooks] = useState([]);
  const [sort, setSort] = useState("");

  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    console.log(e.target.value);
    setSearchInput(e.target.value);
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    axios
      .get('https://www.googleapis.com/books/v1/volumes?',
        { params: { q: searchInput, maxResults: 40 } }
      )
      .then(response => {
        console.log(response.data.items);
        setBooks([...response.data.items]);
        navigate('/books');
      })
      .catch(() => navigate("/error"));
  }

  const handleSortChange = (e) => {
    console.log(e.target.value);
    setSort(e.target.value)
  }

  const sortedBooks =
    books.sort((a, b) => {
      if (sort === "newest") {
        return parseInt(b.volumeInfo.publishedDate.substring(0, 4)) - parseInt(a.volumeInfo.publishedDate.substring(0, 4));
      }
      else if (sort === "oldest") {
        return parseInt(a.volumeInfo.publishedDate.substring(0, 4)) - parseInt(b.volumeInfo.publishedDate.substring(0, 4));
      }
    })

  return (
    <div className="App">
      <nav className="navbar sticky-top navbar-dark bg-light" id="navBarContainer">
        <Header />
        <SearchBar
          handleSearchChange={handleSearchChange}
          handleSearchSubmit={handleSearchSubmit}
          handleSortChange={handleSortChange}
        />
        <SubMenu />
      </nav>

      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/books" element={<AllBooks books={sortedBooks} />} />
        <Route path="/books/:id" element={<OneBook />} />
        <Route path="/mybooks" element={<MyBooks />} />
        <Route path="/users" element={<LoginAndRegister />} />
        <Route path="/error" element={<NotFound searchInput={searchInput} />} />
      </Routes>
    </div>
  );
}

export default App;
