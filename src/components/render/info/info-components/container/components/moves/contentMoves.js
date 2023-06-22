import styled from "styled-components"

import { MainText, SubText } from "../../../../../../global/text"
import { TypesContainer } from "../general";

export const ContentMoves = (props) => {
    const { info } = props
    const { selectedValue } = props
    const [selectedIndex, setSelectedIndex] = props.selectedIndex
    const [, setIsOpen] = props.isOpen

    const showMoveDetails = (i) => {
        if (selectedIndex !== i) {
            setSelectedIndex(i);
        }
        setIsOpen(true);
    }

    return (
        <Content>
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
        </Content>
    )
}
const Content = styled.div`
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