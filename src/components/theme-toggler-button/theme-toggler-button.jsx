import { ThemeContex, themes } from "../../contexts/themes-toggler/themes-context"
import { useContext } from "react"
import { Button } from "../button/button";

export const ThemeTogglerButton = () => {
    const { theme, setTheme } = useContext(ThemeContex);

    return (
        <Button onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}>
            {theme === themes.light ? '🌕' : '🌑'}
        </Button >
    )
}