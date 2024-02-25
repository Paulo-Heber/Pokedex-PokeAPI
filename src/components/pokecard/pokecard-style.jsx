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
background-color: ${({theme}) => (theme.detailsCard)};
    color:${({theme}) => theme.color};
    transition: 0.25s ease-in-out;
    text-transform: capitalize;
    border-radius: 10px;
    align-items: center;
    max-height: 230px;
    font-size: 20px;
    display: flex;
    width: 240px;
    
    &:hover{
        box-shadow: 0px 0px 5px #91d8d4;
        background-color: #96d9d6;
        scale: 1.15;
    }
`

export { ConteinerStyle, PokeCardStyle }