import React from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ThemeContextProvider from './context/ThemeContext';

export default function App() {
  return (
    <div className="App">
      
      <ThemeContextProvider>
      <Navbar />
      <BookList />
      </ThemeContextProvider>
    </div>
  );
}
