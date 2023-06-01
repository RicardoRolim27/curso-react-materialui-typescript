import { createContext, useCallback, useState, useContext } from 'react';


interface IDrawerContextData {
  isDrawerOpen: boolean;
  toggleDrawerOpen: () => void;
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () =>{
  return useContext(DrawerContext);
};

export const DrawerProvider: React.FC<any> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen((oldDrawerOpen) => !oldDrawerOpen);
  }, []);


  return (
    <DrawerContext.Provider value={{ isDrawerOpen: isDrawerOpen, toggleDrawerOpen: toggleDrawerOpen }}>
      {children}
    </DrawerContext.Provider>
  );
};
