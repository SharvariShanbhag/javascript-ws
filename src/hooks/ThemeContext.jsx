//Theme button

import { useState, createContext } from 'react';

export const ThemeContext = createContext(); // Creating context

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    function toggleTheme() {
        setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light');
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;


//create  -->   provide   -->   consume  