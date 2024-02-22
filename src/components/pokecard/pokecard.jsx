import { pokeDataContext } from '../../contexts/pokeDataContext/pokeDataContext';
import { ThemeContex } from '../../contexts/themes-toggler/themes-context';
import { ConteinerStyle, PokeCardStyle } from './pokecard-style';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

export function PokeCard({ inputValue }) {
    const { PokeData } = useContext(pokeDataContext);
    const { theme } = useContext(ThemeContex);
    
    const pokemons = PokeData.filter((data) => (
        inputValue === '' ||
        data.types.some(({type}) => type.name.toLowerCase().includes(inputValue.toLowerCase()))))

    return (
        <ConteinerStyle>
            {pokemons.length > 0 ? (pokemons.map(({ id, sprites, name }, index) => (
                <Link key={index} to={`/pokemonDetails/${id}`}>
                    <PokeCardStyle theme={theme}>
                        <img src={sprites.front_default} />
                        <p>{name}</p>
                        <p>{`#${id}`}</p>
                    </PokeCardStyle>
                </Link>
            ))) : (<h2>Não possuem pokemons visíveis. Por favor, carregue mais ou mude o tipo inserido!</h2>)
            }
        </ConteinerStyle>
    )
}