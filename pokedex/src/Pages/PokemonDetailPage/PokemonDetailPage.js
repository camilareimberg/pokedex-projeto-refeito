import { useEffect, useState } from "react";
import { getPokemonByName } from "../../API/requests";
import { useParams } from "react-router-dom";
import { DivProgress, ImagesContainer, ImgWrapper, MainDetailContainer, MovesContainer, PStatsName, PStatsNumber, PokeBallImg, PokeImg, PokeInfosContainer, ProgressBar, ProgressContainer, StatsContainer, TitleContainer, TypeAndMoveContainer, TypeContainer, TypeImg } from "./styled";
import { returnBackgroundColorCard } from "../../utils/returnBackgroundColorCard";
import { returnTypes } from "../../utils/returnTypes";
import pokeball from "../../assets/pokeball.png";


const PokemonDetailPage = () => {
    const [pokemon, setPokemon] = useState({})
    const { nome } = useParams();

    let pokemonType;
    let pokemonId;
    let pokemonName;

    if ("types" in pokemon) {
        pokemonType = returnBackgroundColorCard(pokemon.types[0].type.name);
        pokemonId = pokemon.id.toString().length === 1
            ? `0${pokemon.id}`
            : pokemon.id;
        pokemonName = pokemon.name[0].toUpperCase() + pokemon.name.substring(1);
    }

    useEffect(() => {
        getPokemonByName(nome, setPokemon);
    }, []);

    const changeFirstLetter = (name) => {
        return name[0].toUpperCase() + name.substring(1);
    }

    return (
        <MainDetailContainer>
            <PokeInfosContainer colorType={pokemonType}>
                <ImagesContainer>
                    <ImgWrapper src={pokemon.sprites?.front_default} />
                    <ImgWrapper src={pokemon.sprites?.back_default} />
                </ImagesContainer>
                <StatsContainer>
                    <TitleContainer>Base stats</TitleContainer>
                    <ProgressContainer>


                        {pokemon.stats?.map((poke, index) => {
                            return (
                                <section>
                                    <PStatsName key={index}><strong>{poke.stat.name}</strong>:
                                    </PStatsName>
                                    <PStatsNumber>{poke.base_stat}</PStatsNumber>
                                    <DivProgress>
                                      <ProgressBar widthBar={poke.base_stat}>

                                    </ProgressBar>   
                                    </DivProgress>
                                   
                                </section>
                            )
                        })}
                    </ProgressContainer>
                </StatsContainer>
                <PokeBallImg src={pokeball} />
                <PokeImg src={pokemon.sprites?.other["official-artwork"].front_default} alt={`Imagem do pokemon ${pokemon?.name}`} />

                <TypeAndMoveContainer>
                    <TypeContainer>
                        <p>
                            #{pokemonId}
                        </p>
                        <h1>{pokemonName}</h1>
                        <div>
                            {pokemon.types?.map((poke, index) => {
                                return <TypeImg key={index} src={returnTypes(poke.type.name)} />
                            })}
                        </div>


                    </TypeContainer>

                    <MovesContainer>
                        <TitleContainer>Moves</TitleContainer>
                        {
                            pokemon.moves?.map((poke, index) => {
                                return index < 5 && <p key={index}>{poke.move.name}</p>

                            })
                        }
                    </MovesContainer>
                </TypeAndMoveContainer>
            </PokeInfosContainer>
        </MainDetailContainer>


    )

};

export default PokemonDetailPage;