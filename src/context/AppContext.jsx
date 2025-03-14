import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
    const [facilities, setFacilities] = useState([]);

    return (
        <AppContext.Provider value={{ facilities, setFacilities }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);
