import { themes } from '../../contexts/themes-toggler/themes-context';
import { styled } from 'styled-components';

const ConteinerStyle = styled.div`
    justify-content: center;
    margin-bottom: 20px;
    display:flex;
    height: 100% ;
    flex-wrap:wrap;
    max-width: 1000px;
    gap:20px
`

const PokeCardStyle = styled.div`
    color:${({theme}) => theme.color};
    background-color: ${({theme}) => (theme === themes.light ? '#d8e3ec' : '#a8a8a8')};
    display: flex;
   
    align-items: center;
    text-transform: capitalize;
    width: 240px;
    max-height: 230px;
    border-radius: 10px;
    font-size: 20px;
    transition: 0.25s ease-in-out;
    
    
    &:hover{
        scale: 1.15;
        background-color: #96d9d6;
        box-shadow: 0px 0px 5px #91d8d4;
    }
`

export { ConteinerStyle, PokeCardStyle }