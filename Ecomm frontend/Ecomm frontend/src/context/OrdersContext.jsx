import React, { createContext, useContext, useReducer } from 'react';


const OrdersContext = createContext();


const ordersReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ORDER':
      return [...state, action.order];
    default:
      return state;
  }
};


export const OrdersProvider = ({ children }) => {
  const [orders, dispatch] = useReducer(ordersReducer, []);

  const addOrder = (order) => {
    dispatch({ type: 'ADD_ORDER', order });
  };

  return (
    <OrdersContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrdersContext.Provider>
  );
};


export const useOrders = () => {
  const context = useContext(OrdersContext);
  if (context === undefined) {
    throw new Error('useOrders must be used within an OrdersProvider');
  }
  return context;
};
