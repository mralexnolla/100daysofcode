import React, { useContext } from "react";
import useTheme from "../../hooks/useTheme";
import { PartyContext } from "../../providers/PartyProvider";
import Profile from "../Profile/Profile";
import "./Header.css";

const Header = React.memo(() => {
  const { isDarkTheme, onToggleTheme } = useTheme();
  const { animationsEnabled, toggleAnimationsEnabled } =
    useContext(PartyContext);

  return (
    <header className="header">
      <h2>Todos</h2>

      <section className="actionsContainer">
        <button
          onClick={toggleAnimationsEnabled}
          aria-label={`${
            animationsEnabled ? "Disable animations" : "Enable animations"
          }`}
        >
          {animationsEnabled ? "🤫" : "🥳"}
        </button>
        <button
          onClick={onToggleTheme}
          aria-label={`${
            isDarkTheme ? "Change to Light Theme" : "Change to Dark Theme"
          }`}
        >
          {isDarkTheme ? "🌞" : "🌚"}
        </button>
        <Profile />
      </section>
    </header>
  );
});

export default Header;
