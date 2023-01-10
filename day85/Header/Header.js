import React from "react";
import {useTheme} from '../hooks/useTheme';

const Header = () => {
  const {onToggleTheme, isDarkTheme} = useTheme();
  return (
    <header className="header">
      <h2>Todos</h2>
      <section className="actionsContainer">
        <button
          onClick={onToggleTheme}
        >
          {isDarkTheme ? "Change to 🌞 mode" : "Change to 🌚 mode"}
        </button>
      </section>
    </header>
  );
};

export default Header;
