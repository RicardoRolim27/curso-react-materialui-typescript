import { Button } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAppThemeContext } from '../shared/contexts';

function AppRoutes() {
  const { toggleTheme } = useAppThemeContext();

  return (
    <>
      <Routes>
        <Route path="/index" element={<Button variant="contained" color="primary" onClick={toggleTheme}>Teste</Button>} />
        <Route path="*" element={<Navigate to="/index"/>}/>
      </Routes>
    </>
  );
}

export default AppRoutes;
