

import React, { useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';


export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  const [authError, setAuthError] = useState(null);

  const login = async (email, password) => {
    try {
      const res = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
           'x-api-key':'reqres_618bdfe182e643f78dd2353a200ef5de'
         },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error);
      setUserToken(data.token);
    } catch (err) {
      setAuthError(err.message);
    }
  };

  const logout = () => setUserToken(null);

  return (
    <AuthContext.Provider value={{ userToken, login, logout, authError }}>
      {children}
    </AuthContext.Provider>
  );
};
