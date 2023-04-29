import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Pokemon } from './pokemon'
import { PokedexList } from './pokedex'

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<PokedexList />} />
                <Route path='/more-info/:name' element={<Pokemon />} />
            </Routes>
        </BrowserRouter>
    )
}