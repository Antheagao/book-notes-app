import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './EditBook.css';

function EditBook() {
  const { id } = useParams(); // Get the book ID from the URL
  const navigate = useNavigate();
  const [book, setBook] = useState({
    title: '',
    author: '',
    isbn: '',
    rating: '',
    notes: '',
    date_read: '',
  });

  // Fetch the book data to pre-fill the form
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`/api/books/${id}`);
        setBook(response.data);
      } catch (error) {
        console.error('Error fetching book:', error);
      }
    };

    fetchBook();
  }, [id]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/books/${id}`, book);
      navigate('/books'); // Redirect to the book list after updating
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  return (
    <div className="edit-book">
      <h1>Edit Book</h1>
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            placeholder='Title'
            name="title"
            value={book.title}
            onChange={handleChange}
            required
            className="input"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder='Author'
            name="author"
            value={book.author}
            onChange={handleChange}
            required
            className="input"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder='ISBN'
            name="isbn"
            value={book.isbn}
            onChange={handleChange}
            required
            className="input"
          />
        </div>
        <div>
          <input
            type="number"
            name="rating"
            placeholder='Rating'
            value={book.rating}
            onChange={handleChange}
            min="0"
            max="5"
            step="0.1"
            className="input"
          />
        </div>
        <div>
          <textarea
            name="notes"
            placeholder='Notes'
            value={book.notes}
            onChange={handleChange}
            className="textarea"
          />
        </div>
        <div>
          <input
            type="date"
            name="date_read"
            value={book.date_read}
            onChange={handleChange}
            className="input"
          />
        </div>
        <button type="submit" className="button">Update Book</button>
      </form>
    </div>
  );
}

export default EditBook;
