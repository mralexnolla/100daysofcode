import { useState, useEffect } from "react";

const LOCAL_STORAGE_THEME_KEY = "theme";

const useTheme = () => {
  // We persist the theme to local storage so that it can be restored when the user reloads the page.
  const [theme, setTheme] = useState(
    localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || "light"
  );

  // We use useEffect to update the theme when the user changes it.
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
  }, [theme]);

  const onToggleTheme = () => {
    // We toggle the theme between "light" and "dark".
    setTheme((previousTheme) => (previousTheme === "light" ? "dark" : "light"));
  };

  const isDarkTheme = theme === "dark";

  return {
    onToggleTheme,
    isDarkTheme,
  };
};

export default useTheme;
