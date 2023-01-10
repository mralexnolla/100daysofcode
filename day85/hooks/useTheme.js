import {useState, useEffect} from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState('light');

  useEffect(()=>{
      document.documentElement.setAttribute("data-theme", theme);
  },[theme]);

  const onToggleTheme = () => {
    setTheme((prev)=> prev === 'light' ? 'dark' : 'light');
  };

  const isDarkTheme = (theme === 'dark');

  return {onToggleTheme, isDarkTheme}

}