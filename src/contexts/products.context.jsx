import { createContext, useState, useEffect } from "react";
import PRODUCTS from "../shop-data.json";

// actual value you want to access
export const ProductsContext = createContext({
  currentProducts: [],
  // setCurrentProducts: () => null,
});

// component
export const ProductsProvider = ({ children }) => {
  const [currentProducts, setCurrentProducts] = useState(PRODUCTS);
  const value = { currentProducts, setCurrentProducts };

  // signOutUser();

  // useEffect(() => {
  //   setCurrentProducts();
  // }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
