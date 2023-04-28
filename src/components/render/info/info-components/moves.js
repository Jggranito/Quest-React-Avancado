import styled from "styled-components"
import { useState } from "react";
import { useLocation } from "react-router-dom"
import './style.css'

export const Moves = (props) => {
    const info = props.info
    const display = props.display
    const [selectedValue, setSelectedValue] = useState('levelUp')
    const [selectedIndex, setSelectedIndex] = useState('0')
    const { state: { pokemon } } = useLocation()
    const [isOpen, setIsOpen] = useState(false)


    const handleChange = (event) => {
        setSelectedValue(event.target.value)
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

    const handleClose = () => {
        setIsOpen(false)
    }

    console.log(info.moves.egg)

    return (
        <div style={{display}}>
            <div className="moves" style={{ width: '650px', height: '420px', borderRadius: '20px', backgroundColor: '#F88078', position: 'relative', display: 'flex', justifyContent: 'right', boxShadow: ' -2px -2px 0 #32363B, 2px -2px 0 #32363B, -2px 2px 0 #32363B, 2px 2px 0 #32363B', overflow: 'hidden', flexDirection: 'column' }}>
                <div style={{ width: '100%', height: '42px', display: 'flex', alignItems: 'center', paddingLeft: '30px', borderRadius: '20px 20px 0 0' }}>
                    <div>
                        <P className="text">Moves learnt by: </P>
                    </div>
                    <select name="learnt-by" style={{ marginLeft: '30px' }} value={selectedValue} onChange={handleChange}>
                        <option value='levelUp'>Level up</option>
                        <option value='tm'>TM</option>
                        <option value='egg'>Egg</option>
                        <option value='tutor'>Tutor</option>
                    </select>
                </div>
                <div className="parent" style={{ width: '100%', height: '378px', overflowY: 'auto' }}>
                    <ul>
                        {info.moves[selectedValue].map((move, index) => {
                            return (
                                <li key={index}>
                                    <div className="borderteste" onClick={() => showMoveDetails(index)} style={{ cursor: 'pointer' }}>
                                        <div style={{ height: '42px', display: 'flex', alignItems: 'center', backgroundColor: '#F0A8A0', paddingLeft: '100px', gap: '8px' }}>
                                            <P className={'text type-' + move.type} style={{ textTransform: 'uppercase', boxShadow: ' 2px 2px 5px #32363B, 2px 2px 5px #32363B', height: '40px' }}>{move.type}</P>
                                            <P className='text move' >{move.name}</P>
                                            {
                                                move.levelLearned ? <P className="text">Level - {move.levelLearned}</P> : ''
                                            }
                                        </div>
                                        <div style={{ height: '42px', display: 'flex', alignItems: 'center', justifyContent: 'right' }}>
                                            <div style={{ height: '42px', width: '200px', display: 'flex', justifyContent: 'space-around', background: '#F0F8F8', borderRadius: '20px', marginRight: '100px' }}>
                                                <P>PP</P>
                                                <P>{move.pp}/{move.pp}</P>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )


                        })}
                        <div style={{ height: '42px', display: 'flex', alignItems: 'center', backgroundColor: '#F0A8A0' }}></div>
                    </ul>
                </div>
            </div>



            {info.moves[selectedValue][selectedIndex]?
                <div className="move-info" style={{ width: '500px', height: '380px', position: 'absolute', margin: '50px 0 0 -480px', boxShadow: ' -2px -2px 0 #32363B, 2px -2px 0 #32363B, -2px 2px 0 #32363B, 2px 2px 0 #32363B', borderRadius: '20px', overflow: 'hidden', display: isOpen ? 'block' : 'none' }}>
                    <div style={{ height: '63px', backgroundColor: '#F88078', borderRadius: '20px 20px 0 0', display: 'flex', gap: '20px', alignItems: 'center', padding: '0 0 0 30px', borderBottom: '2px solid #D86058' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img src={pokemon.sprites.spriteVIIIGen} alt='pokemon icon' style={{ width: '90px', transform: 'scaleX(-1)' }}></img>
                            <div style={{ display: 'flex', gap: '8px', textTransform: 'uppercase' }}>
                                <P className={'text type-' + pokemon.types[1]} >{pokemon.types[1]}</P>
                                <P className={'text type-' + pokemon.types[2]}>{pokemon.types[2]}</P>
                            </div>
                        </div>
                        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'right' }}>
                            <div style={{ backgroundColor: 'red', height: '35px', width: '35px', blockSize: 'border', marginRight: '50px', borderRadius: '20px', display: 'flex', alignItems: 'center', position: 'relative', cursor: 'pointer', boxShadow: '1px black' }} onClick={handleClose}>
                                <div style={{ width: '100%', height: '5px', backgroundColor: 'white', borderRadius: '2px', rotate: '40deg' }}></div>
                                <div style={{ width: '100%', height: '5px', backgroundColor: 'white', borderRadius: '2px', rotate: '-40deg', position: 'absolute' }}></div>

                            </div>
                        </div>
                    </div>
                    <div style={{ height: '42px', backgroundColor: '#F8C8C0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', textTransform: 'uppercase', padding: '0 30px' }}>
                        <P className="text">category</P>
                        <img src={"/images/" + info.moves[selectedValue][selectedIndex].category + ".png"} alt="category move icon" style={{ height: '34px', borderRadius: '6px' }}></img>
                    </div>
                    <div style={{ height: '42px', backgroundColor: '#F0A8A0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 30px', textTransform: 'uppercase' }}>
                        <P style={{ color: '#FFFFFF', textShadow: '2px 2px 2px #32363B' }}>power</P>
                        <P style={{ display: 'flex', alignItems: 'center', justifyContent: 'right', height: '42px', width: '80px', backgroundColor: '#F0F8F8', paddingRight: '18px', borderRadius: '20px' }}>{info.moves[selectedValue][selectedIndex].power}</P>
                    </div>
                    <div style={{ height: '42px', backgroundColor: '#F8C8C0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 30px', textTransform: 'uppercase' }}>
                        <P style={{ color: '#FFFFFF', textShadow: '2px 2px 2px #32363B' }}>accuracy</P>
                        <P style={{ display: 'flex', alignItems: 'center', justifyContent: 'right', height: '42px', width: '80px', backgroundColor: '#F0F0C0', paddingRight: '18px', borderRadius: '20px' }}>{info.moves[selectedValue][selectedIndex].accuracy}</P>
                    </div>

                    <div style={{ height: '191px' }}>
                        <div className='parent' style={{ height: '100%', width: '100%', overflowY: 'auto' }}>
                            <P style={{ minHeight: '100%', width: '100%', background: 'repeating-linear-gradient( to bottom, #F0F8F8 0, #F0F8F8 42px, #F0F0C0 42px, #F0F0C0 84px)', padding: '0 25px 0 30px' }}>
                                {info.moves[selectedValue][selectedIndex].description}
                            </P>
                        </div>
                    </div>
                </div>
                : ''
            }
        </div>
    )
}

const P = styled.p`
                @font-face {
                    font-family: 'Open Sans';
                src: url('../font/pokemon-dp-pro.ttf') format('truetype');
    }
                font-family: 'Open Sans', Arial, sans-serif;
                color: #242C35;
                font-size: 40px;
                text-shadow: 1px 1px 4px #32363B;
                line-height: 42px;
`