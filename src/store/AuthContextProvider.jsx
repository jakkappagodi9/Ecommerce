import React, { useState } from 'react';
import AuthContext from './authContext';

export default function AuthContextProvider({ children }) {
  const initialToken = localStorage.getItem('tokenId');
  const [tokenId, setTokenId] = useState(initialToken);

  const isLoggedIn = !!tokenId;

  const loginHandler = (tokenId) => {
    localStorage.setItem('tokenId', tokenId);
    setTokenId(tokenId);
  };
  const logoutHandler = () => {
    console.log('logout');
    setTokenId(null);
  };

  const contextValue = {
    tokenID: tokenId,
    isLoggedIn: isLoggedIn,
    Login: loginHandler,
    Logout: logoutHandler,
  };

  return (
    <>
      <AuthContext.Provider value={contextValue}>
        {children}
      </AuthContext.Provider>
    </>
  );
}
