import styled from "styled-components"
import { useLocation } from "react-router-dom"
import { MainText, SubText } from "../../../global/text";

export const PokeCard = () => {
    const { state: { pokemon } } = useLocation();
    return (
        <PokeCardContainer>
            <CardNameContainer>
                <CardName>
                    <img className="pokeball-img" src='/Quest-React-Avancado/images/pokeball.png' alt='pokeball' />
                    <MainText ClassName='name' FontSize='50px'>{pokemon.name}</MainText>
                </CardName>
                <CardSubTextContainer>
                    <SubText ClassName='lv' FontSize='45px'>Lv.9</SubText>
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
const PokeCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;
    height: 100px;
    align-items: center;
    gap: 20px;
    @media (max-width: 767px) {
        width: 100%;
        gap: 25px;
    }
    @media (min-width: 768px) and (max-width: 991px){
        width: 40%;
    }
`
const CardNameContainer = styled.div`
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
    border-radius: 20px;
    .pokeball-img{
        width: 13%;
        margin: -2% 0 0 1%;
    }
    .name{
        margin: 0 0 5px 8px;
        @media (max-width: 991px) {
            font-size: 50px;
        }
    }
    @media (max-width: 767px) {
        height: 75%;
    }
    @media (min-width: 768px) and (max-width: 991px){
        width: 85%;
        height: 75%;
    }
`
const CardName = styled.div`
    width: 23.75rem;
    background-color: #FFCF51;
    height: 3.125rem;
    border-radius: 20px 20px 0 0;
    display: flex;
    align-items: center;
    padding: 10px 0 0 10px;
    gap: 5px;
    text-transform: uppercase;

    @media (max-width: 767px) {
        width: 100%;
    }
    @media (min-width: 768px) and (max-width: 991px){
        width: 100%;
        height: 50%;
        padding: 5px 0 0 10px;
        .name{
            line-height: 45px;
            font-size: 40px;
        }
    }
`
const CardSubTextContainer = styled.div`
    background-color: #ffffff;
    height: 40px;
    border-radius: 0 0 20px 20px;
    padding: 0 0 0 20px;
    @media (max-width: 767px) {
        .lv{
            padding-top: 2%;
            font-size: 40px;
        }
    }
    @media (min-width: 768px) and (max-width: 991px){
        height: 50%;
        .lv{
            line-height: 38px;
            font-size: 40px;
        }
    }
`
const CardImageContainer = styled.div`
    position: relative;
    width: 17.5rem;
    height: 17.5rem;
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
    @media (max-width: 767px) {
        top: -5%;
        left: 12%;
        width: 80%;
        height: 80%;
    }
    @media (min-width: 768px) and (max-width: 991px){
        top: -4%;
        left: 20%;
        width: 60%;
        height: 60%;
    }
`
const CardImageSprite = styled.img`
    width: 300px;
    z-index: 0;
    transform: scaleX(-1);
    @media (max-width: 767px) {
        position: absolute;
        top: -4%;
        left: 15%;
        width: 75%;
    }
    @media (min-width: 768px) and (max-width: 991px){
        position: absolute;
        top: -8%;
        width: 70%;
    }
`