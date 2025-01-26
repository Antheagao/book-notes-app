// Import required modules
import express from 'express';
import axios from 'axios';
import pool from '../database/config.js';

// Initialize express app
const app = express();

// Middleware setup
app.use(express.json());

// App initialization 
const fetchBookCover = async (isbn) => {
  try {
    const response = await axios.get(`https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`);
    console.log('Book cover fetched:', response.request.res.responseUrl);
    return response.request.res.responseUrl;
  } catch (error) {
    console.error('Error fetching book cover:', error);
    return null;
  }
}

// Routes

// GET /books
app.get('/api/books', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM books ORDER BY date_read DESC');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /books
app.post('/api/books', async (req, res) => {
  const { title, author, isbn, rating, notes, date_read } = req.body;

  if (!title || !author || !isbn) {
    return res.status(400).json({ error: 'Title, author, and ISBN are required' });
  }

  try {
    const cover_url = await fetchBookCover(isbn);

    const { rows } = await pool.query(
      'INSERT INTO books (title, author, isbn, rating, notes, date_read, cover_url) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [title, author, isbn, rating || null, notes || null, date_read || null, cover_url]
    );

    res.status(201).json(rows[0]);
  } catch (error) {
    console.error('Error creating book:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT /books/:id
app.put('/api/books/:id', async (req, res) => {
  const { id } = req.params;
  const { title, author, isbn, rating, notes, date_read } = req.body;

  if (!title || !author || !isbn) {
    return res.status(400).json({ error: 'Title, author, and ISBN are required' });
  }

  try {
    const cover_url = await fetchBookCover(isbn);

    const { rows } = await pool.query(
      'UPDATE books SET title = $1, author = $2, isbn = $3, rating = $4, notes = $5, cover_url = $6, date_read = $7, updated_at = NOW() WHERE id = $8 RETURNING *',
      [title, author, isbn, rating || null, notes || null, cover_url, date_read || null, id]
    );

    if (rows.length === 0) {
      return res.status(404).json({ error: 'Book not found' });
    }

    res.json(rows[0]);
  } catch (error) {
    console.error('Error updating book:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE /books/:id
app.delete('/api/books/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const { rowCount } = await pool.query('DELETE FROM books WHERE id = $1 RETURNING *', [id]);

    if (rowCount === 0) {
      return res.status(404).json({ error: 'Book not found' });
    }

    res.status(204).send();
  } catch (error) {
    console.error('Error deleting book:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Export the app
export default app;
