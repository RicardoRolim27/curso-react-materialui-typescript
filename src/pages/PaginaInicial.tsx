import { Box, Button } from '@mui/material';
import { useAppThemeContext, useDrawerContext } from '../shared/contexts';


export const PaginaInicial = () => {
  const {toggleDrawerOpen} = useDrawerContext();
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