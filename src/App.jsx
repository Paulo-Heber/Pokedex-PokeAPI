import { PokeDataProvider } from './contexts/pokeDataContext/pokeDataContext.jsx';
import { ThemeProvider } from './contexts/themes-toggler/themes-context.jsx';
import { AppRoutes } from './pages/routes.jsx';

export function App() {
  return (
    <PokeDataProvider>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </PokeDataProvider>
  );
}

