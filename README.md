# Book Notes App
A website for organizing book notes

## Description
This is a full-stack application to help users manage their book notes. Users can view, add, edit, and delete notes.

### Features
- CRUD operations for notes
- Fetch book covers using api requests to https://openlibrary.org/dev/docs/api/covers
- Store book reviews in database

## Technologies Used
- **Frontend**: React, Vite
- **Backend**: Node.js, Express
- **Database**: Postgres
- **Styling**: CSS

## Getting Started

To set up the project locally, follow these steps:
### Prerequisites
- Node.js (v16+)
- npm
- A postgres database using pgAdmin with a books database and books table

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Antheagao/book-notes-app.git
   cd book-notes-app
   cd client 
2. Install dependencies for both the client and server
```bash
  npm install
  cd ../server
  npm install

  ```markdown
  ## Configuration
  Create a `.env` file in the `server` and `client` directories with the following variables:

### Client `.env`
```env
VITE_API_URL=http://localhost:5000
PORT=5000

### Server `.env`
DB_USER=""
DB_HOST=""
DB_NAME=""
DB_PASSWORD=""
DB_PORT=""
PORT=5000

### Backend
1. Navigate to the `server` directory:
   ```bash
   cd server
   npm start
2. Navigate to the `Client` directory in a new terminal
  ```bash
  cd client
  npm run dev
3. Open internet browser
  go to http://localhost:5173/

### Example Screenshot
