import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useContext } from 'react'
import { ThemeContext } from '../../../context/themeContext'

export const Cards = (props) => {
    const pokemons = props.pokemons
    const limit = props.limit
    const { theme } = useContext(ThemeContext)

    return (
        pokemons.map((pokemon, index) => {

            if (index === limit) return null

            return (
                <Link
                    key={index}
                    to={{ pathname: `/Quest-React-Avancado/${pokemon.name}` }}
                    state={{ pokemon: pokemon }}
                    className={pokemon.types[1]}
                    style={{ height: '112px', transition: 'all 0.3s ease 0s' }}
                >
                    <PokeCard bgColor={theme.cardBackgroundColor}>
                        <SpritePokeCard>
                            <img className="sprite-pokemon" src={pokemon.sprites.spriteAnimatedUrl} alt={pokemon.name} />
                        </SpritePokeCard>
                        <InfoPokeCard>
                            <Name color={theme.text.main.color} shadow={theme.text.main.shadow}>{pokemon.name}</Name>
                            <Details>
                                <IconTypes>
                                    <IconType>
                                        <Img src={`/Quest-React-Avancado/types-icon/${pokemon.types[1]}.png`} alt={pokemon.types[1]}></Img>
                                    </IconType>
                                    <IconType>
                                        {pokemon.types[2] !== "" && (
                                            <Img src={`/Quest-React-Avancado/types-icon/${pokemon.types[2]}.png`} alt={pokemon.types[2]} />
                                        )}
                                    </IconType>
                                </IconTypes>
                                <PokeIdPokemon color={theme.text.main.color} shadow={theme.text.main.shadow}>#{pokemon.id}</PokeIdPokemon>
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
    background-color: ${props => props.bgColor};
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
    .sprite-pokemon{
        max-width: 100%;
    }
`;
const InfoPokeCard = styled.div`
    padding: 9px 8px 9px 0;
    display: flex;
    flex-direction: column;
`;
const Name = styled.p`
    color: ${props => props.color};
    font-size: 30px;
    text-shadow: ${props => props.shadow};
    min-width: 120px;
    font-weight: 500;
    margin-bottom: 7px;
    text-transform: capitalize;
    letter-spacing: 1px;
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
    align-self: flex-end;
    font-family: 'Open Sans', Arial, sans-serif;
    color: ${props => props.color};
    font-size: 20px;
    text-shadow: ${props => props.shadow};
    letter-spacing: 2px
`;