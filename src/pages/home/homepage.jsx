import { ThemeTogglerButton } from '../../components/theme-toggler-button/theme-toggler-button.jsx'
import { pokeDataContext } from '../../contexts/pokeDataContext/pokeDataContext.jsx';
import { ThemeContex } from "../../contexts/themes-toggler/themes-context.jsx";
import { HomeStyle, HeaderStyle, SearchInput } from './homepage-style.jsx'
import { PokeCard } from "../../components/pokecard/pokecard"
import { Button } from '../../components/button/button';
import { useContext, useState } from "react";

export function HomePage() {
  const FilterPokeCard = (event) => setSearchInputValue(event.target.value);
  const [searchInputValue, setSearchInputValue] = useState('');
  const { addPokemonToList } = useContext(pokeDataContext);
  const { theme } = useContext(ThemeContex);

  return (
    <HomeStyle theme={theme}>
      <HeaderStyle theme={theme}>
        <SearchInput
          theme={theme}
          placeholder="🔎 Pokemon search"
          onChange={FilterPokeCard}
          value={searchInputValue} />
        <ThemeTogglerButton />
      </HeaderStyle>
      <PokeCard inputValue={searchInputValue} />
      <Button onClick={addPokemonToList}>Carregar mais</Button>
    </HomeStyle>
  )
}