import styled from "styled-components"
import { useState } from "react";

import { MainText, SubText } from "../../../../../../global/text"

export const TextContainer = (props) => {
    const info = props.info;
    const [abilityIndex, setAbilityIndex] = useState(0)

    const setIndex = (index) => {
        setAbilityIndex(abilityIndex + index)
    }

    return (
        <Container>
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
                    <SubText ClassName='ability-name' FontSize='40px'>{info.abilities[abilityIndex].name}</SubText>
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
                        <SubText ClassName='description' FontSize='40px'>{info.abilities[abilityIndex].description}</SubText>
                    </Description>
                </ContentDescription>
            </ContainerDescription>
        </Container>
    )
}
const Container = styled.div`
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