import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';
import Home from './pages/Home/Home';
import BookList from './pages/BookList/BookList';
import AddBook from './pages/AddBook/AddBook';
import BookDetails from './pages/BookDetails/BookDetails';
import EditBook from './pages/EditBook/EditBook';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/books/add" element={<AddBook />} />
          <Route path="/books/:id/edit" element={<EditBook />} />
          <Route path="/books/:id" element={<BookDetails />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
