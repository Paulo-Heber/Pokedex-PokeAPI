import { themes } from "../../contexts/themes-toggler/themes-context"
import styled from "styled-components"

const HomeButton = styled.button`
    box-shadow:inset 0 1px 0 0 ${({ theme }) => theme === themes.light ? '#191919' : 'gray'};
        background-color:${({ theme }) => theme === themes.light ? '#d8e3ec' : '#191919'};
        border-color: ${({ theme }) => (theme.color)};
        color:${({ theme }) => (theme.color)};
        transition: 0.25s ease-in-out;
        text-transform:uppercase;
        border-radius:15px;
        padding: 12px 20px;
        margin-bottom:15px;
        border-style:solid;
        font-weight: bold;
        cursor:pointer;
        scale: 1.15;
        
        &:hover{
            scale: 1.3;
            background-color: #96d9d6;
            box-shadow: 0px 0px 5px #91d8d4;
        }
        `
export { HomeButton }