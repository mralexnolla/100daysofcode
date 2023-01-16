import React from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ToggleTheme from './components/ToggleTheme';
import ThemeContextProvider from './context/ThemeContext';

export default function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
      <Navbar />
      <BookList />
      <ToggleTheme />
      </ThemeContextProvider>
    </div>
  );
}
