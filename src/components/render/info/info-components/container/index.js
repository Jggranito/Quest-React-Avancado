import styled from "styled-components";
import { useState } from "react";
import { General } from "./components/general";
import { Stats } from "./components/stats";
import { Moves } from "./components/moves";

export const InfoContainer = (props) => {
    const info = props.info;

    const [generalDisplay, setGeneralDisplay] = useState('flex')
    const [statsDisplay, setStatsDisplay] = useState('none')
    const [movesDisplay, setMovesDisplay] = useState('none')
    const [generalButtonActived, setGeneralButtonActived] = useState(true)
    const [statsButtonActived, setStatsButtonActived] = useState(false)
    const [movesButtonActived, setMovesButtonActived] = useState(false)

    const changeCard = (cardNumber) => {
        const displays = {
            1: { general: 'flex', stats: 'none', moves: 'none' },
            2: { general: 'none', stats: 'flex', moves: 'none' },
            3: { general: 'none', stats: 'none', moves: 'flex' },
        }
        setGeneralDisplay(displays[cardNumber].general)
        setStatsDisplay(displays[cardNumber].stats)
        setMovesDisplay(displays[cardNumber].moves)
        setGeneralButtonActived(cardNumber === 1)
        setStatsButtonActived(cardNumber === 2)
        setMovesButtonActived(cardNumber === 3)
    }

    return (
        <Info>
            <InfoButtons>
                <BtnGeneral className={generalButtonActived ? "actived btn-card" : "btn-card"} onClick={() => changeCard(1)}>
                    <img src={generalButtonActived ? "/Quest-React-Avancado/images/buton-icons/general-actived.png" : "/Quest-React-Avancado/images/buton-icons/general.png"} alt="ads" style={{ width: '65%' }}></img>
                </BtnGeneral>
                <BtnStats className={statsButtonActived ? "actived btn-card" : "btn-card"} onClick={() => changeCard(2)}>
                    <img src={statsButtonActived ? "/Quest-React-Avancado/images/buton-icons/stats-actived.png" : "/Quest-React-Avancado/images/buton-icons/stats.png"} alt="ads" style={{ width: '65%' }}></img>
                </BtnStats>
                <BtnMoves className={movesButtonActived ? "actived btn-card" : "btn-card"} onClick={() => changeCard(3)}>
                    <img src={movesButtonActived ? "/Quest-React-Avancado/images/buton-icons/moves-actived.png" : "/Quest-React-Avancado/images/buton-icons/moves.png"} alt="ads" style={{ width: '65%' }}></img>
                </BtnMoves>
            </InfoButtons>
            <General info={info} display={generalDisplay} />
            <Stats info={info} display={statsDisplay} />
            <Moves info={info} display={movesDisplay} />
        </Info>
    )
}

const Info = styled.div`
    position: relative;
`
const InfoButtons = styled.div`
    display: flex;
    width: 100%;
    position: absolute;
    z-index: 1;
    justify-content: center;
    margin-top: -42px;
    .btn-card {
        width: 52px;
        height: 42px;
        border: 2px solid #32363B;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: 0.2s ease;
    }
    .actived {
        border-bottom: none;
    }
`
const BtnGeneral = styled.div`
    background-color: #85DE8C;
`
const BtnStats = styled.div`
    background-color: #8891F8;
`
const BtnMoves = styled.div`
    background-color: #F88078;
`