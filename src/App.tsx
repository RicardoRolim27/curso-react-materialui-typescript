import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import { AppThemeProvider, DrawerProvider } from './shared/contexts';
import { MenuLateral } from './shared/components';

function App() {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>
          <MenuLateral>
            <AppRoutes />
          </MenuLateral>
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  );
}

export default App;
