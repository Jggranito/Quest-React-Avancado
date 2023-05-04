import { Link, useLocation } from "react-router-dom"
import styled from "styled-components"
import { getInfo } from "../../objects/info";
import { useEffect, useState } from "react";
import './types.css'
import { InfoContainer } from "./info-components/container";
import { PokeCard } from "./info-components/pokecard"
import { BgImage, Container, PokedexContainer, Border } from "../pokedex";

export const MoreInfo = () => {
    const { state: { pokemon } } = useLocation();
    const [info, setInfo] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            const infoData = await getInfo(pokemon.name)
            setInfo(infoData)
        }
        fetchData();
        setTimeout(() => {
            setIsLoading(false);
        }, 1200);
    }, [pokemon.name])

    return (
        <BgImage>
            <Menu>
                <MainText className="menu-text">POKéMON INFO</MainText>
                <Link className="menu-back-btn" to="/Quest-React-Avancado">
                    <SubText className="menu-sub-text">Go Back</SubText>
                </Link>
            </Menu>
            <Container>
                <PokedexContainer>
                    <Border className="more-info">
                        {isLoading ?
                            <LoadingContainer>
                                <MainText>Loading...</MainText>
                                <AnimatedLoading src="/Quest-React-Avancado/images/pokeball-pokemon.gif" alt="Animation of a spinning pokeball" />
                            </LoadingContainer>
                            :
                            <>
                                <PokeCard/>
                                <InfoContainer info={info}/>
                            </>
                        }
                    </Border>
                </PokedexContainer>
            </Container>
        </BgImage >
    )
}

const Menu = styled.nav`
    width: 100%;
    height: 65px;
    background: url("/Quest-React-Avancado/images/menu.png") repeat-x ;
    display: flex;
    justify-content: space-between;
    padding: 0 2%;
    align-items: center;

    .menu-text{
        font-size: 53px;
    }

    .menu-back-btn{
        background-color: #f8f8f8;
        border-radius: 30px;
        padding: 3px 10px;
        transition: 0.3s ease;
    }

    .menu-sub-text {
        font-size: 32px;
        line-height: 32px;
        transition: 0.3s ease;
    }

    .menu-back-btn:hover{
        background-color: #242C35;
    }
    .menu-sub-text:hover{
        color: #f8f8f8;
    }
`

const MainText = styled.p`
@font-face {
        font-family: 'Open Sans';
        src: url('/Quest-React-Avancado/font/pokemon-dp-pro.ttf') format('truetype');
    }
    font-family: 'Open Sans', Arial, sans-serif;
    color: #f8f8f8;
    font-size: 40px;
    text-shadow: 2px 2px 2px #32363B;
    line-height: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 40px;
`
const SubText = styled.p`
@font-face {
        font-family: 'Open Sans';
        src: url('/Quest-React-Avancado/font/pokemon-dp-pro.ttf') format('truetype');
    }
    font-family: 'Open Sans', Arial, sans-serif;
    color: #252A30;
    text-transform: uppercase;
    font-size: 40px;
    text-shadow: 1px 1px 4px #32363B;
    line-height: 50px;
`

const LoadingContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 50px;
`

const AnimatedLoading = styled.img`
    width: 400px;
    height: 100px;
    transform: scaleX(-1);
    @media (max-width: 480px) {
        width: 300px;
        height: 75px;
    }
`