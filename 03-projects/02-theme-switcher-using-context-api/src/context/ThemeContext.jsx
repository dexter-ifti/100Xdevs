import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react'

//  STEP 1 - CREATE CONTEXT
export const ThemeContext = createContext();

export function ThemeProvider({children}) {

    const getinitialTheme = () => {
        const savedTheme = localStorage.getItem("theme");
        if(savedTheme) return savedTheme;
        const systemDark = window.matchMedia("(prefers-color-scheme: dark").matches;
        return systemDark ? "dark" : "light";
    };

    const [theme, setTheme] = useState(getinitialTheme);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);


    const toggleTheme = useCallback(() => {
        setTheme((prevTheme) => prevTheme === "light" ? "dark" : "light"
        );
    }, [])

    const value = useMemo(() => ({
        theme, 
        toggleTheme
    }), [theme])

    return (
        // STEP 2 - pROVIDE THE pROVIDER
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}
