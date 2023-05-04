import styled from "styled-components"
import { useLocation } from "react-router-dom"


export const PokeCard = () => {
    const { state: { pokemon } } = useLocation();
    return (
        <PokeCardContainer>
            <CardNameContainer>
                <CardName>
                    <img src='/Quest-React-Avancado/images/pokeball.png' alt='pokeball' width={'40px'} />
                    <Text className="text">{pokemon.name}</Text>
                </CardName>
                <CardSubTextContainer>
                    <SubText className="text-level">Lv.9</SubText>
                </CardSubTextContainer>
            </CardNameContainer>
            <div>
                <CardImageContainer>
                    <CardBgImage />
                    <CardImageSprite src={pokemon.sprites.simpleSprite} alt={`image of pokemon ${pokemon.name}`} />
                </CardImageContainer>
            </div>
        </PokeCardContainer>
    )
}

const Text = styled.p`
    @font-face {
        font-family: 'Open Sans';
        src: url('/Quest-React-Avancado/font/pokemon-dp-pro.ttf') format('truetype');
    }
    font-family: 'Open Sans', Arial, sans-serif;
    color: #f8f8f8;
    font-size: 40px;
    text-shadow: 2px 2px 2px #32363B;
`
const SubText = styled.p`
    @font-face {
        font-family: 'Open Sans';
        src: url('/Quest-React-Avancado/font/pokemon-dp-pro.ttf') format('truetype');
    }
    font-family: 'Open Sans', Arial, sans-serif;
    color: #242C35;
    font-size: 40px;
    text-shadow: 1px 1px 4px #32363B;
    line-height: 42px;
`

const PokeCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;
    height: 100px;
    align-items: center;
    gap: 20px;
`

const CardNameContainer = styled.div`
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
    border-radius: 20px;
    @media (max-width: 480px) {
        margin-left: 4%;
        width: 90%;
    }
`
const CardName = styled.div`
    width: 380px;
    background-color: #FFCF51;
    height: 50px;
    border-radius: 20px 20px 0 0;
    display: flex;
    align-items: center;
    padding: 10px 0 0 10px;
    gap: 5px;
    text-transform: uppercase;

    .text {
        margin: 0 0 5px 8px;
    }
    @media (max-width: 480px) {
        width: 100%;
    }
`

const CardSubTextContainer = styled.div`
    background-color: #ffffff;
    height: 40px;
    border-radius: 0 0 20px 20px;
    padding: 0 0 0 20px;

    .text-level {
        text-shadow: 1px 1px 1px #0B161A;
        font-size: 40px;
        color: #252A30;
    }
`
const CardImageContainer = styled.div`
    position: relative;
    width: 280px;
    height: 280px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const CardBgImage = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(https://pokedex-nu-ten.vercel.app/images/pokeball-card-background.png) center;
    background-position: center;
    background-size: cover;
    z-index: -1;
    @media (max-width: 480px) {
        top: -5%;
        left: 12%;
        width: 80%;
        height: 80%;
    }
`

const CardImageSprite = styled.img`
    width: 200px;
    z-index: 0;
    transform: scaleX(-1);
    @media (max-width: 480px) {
        position: absolute;
        top: -2%;
        left: 17%;
        width: 70%;
    }
`