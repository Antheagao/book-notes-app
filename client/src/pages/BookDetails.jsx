import react from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      const response = await axios.get(`/api/books/${id}`);
      setBook(response.data);
    };

    fetchBook();
  }, [id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="book-details">
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Rating: {book.rating}</p>
      <p>Notes: {book.notes}</p>
      <img src={book.cover_url} alt={book.title} />
      <button onClick={() => navigate(`/books/${id}/edit`)}>Edit</button>
    </div>
  );
}

export default BookDetails;
