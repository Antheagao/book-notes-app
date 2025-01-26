import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BookCard.css';
import axios from 'axios';

function BookCard({ book, onDelete }) {
  const navigate = useNavigate();

  // Handle delete button click
  const handleDelete = async () => {
    try {
      await axios.delete(`/api/books/${book.id}`); 
      onDelete(book.id); 
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <div className="book-card">
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Rating: {book.rating}</p>
      <p>Notes: {book.notes}</p>
      {book.cover_url ? (
        <img src={book.cover_url} alt={book.title} className='book-cover'/>
      ) : (
        <div className="placeholder">No cover available</div>
      )}
      <button className="edit-button" onClick={() => navigate(`/books/${book.id}/edit`)}>
        Edit
      </button>
      <button className="delete-button" onClick={handleDelete}>
          Delete
        </button>
    </div>
  );
}

export default BookCard;
