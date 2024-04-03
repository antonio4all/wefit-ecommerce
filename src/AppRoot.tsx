import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import { GlobalStyle } from './styles/global';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { CartProvider } from './context/CartContext';

function AppRoot() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CartProvider>
          <AppRoutes />
          <GlobalStyle />
        </CartProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default AppRoot;
