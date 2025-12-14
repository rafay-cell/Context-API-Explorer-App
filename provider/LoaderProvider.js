
import React, {  useState } from 'react';
import { LoaderContext } from '../contexts/LoaderContext';


export const LoaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoaderContext.Provider>
  );
};
