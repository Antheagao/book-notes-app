import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">📚 Book Notes App</Link>
      </div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/books">Books</Link>
        <Link to="/books/add">Add Book</Link>
      </nav>
    </header>
  );
}

export default Header;
