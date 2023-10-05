import { createContext, useContext, useEffect, useState } from "react"
import { Firestore } from './handlers/firestore.js';

export const AppContext = createContext();



const navRoutes = [
    {
        path: '/',
        page: 'Home'
    },
    {
        path: '/faq',
        page: 'FAQ'
    },
    {
        path: '/contact',
        page: 'Contact'
    }
]

export const AppProvider = ({ children }) => {
    const [productData, setProductData] = useState([])
    const [productLoading, setProductLoading] = useState(true);

    const [carouselData, setCarouselData] = useState([])
    const [carouselLoading, setCarouselLoading] = useState(true);

    useEffect(() => {
        Firestore.readDocs('Products')
            .then((data) => {
                setProductData(data)
                setProductLoading(false)
            }).catch(error => {
                console.error('Error fetching Firestore data:', error);
                setProductLoading(false);
            });
        Firestore.readDocs('carousel')
            .then((data) => {
                setCarouselData(data)
                setCarouselLoading(false)
            }).catch(error => {
                console.error('Error fetching Firestore data:', error);
                setCarouselLoading(false);
            });
    }, [])

    return (
        <AppContext.Provider value={{navRoutes, productData, productLoading, carouselData, carouselLoading}}>
            {children}
        </AppContext.Provider>
    );
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}