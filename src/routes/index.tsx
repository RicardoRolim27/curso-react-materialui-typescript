import { Routes, Route, Navigate } from "react-router-dom";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/index" element={<h1>Página Inicial</h1>} />
        <Route path="*" element={<Navigate to="/index"/>}/>
      </Routes>
    </>
  );
}

export default AppRoutes;
