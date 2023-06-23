import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import styled from "styled-components"

import { getInfo } from "../../objects/info";
import { MainBackground } from "../../global/mainBackground";
import { MainText } from "../../global/text";
import './types.css'
import { InfoContainer } from "./info-components/container";
import { PokeCard } from "./info-components/pokecard"


export const MoreInfo = () => {
    const { state: { pokemon } } = useLocation();
    const [info, setInfo] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            const infoData = await getInfo(pokemon.name)
            setInfo(infoData)
            if(infoData) setIsLoading(false)
        }
        fetchData();
    }, [pokemon.name])

    return (
        <MainBackground isHome={false}>
            {isLoading ?
                <LoadingContainer>
                    <MainText FontSize='40px'>Loading...</MainText>
                    <AnimatedLoading src="/Quest-React-Avancado/images/pokeball-pokemon.gif" alt="Animation of a spinning pokeball" />
                </LoadingContainer>
                :
                <Info>
                    <PokeCard />
                    <InfoContainer info={info} />
                </Info>
            }
        </MainBackground >
    )
}
const Info = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    gap: 10%;
    @media (max-width: 767px) {
        gap: 0;
        align-items: start;
        flex-direction: column;
        height: 94%;
        justify-content: space-between;
    }
    @media (min-width: 768px) and (max-width: 991px){
        gap: 6%;
    }
`
const LoadingContainer = styled.div`
    width: 100%;
    height: 100%;
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
    @media (max-width: 767px) {
        width: 300px;
        height: 75px;
    }
`