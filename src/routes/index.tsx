
import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDrawerContext } from '../shared/contexts';
import { Dashboard } from '../pages';

function AppRoutes() {

  const {setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      { label: 'Página Inicial',
        icon: 'home',
        path: '/index'
      },
      { label: 'Cidades',
        icon: 'star',
        path: '/cidades'
      },
      { label: 'Dashboard',
        icon: 'star',
        path: '/dashboard'
      }        
    ]);
  }, []);


  return (
    <>
      <Routes>
        <Route path="/index"/>
        <Route path="/cidades"/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="*" element={<Navigate to="/index"/>}/>
      </Routes>
    </>
  );
}

export default AppRoutes;
