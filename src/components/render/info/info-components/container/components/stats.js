import styled from "styled-components";
import { useState } from "react";

export const Stats = (props) => {
    const info = props.info;
    const display = props.display;
    const [abilityIndex, setAbilityIndex] = useState(0)

    const setIndex = (index) => {
        setAbilityIndex(abilityIndex + index)
    }

    return (
        <StatsContainer className="stats" display={display}>
            <TextContainer>
                <MainText className="hp">HP</MainText>
                <HPBarContainer className="bg-color">
                </HPBarContainer>
                <MainText>Attack</MainText>
                <MainText className="bg-color">Defence</MainText>
                <MainText>Sp. Atk</MainText>
                <MainText className="bg-color">Sp. Def</MainText>
                <MainText>Speed</MainText>
                <AbilityConteiner className="bg-color">
                    <MainText className="text">Ability</MainText>
                    <AbilityName>
                        {
                            info.abilities[abilityIndex - 1] ?
                                <ArrowContainer className="btn-area" onClick={() => setIndex(-1)}>
                                    <Arrow className="btn" src="/Quest-React-Avancado/images/buton-icons/arrow.png" />
                                </ArrowContainer>
                                :
                                <ArrowContainer>
                                    <Arrow className="disabled" src="/Quest-React-Avancado/images/buton-icons/arrow.png" />
                                </ArrowContainer>
                        }
                        <SubText>{info.abilities[abilityIndex].ability.name}</SubText>
                        {
                            info.abilities[abilityIndex + 1] ?
                                <ArrowContainer className="btn-area" onClick={() => setIndex(1)}>
                                    <Arrow className="btn" src="/Quest-React-Avancado/images/buton-icons/arrowR.png" />
                                </ArrowContainer>
                                :
                                <ArrowContainer>
                                    <Arrow className="disabled" src="/Quest-React-Avancado/images/buton-icons/arrowR.png" />
                                </ArrowContainer>
                        }
                    </AbilityName>
                </AbilityConteiner>
                <Description>
                    <SubText className="description">{info.abilities[abilityIndex].ability.description}</SubText>
                </Description>
            </TextContainer>
            <Container>
                <SubText className="stats-hp">{info.stats.hp - 3}/{info.stats.hp}</SubText>
                <HPBar src="/Quest-React-Avancado/images/hp-bar.png" alt="hp bar" />
                <CombatStatus>
                    <SubText>{info.stats.attack}</SubText>
                    <SubText>{info.stats.defence}</SubText>
                    <SubText>{info.stats.specialAttack}</SubText>
                    <SubText>{info.stats.specialDefense}</SubText>
                    <SubText>{info.stats.speed}</SubText>
                </CombatStatus>
            </Container>
        </StatsContainer>
    )
}

const StatsContainer = styled.div`
    width: 650px;
    height: 420px;
    display: ${props => props.display};
    border-radius: 25px;
    background-color: #8891F8;
    position: relative;
    justify-content: right;
    box-shadow: -2px -2px 0 #32363B, 2px -2px 0 #32363B, -2px 2px 0 #32363B, 2px 2px 0 #32363B;
    @media (max-width: 480px) {
        position: relative;
        border-radius: 30px;
        overflow: hidden;
        top: 34.1%;
        margin-left: 4%;
        width: 95%;
        height: 62%;
    }
`
const TextContainer = styled.div`
    width: 100%;

    .bg-color{
        background-color: #6770D9;
    }
    .hp {
        margin-left: 38px;
        @media (max-width: 480px) {
            margin-left: 20px;
        }
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
    height: 42px;
    display: flex;
    align-items: center;
    padding-left: 90px;
    @media (max-width: 480px) {
        font-size: 29px;
        padding-left: 40px;
        height: 28px;
        text-shadow: 1px 1px 1px #32363B;
    }
`
const SubText = styled.p`
@font-face {
        font-family: 'Open Sans';
        src: url('/Quest-React-Avancado/font/pokemon-dp-pro.ttf') format('truetype');
    }
    font-family: 'Open Sans', Arial, sans-serif;
    color: #252A30;
    font-size: 40px;
    text-shadow: 2px 2px 3px #BCBCBC;
    height: 42px;
    @media (max-width: 480px) {
        font-size: 29px;
        height: 28px;
    }
`
const HPBarContainer = styled.div`
    height: 19px;
    display: flex;
    justify-content: right;
    padding-right: 80px;
    @media (max-width: 480px) {
        height: 12px;
    }
`
const HPBar = styled.img`
    width: 250px;
    height: 17px;
    margin-left: 16px;
    @media (max-width: 480px) {
        display: flex;
        align-self: center;
        height: 12px;
        width: 80%;
    }
`
const AbilityConteiner = styled.div`
    height: 63px;
    display: flex;
    align-items: end;
    gap: 20px;
    .text{
        padding-left: 40px;
    }
    @media (max-width: 480px) {
        height: 40px;
        .text{
            padding-left: 20px;
        }
    }
`
const AbilityName = styled.div`
    height: 42px;
    width: 515px;
    background-color: #D8E0F0;
    margin-bottom: 2px;
    border-radius: 20px 0 0 0;
    padding-left: 30px;
    display: flex;
    align-items: center;
    text-transform: capitalize;
    gap: 2px;
    .btn-area:hover .btn{
        transform: translateX(-25%);
        animation: arrow-animation 2s ease-in-out infinite;
    }
    @keyframes arrow-animation {
        0% {
            transform: translateX(-25%);
        }

        50% {
            transform: translateX(3px);
        }

        100% {
            transform: translateX(-25%);
        }
    }
    .disabled {
        filter: grayscale(100%);
        cursor: default;
    }
    @media (max-width: 480px) {
        height: 28px;
        padding: 0;
        justify-content: center;

    }
`
const Description = styled.div`
    height: 86px;
    background: repeating-linear-gradient(to bottom, #F0F8F8 0, #F0F8F8 42px, #F0F0C0 42px,  #F0F0C0 90px);
    border-radius: 0 0 25px 25px;
    padding: 0 15px 0 20px;
    margin-bottom: 10px;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    .description {
        line-height: 40px;
        overflow-y: auto;
        height: 100%;
    }
    @media (max-width: 480px) {
        height: 25%;
        /* padding-bottom: 100px; */
        padding: 0 10px 0 20px;
        background: repeating-linear-gradient(to bottom, #F0F8F8 0, #F0F8F8 28px, #F0F0C0 28px,  #F0F0C0 56px);
        .description {
            line-height: 26px;
            font-size: 24px;
            text-shadow: 1px 1px 1px #BCBCBC;
            padding-bottom: 5%;
        }
    }
`
const Arrow = styled.img`
    cursor: pointer;
    z-index: 2;
    @media (max-width: 480px) {
        width: 11px;
    }
`
const Container = styled.div`
    position: absolute;
    width: 50%;
    .stats-hp{
        height: 42px;
        width: 280px;
        background-color: #F0F8F8;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        @media (max-width: 480px) {
            height: 28px;
            width: 96%;
        }
    }
`
const CombatStatus = styled.div`
    width: 200px;
    height: 210px;
    margin-left: 50px;
    margin-top: -5px;
    background: repeating-linear-gradient(to bottom, #F0F8F8 0, #F0F8F8 42px, #F0F0C0 42px,  #F0F0C0 84px);
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 480px) {
        width: 83%;
        height: 140px;
        margin-left: 12px;
        margin-top: 0;
        background: repeating-linear-gradient(to bottom, #F0F8F8 0, #F0F8F8 28px, #F0F0C0 28px,  #F0F0C0 56px);
    }
`
const ArrowContainer = styled.div`
    width: 42px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 5px;
    @media (max-width: 480px) {
        width: 32px;
        height: 32px;
    }
`