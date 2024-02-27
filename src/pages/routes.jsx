import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import { HomePage } from "./home/homepage";
import { PokemonsDetailsPage } from "./pokemonsDetails";
const router = createBrowserRouter([{ path: "*", Component: Root }]);

export function RootRouter() { return <RouterProvider router={router} /> }
function Root() {
    return (
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/pokemonDetails/:id" element={<PokemonsDetailsPage />} />
        </Routes>
    )
}