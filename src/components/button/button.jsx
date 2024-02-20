import { ThemeContex } from "../../contexts/themes-toggler/themes-context"
import { HomeButton } from "./button-style"
import { useContext } from "react"

export const Button = (props) => {
    const { theme } = useContext(ThemeContex)
    return <HomeButton {...props} theme={theme} />
}