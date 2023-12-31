import { createContext, useContext, useEffect, useState } from "react";
import { Firestore } from "./handlers/firestore.js";
import { products } from "./data.js";

export const AppContext = createContext();

const navRoutes = [
  {
    path: "/",
    page: "Home",
  },
];

export const AppProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);
  const [productLoading, setProductLoading] = useState(true);

  const [carouselData, setCarouselData] = useState([]);
  const [carouselLoading, setCarouselLoading] = useState(true);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    Firestore.readDocs("carousel")
      .then((data) => {
        setCarouselData(data);
        setCarouselLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Firestore data:", error);
        setCarouselLoading(false);
      });
  }, []);

  return (
    <AppContext.Provider
      value={{
        navRoutes,
        products,
        productLoading,
        carouselData,
        setCarouselData,
        carouselLoading,
        cart,
        setCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
