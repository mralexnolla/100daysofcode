import React from "react";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import ToggleTheme from "./components/ToggleTheme";
import ContextProvider from "./context/Context";


export default function App() {
  return (
    <div className="App">
    <ContextProvider>
      <Navbar />
      <BookList />
      <ToggleTheme />
    </ContextProvider>
    </div>
  );
}
