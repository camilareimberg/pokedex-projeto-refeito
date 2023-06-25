import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokedexPage from "../Pages/PokedexPage/PokedexPage";
import PokemonDetailPage from "../Pages/PokemonDetailPage/PokemonDetailPage";
import PokemonListPage from "../Pages/PokemonListPage/PokemonListPage";
import Header from "../Components/Header/Header";

const Router = () => {
  
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<PokemonListPage />} />
                <Route path='/pokedex' element={<PokedexPage/>} />
                <Route path='/detalhes/:nome' element={<PokemonDetailPage />} />
            </Routes>
        </BrowserRouter>
    );

};

export default Router;