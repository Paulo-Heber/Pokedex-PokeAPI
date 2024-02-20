import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./home/homepage";
import { PokemonsDetailsPage } from "./pokemonsDetails";

export const AppRoutes = () => (
    <BrowserRouter >
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/pokemonDetails/:id" element={<PokemonsDetailsPage />} />
        </Routes>
    </BrowserRouter>
)                   