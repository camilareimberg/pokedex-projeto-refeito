import { ChakraProvider } from "@chakra-ui/react";
import GlobalState from "./Global/GlobalState";
import Router from "./Router/Router"
import { ModalPokemon } from "./Components/modal/modal";

export default function App() {

  return (
    <GlobalState>
      <ChakraProvider>
<ModalPokemon/>
        <Router />
      </ChakraProvider>
      {/* {
        page===0 ? (
        <PokemonListPage />
         ) :
        page===1 ? (
        <PokedexPage />
        ) : (
         <PokemonDetailPage />
        )} */}

    </GlobalState>
  );
}
