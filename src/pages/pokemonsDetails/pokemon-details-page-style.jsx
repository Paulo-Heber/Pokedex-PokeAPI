import { themes } from "../../contexts/themes-toggler/themes-context"
import styled from "styled-components"

const Conteiner = styled.div`
    display:flex;
    flex-direction: column;
    padding-top:30px;
    align-items: center;
    min-height:100vh;
    font-size:15px
`

const PokemonsDetails = styled.div`
flex-direction: column;
align-items: center;
border:solid 0.5px;
border-radius:15px;
max-height: 600px;
display:flex;
padding:0 20px;
color:${(props) => props.theme.color};
    background-color: ${({theme}) => (theme === themes.light ? '#d8e3ec' : '#a8a8a8')};
`

const BasicDetails = styled.div`
display:flex;
align-items: center

`

const PokemonIdentification = styled.div`
text-align:center;
`
const PokemonImage = styled.img`
    width: 200px;
`

const PokemonName = styled.h2`
    text-transform: capitalize;
`

const colorsofpokemonstypes = {
    grass: "#32cd32",
    poison: "#cd1acd",
    fire: "#ff8502",
    flying: "#7fffd4",
    water: "#0062ff",
    bug: "#a6b91a",
    normal: "#808080",
    electric: "#eed535",
    ground: "#ab9842",
    fairy: "#fdb9e9",
    fighting: "#D56723",
    psychic: "#F366B9",
    rock: "#A38C21",
    steel: "#9EB7B8",
    ice: "#51c4e7",
    ghost: "#7B62A3",
    dragon: "#F16E57",
    dark: "#707070"
}

const Types = styled.li`
background-color: ${(props) => colorsofpokemonstypes[props.type]};
border:solid 1px;
border-radius:10px;
padding:10px 20px;;
margin:5px;
`


const Details = styled.ul`
    display:flex;
    align-items:center;

    & > *{
        border-radius:10px;
        border: solid 1px;
        height: 250px;
        max-width:200px;
        margin: 15px;
        padding:20px
    }
`

const Moves = styled.li`
    overflow-y: scroll;
    width:200px;
    
`

const Abilities = styled.li`
overflow-y: scroll;
`

export {
    PokemonIdentification,
    PokemonsDetails,
    BasicDetails,
    PokemonImage,
    PokemonName,
    Conteiner,
    Abilities,
    Details,
    Types,
    Moves
}