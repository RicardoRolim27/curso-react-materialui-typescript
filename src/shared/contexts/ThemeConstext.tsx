import { createContext, useCallback, useMemo, useState, useContext } from 'react';
import { Box, ThemeProvider } from '@mui/material';
import { lightTheme, darkTheme } from './../themes';

interface IThemeContextData {
  themeName: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () =>{
  return useContext(ThemeContext);
};

export const AppThemeProvider: React.FC<any> = ({ children }) => {
  const [themeName, setThemeName] = useState<'light' | 'dark'>('light');

  const toggleTheme = useCallback(() => {
    setThemeName((oldThemeName) =>
      oldThemeName === 'light' ? 'dark' : 'light'
    );
  }, []);

  const theme = useMemo(() => {
    if (themeName === 'light') return lightTheme;

    return darkTheme;
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}></ThemeProvider>
      <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>{children}</Box>
    </ThemeContext.Provider>
  );
};
