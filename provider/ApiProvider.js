


import React, {  useState } from 'react';
import { ApiContext } from '../contexts/ApiContext';

export const ApiProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [apiError, setApiError] = useState(null);

  const fetchProducts = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      if (!res.ok) throw new Error('Failed to load products');
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      setApiError(err.message);
    }
  };

  return (
    <ApiContext.Provider value={{ products, fetchProducts, apiError }}>
      {children}
    </ApiContext.Provider>
  );
};
