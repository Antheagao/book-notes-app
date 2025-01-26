import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import BookCard from '../components/BookCard/BookCard';
import './BookList.css';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('/api/books');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  // Handle book deletion
  const handleDelete = (bookId) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== bookId));
  };

  return (
    <div className="book-list">
      <h1>Book List</h1>
      <div className="books-container">
        {books.map((book) => (
          <BookCard key={book.id} book={book} onDelete={handleDelete}/>
        ))}
      </div>
    </div>
  );
}

export default BookList;
