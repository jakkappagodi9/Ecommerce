import React, { useContext, useState } from 'react';
import AuthContext from './authContext';
import ContextProvider from './ContextProvider';

export default function AuthContextProvider({ children }) {
  const initialToken = localStorage.getItem('tokenId');
  const localEmailstorage = localStorage.getItem('emailId');
  const [tokenId, setTokenId] = useState(initialToken);
  const [email, setemail] = useState(localEmailstorage);
  const ctx = useContext(ContextProvider);

  const isLoggedIn = !!tokenId;
  const loginHandler = (tokenId, email) => {
    localStorage.setItem('tokenId', tokenId); //{key : item}
    localStorage.setItem('emailId', email); //{key : item}
    setTokenId(tokenId);
    setemail(email);
  };
  const logoutHandler = () => {
    console.log('logout');
    localStorage.removeItem('tokenId');
    localStorage.removeItem('emailId');
    setTokenId(null);
    setemail(null);
    ctx.setcartListContext([]);
  };

  const contextValue = {
    tokenID: tokenId,
    isLoggedIn: isLoggedIn,
    Login: loginHandler,
    Logout: logoutHandler,
    email: email,
  };

  return (
    <>
      <AuthContext.Provider value={contextValue}>
        {children}
      </AuthContext.Provider>
    </>
  );
}
