import styled from "styled-components";
import { useState } from "react";

import { InfoMoves } from "../info-moves";
import { MoveOriginFilter } from "./moveOriginFilter";
import { ContentMoves } from "./contentMoves";

export const Moves = (props) => {
    const info = props.info;
    const display = props.display;
    const [selectedValue, setSelectedValue] = useState('levelUp');
    const [selectedIndex, setSelectedIndex] = useState('0');
    const [isOpen, setIsOpen] = useState(false);

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

    return (
        <div className="moves" style={{ height: '77%' }}>
            <Container display={display}>
                <Content>
                    <MoveOriginFilter value={[selectedValue, setSelectedValue]} />
                    <ContentMoves info={info} selectedValue={selectedValue} selectedIndex={[selectedIndex, setSelectedIndex]} isOpen={[isOpen, setIsOpen]} />
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