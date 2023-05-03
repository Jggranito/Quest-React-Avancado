import styled from "styled-components"
import { useState } from "react";
import '../..//css/style.css'
import { TypesContainer } from "./general";
import { InfoMoves } from "./info-moves";

export const Moves = (props) => {
    const info = props.info
    const display = props.display
    const [selectedValue, setSelectedValue] = useState('levelUp')
    const [selectedIndex, setSelectedIndex] = useState('0')
    const [isOpen, setIsOpen] = useState(false)

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

    return (
        <Container display={display}>
            <Content>
                <SwitchStats>
                    <MoveOriginFilter  >
                        <MainText>Moves learnt by: </MainText>
                        <Options>
                            <MainText className={(selectedValue === 'levelUp') ? "select" : "disable"} onClick={() => handleChange('levelUp')}>Level up</MainText>
                            <MainText className={(selectedValue === 'tm') ? "select" : "disable"} onClick={() => handleChange('tm')}>TM</MainText>
                            <MainText className={(selectedValue === 'egg') ? "select" : "disable"} onClick={() => handleChange('egg')}>Egg</MainText>
                            <MainText className={(selectedValue === 'tutor') ? "select" : "disable"} onClick={() => handleChange('tutor')}>Tutor</MainText>
                        </Options>
                    </MoveOriginFilter>
                </SwitchStats>
                <ContentMoves>
                    <ul>
                        {info.moves[selectedValue].map((move, index) => (
                            <li key={index}>
                                <ContainerMoves onClick={() => showMoveDetails(index)} selectedIndex={selectedIndex} index={index}>
                                    <TextMove>
                                        <TypesContainer>
                                            <MainText className={'type type-' + move.type}>{move.type}</MainText>
                                        </TypesContainer>
                                        <MainText className="move">{move.name}</MainText>
                                        {move.levelLearned ? <MainText>Level - {move.levelLearned}</MainText> : ''}
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
            <InfoMoves info={info} selectedValue={selectedValue} selectedIndex={[selectedIndex, setSelectedIndex]} isOpen={[isOpen, setIsOpen]} />
        </Container>
    )
}

const Container = styled.div`
    display: ${props => props.display};
`
const Content = styled.div`
    width: 650px;
    height: 420px;
    border-radius: 25px;
    background-color: #F88078;
    position: relative;
    display: flex;
    justify-content: right;
    box-shadow: -2px -2px 0 #32363B, 2px -2px 0 #32363B, -2px 2px 0 #32363B, 2px 2px 0 #32363B;
    overflow: hidden;
    flex-direction: column;
`
const SwitchStats = styled.div`
    width: 100%;
    height: 42px;
    display: flex;
    align-items: center;
    padding-left: 30px;
    border-radius: 20px 20px 0 0;
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
    line-height: 42px;
`
const MoveOriginFilter = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin: 10px 0;
    border-radius: 5px;
    color: #333333;
    font-size: 16px;
    padding: 4px 10px;
    border-radius: 20px;
    gap: 25px;
    cursor: default;
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
const ContentMoves = styled.div`
    width: 100%;
    height: 378px;
    overflow-y: auto;
    ::-webkit-scrollbar{
        background-color: #f5f5f5;
        height: 100px;
        border-radius: 6px;
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
        margin-top: -2px;
    }
    .move {
        width: 200px;
        text-transform: capitalize;
        justify-content: left;
    }
`
const ContainerPP = styled.div`
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: right;
`
const ContentPP = styled.div`
    height: 42px;
    width: 200px;
    display: flex;
    justify-content: space-around;
    background: #F0F8F8;
    border-radius: 20px;
    margin-right: 100px;
`