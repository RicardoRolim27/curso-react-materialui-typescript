
import { Routes, Route, Navigate } from 'react-router-dom';

function AppRoutes() {

  return (
    <>
      <Routes>
        <Route path="/index"/>
        <Route path="*" element={<Navigate to="/index"/>}/>
      </Routes>
    </>
  );
}

export default AppRoutes;
