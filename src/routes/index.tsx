
import path from 'path';
import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDrawerContext } from '../shared/contexts';

function AppRoutes() {

  const {toggleDrawerOpen, setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      { label: 'Página Inicial',
        icon: 'home',
        path: '/index'
      },
      { label: 'Cidades',
        icon: 'star',
        path: '/cidades'
      }    
    ]);
  }, []);


  return (
    <>
      <Routes>
        <Route path="/index"/>
        <Route path="/cidades"/>
        <Route path="*" element={<Navigate to="/index"/>}/>
      </Routes>
    </>
  );
}

export default AppRoutes;
