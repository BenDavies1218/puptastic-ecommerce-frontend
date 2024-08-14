import React, { createContext, useReducer, useContext } from "react";

// Create a context for the cart
const CartContext = createContext();

// Define action types
const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";

// Define the initial state for the cart
const initialState = {
  items: [], // Array of cart items
};

// Define a reducer function to handle cart actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      // Check if the item already exists in the cart
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItemIndex >= 0) {
        // Update quantity if item already exists
        const updatedItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
        return { ...state, items: updatedItems };
      }
      // Add new item to the cart
      return { ...state, items: [...state.items, action.payload] };
    case REMOVE_ITEM:
      // Remove item from the cart
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};

// Create a provider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = (item) => {
    dispatch({ type: ADD_ITEM, payload: item });
  };

  const removeItem = (item) => {
    dispatch({ type: REMOVE_ITEM, payload: item });
  };

  return (
    <CartContext.Provider value={{ state, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
