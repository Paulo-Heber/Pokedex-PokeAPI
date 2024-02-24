import { createContext, useState } from "react";

export const themes = {

    light: {
        color: '#333333',
        background: '#5e5b5bad',
        detailsCard: '#d8e3ec',
        themeInputColor:'#d8e3ec',
        themeInputBackground:'#d8e3ec'
    },
    
    dark: {
        color: '#010001',
        background: '#191919',
        detailsCard: '#a8a8a8',
        themeInputColor:'#212121',
        themeInputBackground:'#191919'
    }
}

export const ThemeContex = createContext({})

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(themes.light)
    return (
        < ThemeContex.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContex.Provider>
    )

}
