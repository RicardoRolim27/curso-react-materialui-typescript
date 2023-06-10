import { Box, Button } from '@mui/material';
import { useAppThemeContext, useDrawerContext } from '../shared/contexts';
import { useEffect } from 'react';


export const PaginaInicial = () => {
  const {toggleDrawerOpen, setDrawerOptions } = useDrawerContext();
  const {toggleTheme} = useAppThemeContext();

  return (
    <>
      <Box>
        <Button variant="contained" color="primary" onClick={toggleDrawerOpen}>Menu</Button>
      </Box>
      <Box>
        <Button variant="contained" color="primary" onClick={toggleTheme}>Teste</Button>
      </Box>
    </>
  );
};