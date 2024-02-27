import { PokeDataProvider } from './contexts/pokeDataContext/pokeDataContext.jsx';
import { ThemeProvider } from './contexts/themes-toggler/themes-context.jsx';
import { RootRouter } from './pages/routes.jsx';


export function App() {
  return (
    <PokeDataProvider>
      <ThemeProvider>
        <RootRouter />
      </ThemeProvider>
    </PokeDataProvider>
  );
}

