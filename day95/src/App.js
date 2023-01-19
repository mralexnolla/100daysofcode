import React from 'react';
import NewBookForm from './components/BookForm';
import Booklist from './components/BookList';
import Navbar from './components/Navbar';
import BookContextProvider from './contexts/BookContext';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <Booklist />
        <NewBookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
