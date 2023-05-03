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
                            info.abilities[abilityIndex - 1] ? <ArrowContainer className="btn-area" onClick={() => setIndex(-1)}>
                                <Arrow className="btn" src="/Quest-React-Avancado/images/buton-icons/arrow.png" />
                            </ArrowContainer>
                                :
                                <ArrowContainer>
                                    <Arrow className="disabled" src="/Quest-React-Avancado/images/buton-icons/arrow.png" />
                                </ArrowContainer>
                        }
                        <SubText>{info.abilities[abilityIndex].ability.name}</SubText>
                        {
                            info.abilities[abilityIndex + 1] ? <ArrowContainer className="btn-area" onClick={() => setIndex(1)}>
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
`
const TextContainer = styled.div`
    width: 100%;
    .bg-color{
        background-color: #6770D9;
    }
    .hp {
        margin-left: 38px;
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
    line-height: 42px;
    height: 42px;
    display: flex;
    align-items: center;
    padding-left: 90px;
`
const SubText = styled.p`
@font-face {
        font-family: 'Open Sans';
        src: url('/Quest-React-Avancado/font/pokemon-dp-pro.ttf') format('truetype');
    }
    font-family: 'Open Sans', Arial, sans-serif;
    color: #252A30;
    font-size: 40px;
    text-shadow: 1px 1px 4px #32363B;
    line-height: 42px;
`
const HPBarContainer = styled.div`
    height: 19px;
    display: flex;
    justify-content: right;
    padding-right: 80px;
`
const HPBar = styled.img`
    align-self: center;
    width: 250px;
    height: 17px;
    margin-left: 16px;
`
const AbilityConteiner = styled.div`
    height: 63px;
    display: flex;
    align-items: end;
    gap: 20px;
    .text{
        padding-left: 40px;
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
`
const Description = styled.div`
    height: 86px;
    background: linear-gradient(to bottom, #F0F8F8 50%, #F0F0C0 50%);
    border-radius: 0 0 25px 25px;
    padding: 0 15px 0 20px;
    margin-bottom: 10px;
    display: flex;
    flex-wrap: wrap;
    .description {
        line-height: 40px;
    }
`
const Arrow = styled.img`
    cursor: pointer;
    z-index: 2;
`
const Container = styled.div`
    position: absolute;
    width: 50%;
    height: 100%;
    .stats-hp{
        height: 42px;
        width: 280px;
        background-color: #F0F8F8;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
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
`
const ArrowContainer = styled.div`
    width: 42px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
`