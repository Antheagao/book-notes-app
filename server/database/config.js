// Import the Pool object from the pg package
import dotenv from 'dotenv';
import pg from 'pg';

// Destructure Pool from pg
const { Pool } = pg;

// Load environment variables
dotenv.config();

// Database connection configuration
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Test the database connection
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Database connection successful:', res.rows[0].now);
  }
});

// Export the pool for use in other files
export default pool;