import React from 'react';

const AuthContext = React.createContext({
  tokenId: '',
  isLoggedIn: false,
  Login: (token) => {},
  Logout: () => {},
  email: '',
});
export default AuthContext;
