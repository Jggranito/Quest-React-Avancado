import styled from "styled-components";
import { useState } from "react";
import { MainText, SubText } from "../../../../../global/text";

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
                <MainText ClassName='hp line' height={'42px'} padding={'0 0 0 90px'} FontSize='40px'>HP</MainText>
                <HPBarContainer className="bg-color" />
                <MainText ClassName='line' height={'42px'} padding={'0 0 0 90px'} FontSize='40px'>Attack</MainText>
                <MainText ClassName='bg-color line' height={'42px'} padding={'0 0 0 90px'} FontSize='40px'>Defence</MainText>
                <MainText ClassName='line' height={'42px'} padding={'0 0 0 90px'} FontSize='40px'>Sp. Atk</MainText>
                <MainText ClassName="bg-color line" height={'42px'} padding={'0 0 0 90px'} FontSize='40px'>Sp. Def</MainText>
                <MainText ClassName='line' height={'42px'} padding={'0 0 0 90px'} FontSize='40px'>Speed</MainText>
                <AbilityConteiner className="bg-color">
                    <MainText ClassName='text' height={'42px'} FontSize='40px'>Ability</MainText>
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
                        <SubText ClassName='ability-name' FontSize='40px'>{info.abilities[abilityIndex].ability.name}</SubText>
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
                <ContainerDescription>
                    <ContentDescription>
                        <Description>
                            <SubText ClassName='description' FontSize='40px'>{info.abilities[abilityIndex].ability.description}</SubText>
                        </Description>
                    </ContentDescription>
                </ContainerDescription>
            </TextContainer>
            <Container>
                <SubText ClassName='stats-hp' FontSize='40px'>{info.stats.hp - 3}/{info.stats.hp}</SubText>
                <HPBar src="/Quest-React-Avancado/images/hp-bar.png" alt="hp bar" />
                <CombatStatus>
                    <SubText FontSize='40px'>{info.stats.attack}</SubText>
                    <SubText FontSize='40px'>{info.stats.defence}</SubText>
                    <SubText FontSize='40px'>{info.stats.specialAttack}</SubText>
                    <SubText FontSize='40px'>{info.stats.specialDefense}</SubText>
                    <SubText FontSize='40px'>{info.stats.speed}</SubText>
                </CombatStatus>
            </Container>
        </StatsContainer>
    )
}

const StatsContainer = styled.div`
    width: 40.625rem;
    height: 26.25rem;
    display: ${props => props.display};
    border-radius: 25px;
    background-color: #8891F8;
    position: relative;
    justify-content: right;
    box-shadow: -2px -2px 0 #32363B, 2px -2px 0 #32363B, -2px 2px 0 #32363B, 2px 2px 0 #32363B;
    overflow: hidden;
    @media (max-width: 767px) {
        border-radius: 1.875rem;
        overflow: hidden;
        top: -3rem;
        width: 100%;
        height: 18rem;
    .line{
        height: 29px;
        padding-left: 42px
        }
    .ability-name{
        height: 31px;
        font-size: 27px;
        }
    }
    @media (min-width: 768px) and (max-width: 991px) {
        position: relative;
        border-radius: 1.875rem;
        overflow: hidden;
        top: 0.5rem;
        width: 100%;
        height: 17rem;
    .line{
        height: 29px;
        padding-left: 42px
        }
    .ability-name{
        height: 29px;
        font-size: 27px;
        }
    }
`
const TextContainer = styled.div`
    width: 100%;

    .bg-color{
        background-color: #6770D9;
    }
    .hp {
        margin-left: 38px;
        @media (max-width: 767px) {
            margin-left: 30px;
        }
    }
`
const HPBarContainer = styled.div`
    height: 19px;
    display: flex;
    justify-content: right;
    padding-right: 80px;
    @media (max-width: 991px) {
        height: 12px;
    }
`
const HPBar = styled.img`
    width: 250px;
    height: 20px;
    margin-left: 16px;
    @media (max-width: 991px) {
        display: flex;
        height: 12px;
        width: 80%;
        margin-left: 5px;
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
    @media (max-width: 991px) {
        height: 40px;
        .text{
            padding-left: 15px;
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
    @media (max-width: 767px) {
        height: 28px;
        padding: 0;
        justify-content: center;
    }
    @media (min-width: 768px) and (max-width: 991px){
        height: 30px;
    }
`
const ContainerDescription = styled.div`
    height: 96px;
    @media (max-width: 991px) {
        height: 43%;
    }
`
const ContentDescription = styled.div`
    height: 100%;
    overflow-y: auto;
    ::-webkit-scrollbar {
        background-color: #f5f5f5;
        height: 100px;
        border-radius: 6px;
    }
    @media (max-width: 991px) {
        height: 52%;
    }
`
const Description = styled.div`
    min-height: 110%;
    width: 100%;
    background: repeating-linear-gradient( to bottom, #F0F8F8 0, #F0F8F8 42px, #E6E69E 42px, #E6E69E 84px);
    padding: 0 10px 10px 15px;
    @media (max-width: 991px) {
        min-height: 159%;
        width: 100%;
        background: repeating-linear-gradient( to bottom, #F0F8F8 0, #F0F8F8 31px, #E6E69E 31px, #E6E69E 62px);
        padding: 0 10px 14px 15px;
        .description {
            line-height: 31px;
            font-size: 24px;
            text-shadow: 1px 1px 1px #BCBCBC;
            padding: 0;
        }
    }
    @media (min-width: 768px) and (max-width: 991px){
        min-height: 100%;
    }
`
const Arrow = styled.img`
    cursor: pointer;
    z-index: 2;
    @media (max-width: 991px) {
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
        @media (max-width: 991px) {
            height: 29px;
            width: 90%;
            /* margin-left: 0.8rem; */
        }
        @media (min-width: 768px) and (max-width: 991px){
            width: 86%;
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
    @media (max-width: 991px) {
        width: 70%;
        height: 9.063rem;
        margin-left: 1rem;
        margin-top: 0;
        background: repeating-linear-gradient(to bottom, #F0F8F8 0, #F0F8F8 29px, #F0F0C0 29px,  #F0F0C0 58px);
    }
`
const ArrowContainer = styled.div`
    width: 42px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 5px;
    @media (max-width: 991px) {
        width: 32px;
        height: 32px;
    }
`