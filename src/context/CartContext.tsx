// context/CartContext.tsx
import React, { createContext, useState, useContext } from 'react';
import { CartProduct } from '../types/cartProduct';
import { ProductType } from '../types/product';

interface CartContextData {
  cart: CartProduct[];
  addItem: (item: ProductType) => void;
  removeQuantity: (item: CartProduct) => void;
  removeItem: (itemId: number) => void;
  clearCart: () => void;
  totalItems: number;
}

const CartContext = createContext<CartContextData>({
  cart: [],
  totalItems: 0,
  addItem: () => {},
  removeQuantity: () => {},
  removeItem: () => {},
  clearCart: () => {},
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartProduct[]>([]);
  const [totalItems, setTotalItems] = useState(0);

  const addItem = (item: ProductType) => {
    const existingProduct = cart.find((product) => product.id === item.id);
    if (existingProduct) {
      const updatedCart = cart.map((p) => {
        if (p.id === existingProduct.id) {
          return {
            ...p,
            quantity: p.quantity + 1,
          };
        }
        return p;
      });
      setCart(updatedCart);
      setTotalItems(totalItems + 1);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
      setTotalItems(totalItems + 1);
    }
  };

  const removeQuantity = (item: CartProduct) => {
    const existingProduct = cart.find((product) => product.id === item.id);
    if (existingProduct && existingProduct.quantity > 1) {
      const updatedCart = cart.map((p) =>
        p.id === item.id ? { ...p, quantity: p.quantity - 1 } : p
      );
      setCart(updatedCart);
    } else {
      const updatedCart = cart.filter((p) => p.id !== item.id);
      setCart(updatedCart);
    }
  };

  const removeItem = (itemId: number) => {
    const removedProduct = cart.find((p) => p.id === itemId);
    const updatedCart = cart.filter((p) => p.id !== itemId);
    setCart(updatedCart);
    if (removedProduct) {
      setTotalItems(totalItems - removedProduct.quantity);
    }
  };

  const clearCart = () => {
    setCart([]);
    setTotalItems(0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeQuantity,
        removeItem,
        clearCart,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
