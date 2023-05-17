import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Cards = (props) => {
    const pokemons = props.pokemons
    return (
        pokemons.map((pokemon, index) => {
            return (
                <Link
                    key={index}
                    to={{pathname: `/Quest-React-Avancado/more-info/${pokemon.name}`}}
                    state={{ pokemon: pokemon}}
                    className={pokemon.types[1]}
                    style={{ height: '112px', transition: 'all 0.3s ease 0s' }}
                >
                    <PokeCard>
                        <SpritePokeCard>
                            <img src={pokemon.sprites.spriteAnimatedUrl} alt={pokemon.name} />
                        </SpritePokeCard>
                        <InfoPokeCard>
                            <Name>{pokemon.name}</Name>
                            <Details>
                                <IconTypes>
                                    <IconType>
                                        <Img src={`./types-icon/${pokemon.types[1]}.png`} alt={pokemon.types[1]}></Img>
                                    </IconType>
                                    <IconType>
                                        {pokemon.types[2] !== "" && (
                                            <Img src={`./types-icon/${pokemon.types[2]}.png`} alt={pokemon.types[2]} />
                                        )}
                                    </IconType>
                                </IconTypes>
                                <PokeIdPokemon>#{pokemon.id}</PokeIdPokemon>
                            </Details>
                        </InfoPokeCard>
                    </PokeCard>
                </Link>
            )
        })
    )
}

const PokeCard = styled.li`
    display: flex;
    background-color: rgba(56, 56, 56, 0.3);
    border-radius: 200px 70px 70px 200px;
    gap: 10px;
`;

const SpritePokeCard = styled.div`
    width: 112px;
    height: 112px;
    background: url(https://pokedex-nu-ten.vercel.app/images/pokeball-card-background.png);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const InfoPokeCard = styled.div`
    padding: 9px 8px 9px 0;
    color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
`;

const Name = styled.p`
    width: 120px;
    font-weight: 600;
    margin-bottom: 7px;
    text-transform: capitalize;
`;

const Details = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    height: 100%;
`;

const IconTypes = styled.div`
    display: flex;
    align-self: end;
    gap: 7px;
`;

const IconType = styled.div`
    width: 26px;
    height: 26px;
    filter: drop-shadow(rgba(0, 0, 0, 0.25) 0px 0px 4px);
`;

const Img = styled.img`
    width: 100%;
`;

const PokeIdPokemon = styled.p`
    font-size: 14px;
    align-self: flex-end;
`;