import { createContext, useContext } from "react"

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
    return (
        <AppContext.Provider value={{navRoutes}}>
            {children}
        </AppContext.Provider>
    );
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}