import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import Cart from './pages/Cart';
import Checkout from './pages/CheckoutPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='*' element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}
