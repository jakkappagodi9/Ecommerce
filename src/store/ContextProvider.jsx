import { createContext, useState } from 'react';

export const CartContext = createContext([]);

const ContextProvider = ({ children }) => {
  const [cartListContext, setcartListContext] = useState([]);
  return (
    <CartContext.Provider value={{ cartListContext, setcartListContext }}>
      {children}
    </CartContext.Provider>
  );
};
export default ContextProvider;
