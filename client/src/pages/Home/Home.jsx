import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      {/* Hero section */}
      <section className="hero">
        <h1>Welcome to Book Notes App</h1>
        <p>Keep track of the books you've read and your thoughts about them.</p>
        <div className="cta-buttons">
          <Link to="/books" className="btn">View Books</Link>
          <Link to="/books/add" className="btn">Add a Book</Link>
        </div>
      </section>

      {/* Features section */}
      <section className="features">
        <h2>Why Use Book Notes App?</h2>
        <div className="feature-cards">
          <div className="card">
            <h3>Track Your Reading</h3>
            <p>Keep a record of all the books you've read.</p>
          </div>
          <div className="card">
            <h3>Write Notes</h3>
            <p>Jot down your thoughts and insights about each book.</p>
          </div>
          <div className="card">
            <h3>Rate Books</h3>
            <p>Rate books to remember your favorites.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
