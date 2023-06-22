import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Pokemon } from './pokemon';
import { PokedexList } from './pokedex';

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/Quest-React-Avancado' element={<PokedexList />} />
                <Route path='/Quest-React-Avancado/:name' element={<Pokemon />} />
            </Routes>
        </BrowserRouter>
    )
}