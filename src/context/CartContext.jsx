import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Cart items stored as an array of product objects with quantity
  const [cartItems, setCartItems] = useState(() => {
    // Initialize from localStorage for persistence
    try {
      const stored = localStorage.getItem("cartItems");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    // Save cart to localStorage on changes
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add product to cart (if exists, increment qty)
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const exist = prevItems.find((item) => item.item_id === product.item_id);
      if (exist) {
        // Increase quantity if product already in cart
        return prevItems.map((item) =>
          item.item_id === product.item_id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add new product with quantity 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove product completely from cart
  const removeFromCart = (item_id) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.item_id !== item_id)
    );
  };

  // Update quantity of a product in cart
  const updateQuantity = (item_id, quantity) => {
    if (quantity < 1) return; // Prevent quantity below 1
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.item_id === item_id ? { ...item, quantity } : item
      )
    );
  };

  // Get total price of all items in cart
  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // Clear cart (optional utility)
  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        getTotalPrice,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook for easy usage
export const useCart = () => useContext(CartContext);
