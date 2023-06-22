import styled from "styled-components";
import { useContext, useState } from "react";
import { TypesContainer } from "./general";
import { InfoMoves } from "./info-moves";
import { ThemeContext } from "../../../../../../context/themeContext";
import { MainText, SubText } from "../../../../../global/text";

export const Moves = (props) => {
    const info = props.info;
    const display = props.display;
    const [selectedValue, setSelectedValue] = useState('levelUp');
    const [selectedIndex, setSelectedIndex] = useState('0');
    const [isOpen, setIsOpen] = useState(false);
    const [arrowController, setArrowController] = useState(1);
    const { theme } = useContext(ThemeContext);

    const handleChange = (event) => {
        setSelectedValue(event);
    }

    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let x = 1; x < info.moves.levelUp.length; x++) {
            if (info.moves.levelUp[x].levelLearned < info.moves.levelUp[x - 1].levelLearned) {
                const temp = info.moves.levelUp[x];
                info.moves.levelUp[x] = info.moves.levelUp[x - 1];
                info.moves.levelUp[x - 1] = temp;
                sorted = false;
            }
        }
    }

    const showMoveDetails = (i) => {
        if (selectedIndex !== i) {
            setSelectedIndex(i);
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
        <div className="moves" style={{ height: '77%' }}>
            <Container display={display}>
                <Content>
                    <SwitchStats>
                        <MoveOriginFilter>
                            <Options className="desktop" colorDisable={theme.text.disabled.color} underLine={theme.text.disabled.underLineColor}>
                                <MainText FontSize='40px'>Moves learnt by:</MainText>
                                <div onClick={() => handleChange('levelUp')}>
                                    <MainText ClassName={(selectedValue === 'levelUp') ? "select" : "disable"} FontSize='40px'>Level up</MainText>
                                </div>
                                <div onClick={() => handleChange('tm')}>
                                    <MainText ClassName={(selectedValue === 'tm') ? "select" : "disable"} FontSize='40px'>TM</MainText>
                                </div>
                                <div onClick={() => handleChange('egg')}>
                                    <MainText ClassName={(selectedValue === 'egg') ? "select" : "disable"} FontSize='40px'>Egg</MainText>
                                </div>
                                <div onClick={() => handleChange('tutor')}>
                                    <MainText ClassName={(selectedValue === 'tutor') ? "select" : "disable"} FontSize='40px'>Tutor</MainText>
                                </div>
                            </Options>
                            <OptionsMobile className="mobile">
                                <MainText ClassName="text">Moves by:</MainText>
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
                                <MainText ClassName={(selectedValue === 'levelUp') ? "select" : "disable"} onClick={() => handleChange('levelUp')} FontSize='40px'>Level</MainText>
                                <MainText ClassName={(selectedValue === 'tm') ? "select" : "disable"} onClick={() => handleChange('tm')} FontSize='40px'>TM</MainText>
                                <MainText ClassName={(selectedValue === 'egg') ? "select" : "disable"} onClick={() => handleChange('egg')} FontSize='40px'>Egg</MainText>
                                <MainText ClassName={(selectedValue === 'tutor') ? "select" : "disable"} onClick={() => handleChange('tutor')} FontSize='40px'>Tutor</MainText>
                                {
                                    arrowController < 4 ?
                                        <ArrowContainer className="btn-area" onClick={() => controller(1)}>
                                            <Arrow className="btn right" src="/Quest-React-Avancado/images/buton-icons/arrowR.png" />
                                        </ArrowContainer>
                                        :
                                        <ArrowContainer>
                                            <Arrow className="disabled right" src="/Quest-React-Avancado/images/buton-icons/arrowR.png" />
                                        </ArrowContainer>
                                }
                            </OptionsMobile>
                        </MoveOriginFilter>
                    </SwitchStats>
                    <ContentMoves>
                        <ul>
                            {info.moves[selectedValue].map((move, index) => (
                                <li key={index}>
                                    <ContainerMoves onClick={() => showMoveDetails(index)} selectedIndex={selectedIndex} index={index}>
                                        <TextMove>
                                            <TypesContainer>
                                                <MainText ClassName={'type type-' + move.type} FontSize='40px'>{move.type}</MainText>
                                            </TypesContainer>
                                            <MainText ClassName="move" FontSize='40px'>{move.name}</MainText>
                                            {move.levelLearned ? <MainText ClassName="level" FontSize='40px'>Level - {move.levelLearned}</MainText> : ''}
                                        </TextMove>
                                        <ContainerPP className={selectedValue}>
                                            {move.levelLearned ? <MainText ClassName="level" FontSize='40px'>Level - {move.levelLearned}</MainText> : ''}
                                            <ContentPP>
                                                <SubText FontSize='40px'>PP</SubText>
                                                <SubText FontSize='40px'>{move.pp}/{move.pp}</SubText>
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
        </div>
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
    @media (max-width: 767px) {
        border-radius: 1.875rem;
        top: -3rem;
        width: 100%;
        height: 18rem;
    }
    @media (min-width: 768px) and (max-width: 991px){
        width: 100%;
        border-radius: 1.875rem;
        top: 0.5rem;
        height: 17rem;
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
    @media (max-width: 991px) {
        height: 32px;
        padding-left: 10px;
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
    @media (max-width: 991px) {
        margin: 0;
        .desktop{
            display: none;
        }
        .mobile {
            display: flex;
            align-items: center;
        }
    }
`
const Options = styled.div`
    display: flex;
    gap: 20px;
    .disable{
        cursor: pointer;
        color: ${props => props.colorDisable};
    }
    .select{
        text-decoration: underline ${props => props.underLine};
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
        width: 4rem;
        text-align: center;
    }
    .text {
        margin: 0;
    }
    .right {
        margin-left: 10px;
    }
    @media (max-width: 991px) {
        .desktop {
            display: none;
        }
    }
`
const ContentMoves = styled.div`
    width: 100%;
    height: 378px;
    overflow-y: auto;
    ul {
        height: 100%;
    }
    ::-webkit-scrollbar{
        background-color: #f5f5f5;
        border-radius: 6px;
    }
    @media (max-width: 991px){
        height: 87%;
    }
`
const ContainerMoves = styled.div`
    cursor: pointer;
    padding: 5px;
    border: ${props => props.selectedIndex === props.index ? '5px solid #EA1C26; padding: 0px;' : 'none'};
    :hover{
        border: none;
        padding: 5px;
        box-shadow: inset 0 0 0 5px #EA0505;
    }
    @media (max-width: 991px) {
        padding: 3px;
        border: ${props => props.selectedIndex === props.index ? '3px solid #EA1C26; padding: 0px;' : 'none'};
        .levelUp{
            justify-content: space-between; 
        }
        :hover{
            padding: 3px;
            box-shadow: inset 0 0 0 2px #EA0505;
        }
    }
`
const TextMove = styled.div`
    height: 42px;
    display: flex;
    align-items: center;
    background-color: #F0A8A0;
    gap: 50px;
    padding-left: 30px;
    .type {
        width: 150px;
        height: 40px;
        padding: 20px;
        margin-top: 2px;
    }
    .move {
        width: 200px;
        text-transform: capitalize;
        justify-content: space-between;
    }
    .level{
        width: 150px;
        justify-content: right;
        margin-right: 20px;
    }
    @media (max-width: 991px) {
        height: 28px;
        padding-left: 20px;
        gap: 10px;
        .type{
            width: 95px;
            height: 25px;
            border-radius: 6px;
            padding: 0;
        }
        .move{
            font-size: 28px;
            padding: 0;
            justify-content: space-evenly;
        }
        .level {
            display: none;
        }
    }
    @media (min-width: 768px) and (max-width: 991px){
        gap: 50px;
        .move{
            justify-content: space-between;
        }
    }
`
const ContainerPP = styled.div`
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: right;
    .level{
        display: none;
    }
    @media (max-width: 991px) {
        height: 28px;
        margin-left: 0.3rem;
        .level{
            display: flex;
            justify-content: left;
            font-size: 28px;
        }
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
    @media (max-width: 991px) {
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
    @media (max-width: 991px) {
        width: 32px;
        height: 32px;
    }
`
const Arrow = styled.img`
    height: 20px;
`