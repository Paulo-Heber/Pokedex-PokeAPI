import { pokeDataContext } from "../../contexts/pokeDataContext/pokeDataContext";
import { ThemeContex } from "../../contexts/themes-toggler/themes-context";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { PokemonIdentification, PokemonsDetails, BasicDetails, PokemonImage, PokemonName, Conteiner, Abilities, Details, Types, Moves } from './pokemon-details-page-style'

export function PokemonsDetailsPage() {
    const { PokeData } = useContext(pokeDataContext);
    const { theme } = useContext(ThemeContex);
    const { id } = useParams();
    const selectedPokemon = PokeData.find(pokemon => pokemon.id === Number(id));
    const [abilityDetails, setAbilityDetails] = useState([]);

    useEffect(() => {
        async function fetchAbilityDetails() {
            const promises = selectedPokemon.abilities.map(async ({ ability }) => {
                const response = await fetch(ability.url)
                const data = await response.json();
                return (data);
            })
            const abilitiesDetails = await Promise.all(promises);
            setAbilityDetails(abilitiesDetails);
        }
        selectedPokemon?.abilities ? fetchAbilityDetails() : null
    }, [selectedPokemon]);

    return (
        selectedPokemon ? (< Link to={'/'}>
            <Conteiner style={{ color: theme.color, background: theme.background }}>
                <PokemonsDetails theme={theme}>
                    <BasicDetails>
                        <PokemonImage src={selectedPokemon?.sprites.front_default}></PokemonImage>
                        <PokemonIdentification>
                            <PokemonName>{selectedPokemon?.name}</PokemonName>
                            <ul>
                                {selectedPokemon?.types.map(({ type }, index) => (
                                    <Types key={index} type={type.name}>{type.name}</Types>
                                ))}
                            </ul>
                        </PokemonIdentification>
                    </BasicDetails>
                    <Details>
                        <Moves>
                            <h3>Movimentos</h3>
                            <ul>
                                {selectedPokemon?.moves.map(({ move }, index) => (
                                    <li key={index} >{move.name}</li>
                                ))}
                            </ul>
                        </Moves>
                        <Abilities>
                            <h3>Habilidades</h3>
                            <ul>
                                {abilityDetails.map((ability, index) => (
                                    <li key={index} >
                                        <h4>{ability.name}</h4>
                                        <p>{ability.effect_entries[0]?.effect}</p>
                                    </li>
                                ))}
                            </ul>
                        </Abilities>
                    </Details>
                </PokemonsDetails>
            </Conteiner>
        </Link >) : null
    )
}