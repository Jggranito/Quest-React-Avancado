import styled from "styled-components"
import { useState } from "react";
import { TypesContainer } from "./general";
import { InfoMoves } from "./info-moves";

export const Moves = (props) => {
    const info = props.info
    const display = props.display
    const [selectedValue, setSelectedValue] = useState('levelUp')
    const [selectedIndex, setSelectedIndex] = useState('0')
    const [isOpen, setIsOpen] = useState(false)
    const [arrowController, setArrowController] = useState(1)

    const handleChange = (event) => {
        setSelectedValue(event)
    }

    let sorted = false
    while (!sorted) {
        sorted = true
        for (let x = 1; x < info.moves.levelUp.length; x++) {
            if (info.moves.levelUp[x].levelLearned < info.moves.levelUp[x - 1].levelLearned) {
                const temp = info.moves.levelUp[x]
                info.moves.levelUp[x] = info.moves.levelUp[x - 1]
                info.moves.levelUp[x - 1] = temp
                sorted = false
            }
        }
    }

    const showMoveDetails = (i) => {
        if (selectedIndex !== i) {
            setSelectedIndex(i)
        }
        setIsOpen(true);
    }
    const controller = (i) => {
        const newArrowController = arrowController + i;
        const options = {
            1: 'levelUp',
            2: 'tm',
            3: 'egg',
            4: 'tutor',
        };
        const selectedValue = options[newArrowController];

        setArrowController(newArrowController);
        setSelectedValue(selectedValue);
    }

    return (
        <>
            <Container display={display}>
                <Content>
                    <SwitchStats>
                        <MoveOriginFilter>
                            <Options className="desktop">
                                <MainText>Moves learnt by:</MainText>
                                <MainText className={(selectedValue === 'levelUp') ? "select" : "disable"} onClick={() => handleChange('levelUp')}>Level up</MainText>
                                <MainText className={(selectedValue === 'tm') ? "select" : "disable"} onClick={() => handleChange('tm')}>TM</MainText>
                                <MainText className={(selectedValue === 'egg') ? "select" : "disable"} onClick={() => handleChange('egg')}>Egg</MainText>
                                <MainText className={(selectedValue === 'tutor') ? "select" : "disable"} onClick={() => handleChange('tutor')}>Tutor</MainText>
                            </Options>
                            <OptionsMobile className="mobile">
                                <MainText className="text">Moves by:</MainText>
                                {
                                    arrowController > 1 ?
                                        <ArrowContainer onClick={() => controller(-1)}>
                                            <Arrow className="btn" src="/Quest-React-Avancado/images/buton-icons/arrow.png" />
                                        </ArrowContainer>
                                        :
                                        <ArrowContainer>
                                            <Arrow className="disabled" src="/Quest-React-Avancado/images/buton-icons/arrow.png" />
                                        </ArrowContainer>
                                }
                                <MainText className={(selectedValue === 'levelUp') ? "select" : "disable"} onClick={() => handleChange('levelUp')}>Level</MainText>
                                <MainText className={(selectedValue === 'tm') ? "select" : "disable"} onClick={() => handleChange('tm')}>TM</MainText>
                                <MainText className={(selectedValue === 'egg') ? "select" : "disable"} onClick={() => handleChange('egg')}>Egg</MainText>
                                <MainText className={(selectedValue === 'tutor') ? "select" : "disable"} onClick={() => handleChange('tutor')}>Tutor</MainText>
                                {
                                    arrowController < 4 ?
                                        <ArrowContainer className="btn-area" onClick={() => controller(1)}>
                                            <Arrow className="btn" src="/Quest-React-Avancado/images/buton-icons/arrowR.png" />
                                        </ArrowContainer>
                                        :
                                        <ArrowContainer>
                                            <Arrow className="disabled" src="/Quest-React-Avancado/images/buton-icons/arrowR.png" />
                                        </ArrowContainer>
                                }
                            </OptionsMobile>
                        </MoveOriginFilter>
                    </SwitchStats>
                    <ContentMoves>
                        <ul style={{height: '100%'}}>
                            {info.moves[selectedValue].map((move, index) => (
                                <li key={index}>
                                    <ContainerMoves onClick={() => showMoveDetails(index)} selectedIndex={selectedIndex} index={index}>
                                        <TextMove>
                                            <TypesContainer>
                                                <MainText className={'type type-' + move.type}>{move.type}</MainText>
                                            </TypesContainer>
                                            <MainText className="move">{move.name}</MainText>
                                            {move.levelLearned ? <MainText className="level">Level - {move.levelLearned}</MainText> : ''}
                                        </TextMove>
                                        <ContainerPP>
                                            <ContentPP>
                                                <SubText>PP</SubText>
                                                <SubText>{move.pp}/{move.pp}</SubText>
                                            </ContentPP>
                                        </ContainerPP>
                                    </ContainerMoves>
                                </li>
                            ))}
                        </ul>
                    </ContentMoves>
                </Content>
            </Container>
            <InfoMoves info={info} selectedValue={selectedValue} selectedIndex={[selectedIndex, setSelectedIndex]} display={display} isOpen={[isOpen, setIsOpen]} />
        </>
    )
}

const Container = styled.div`
    display: ${props => props.display};
    width: 650px;
    height: 420px;
    border-radius: 25px;
    background-color: #F88078;
    position: relative;
    box-shadow: -2px -2px 0 #32363B, 2px -2px 0 #32363B, -2px 2px 0 #32363B, 2px 2px 0 #32363B;
    overflow: hidden;
    @media (max-width: 480px) {
        border-radius: 30px;
        top: 34.1%;
        margin-left: 4%;
        width: 95%;
        height: 62%;
    }
`
const Content = styled.div`
    width: 100%;
    height: 100%;
`
const SwitchStats = styled.div`
    width: 100%;
    height: 42px;
    display: flex;
    align-items: center;
    padding-left: 30px;
    @media (max-width: 480px) {
        height: 32px;
        padding-left: 10px;
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
    @media (max-width: 480px) {
        font-size: 29px;
        height: 32px;
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
    text-transform: uppercase;
    font-size: 40px;
    text-shadow: 2px 2px 3px #BCBCBC;
    height: 42px;
    @media (max-width: 480px) {
        font-size: 29px;
        height: 28px;
    }
`
const MoveOriginFilter = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin: 10px 0;
    border-radius: 5px;
    color: #333333;
    padding: 4px 10px;
    border-radius: 20px;
    gap: 25px;
    cursor: default;
    .mobile{
        display: none;
    }
    @media (max-width: 480px) {
        font-size: 12px;
        gap: 25px;
        .desktop{
            display: none;
        }
        .mobile {
            display: flex;
        }
    }
`
const Options = styled.div`
    display: flex;
    gap: 20px;
    .disable{
        cursor: pointer;
        color: #999999;
    }
    .select{
        text-decoration: underline #EA1C26;
    }
`
const OptionsMobile = styled.div`
    gap: 10px;
    .disable{
        display: none;
    }
    .disabled{
        filter: grayscale(100%);
    }
    .select{
        display: block;
        width: 50px;
        text-align: center;
    }
    .text {
        margin-right: 30px;
    }
    @media (max-width: 480px) {
        .desktop {
            display: none;
        }
    }
`
const ContentMoves = styled.div`
    width: 100%;
    height: 378px;
    overflow-y: auto;
    ::-webkit-scrollbar{
        background-color: #f5f5f5;
        height: 100px;
        border-radius: 6px;
    }
    @media (max-width: 480px){
        height: 91%;
    }
`
const ContainerMoves = styled.div`
    cursor: pointer;
    padding: 5px;
    border: ${props => props.selectedIndex === props.index ? '5px solid rgb(234, 28, 38); padding: 0px;' : 'none'};
    :hover{
        border: none;
        padding: 5px;
        box-shadow: inset 0 0 0 5px rgb(255, 5, 5);
    }
    @media (max-width: 480px) {
        padding: 3px;
        border: ${props => props.selectedIndex === props.index ? '3px solid rgb(234, 28, 38); padding: 0px;' : 'none'};
        :hover{
            padding: 3px;
            box-shadow: inset 0 0 0 2px rgb(255, 5, 5);
        }
    }
`
const TextMove = styled.div`
    height: 42px;
    display: flex;
    align-items: center;
    background-color: #F0A8A0;
    gap: 8px;
    padding-left: 100px;
    .type {
        width: 150px;
        height: 40px;
        padding: 20px;
        margin-top: 2px;
    }
    .move {
        width: 200px;
        text-transform: capitalize;
        justify-content: left;
    }
    @media (max-width: 480px) {
        height: 28px;
        padding-left: 20px;
        gap: 20px;
        .type{
            width: 95px;
            height: 25px;
            border-radius: 6px;
            padding: 0;
        }
        .level {
            display: none;
        }
    }
`
const ContainerPP = styled.div`
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: right;
    @media (max-width: 480px) {
        height: 28px;
    }
`
const ContentPP = styled.div`
    height: 42px;
    width: 200px;
    display: flex;
    justify-content: space-around;
    background: #F0F8F8;
    border-radius: 20px;
    margin-right: 100px;
    @media (max-width: 480px) {
        height: 26px;
        width: 120px;
        margin-right: 10px;
        align-items: center;
    }
`
const ArrowContainer = styled.div`
    width: 42px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 480px) {
        width: 32px;
        height: 32px;
    }
`
const Arrow = styled.img`
    height: 20px;
`