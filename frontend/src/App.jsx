import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import Navbar from './components/Navbar/Navbar';
import BookList from './components/Booklist/Booklist';
import BookForm from './components/BookForm/BookForm';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Welcome to the Library Management System</h1>
              <p>Please navigate to the Books section to view or manage books.</p>
            </>
          }
        />
        <Route path="/books" element={<BookList />} />
        <Route path="/books/create" element={<BookForm />} />
        <Route path="/books/update/:id" element={<BookForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;