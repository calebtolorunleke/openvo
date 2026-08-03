import { createContext, useContext, useState } from "react";
import { products } from "../data/products";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); //{id:2, quantity:7}

  const addToCart = (productId) => {
    const existing = cartItems.find((item) => item.id === products.id);

    if (existing) {
      const currentQuantity = existing.quantity;
      const updatedCartItems = cartItems.map((item) =>
        item.id === productId
          ? { id: productId, quatity: currentQuantity + 1 }
          : item,
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { id: productId, quantity: 1 }]);
    }
  };

  return (
    <AuthContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  return context;
};
