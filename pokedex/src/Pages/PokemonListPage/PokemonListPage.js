import { useContext, useEffect, useState } from "react";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { PokemonListContainer, SectionPokemons, Title } from "./styled";
import { getAllPokemons } from "../../API/requests";
import { GlobalStateContext } from "../../Global/GlobalStateContext";

const PokemonListPage = () => {

    const [pokemons, setPokemons] = useState([]);
const {pokedex, setPokedex, addPokemon}= useContext(GlobalStateContext);
    useEffect(() => {
        getAllPokemons(setPokemons);
    }, []);

    const filteredPokemons = pokemons.filter((pokemon) => !pokedex.find((poke) => poke.name === pokemon.name))

    return (
        
        <PokemonListContainer>
            <Title>Todos Pokémons</Title>
            <SectionPokemons>
              {
                filteredPokemons.map((poke) => {
                    return <PokemonCard key={poke.id} poke={poke} addPokemon={addPokemon} />

                })
            }
    
            </SectionPokemons>
          
        </PokemonListContainer>

    )
};

export default PokemonListPage;