import styled from "styled-components"
import { useLocation } from "react-router-dom"

export const InfoMoves = (props) => {
    const info = props.info
    const selectedValue = props.selectedValue
    const selectedIndex = props.selectedIndex
    const [isOpen, setIsOpen] = props.isOpen
    const { state: { pokemon } } = useLocation()

    const handleClose = () => {
        setIsOpen(false)
    }

    console.log(isOpen, selectedIndex, selectedValue)

    return (
        <>
            {info.moves[selectedValue][selectedIndex] ?
                <Container className="move-info" display={isOpen ? 'block' : 'none'}>
                    <FirtLine>
                        <FirtLineContent>
                            <SpritePokemon src={pokemon.sprites.spriteVIIIGen} alt='pokemon icon' />
                            <TextFirtLine>
                                <MainText className={'type type-' + pokemon.types[1]} >{pokemon.types[1]}</MainText>
                                {
                                    pokemon.types[2] ? <MainText className={'type type-' + pokemon.types[2]}>{pokemon.types[2]}</MainText> : ''
                                }
                            </TextFirtLine>
                        </FirtLineContent>
                        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'right' }}>
                            <div style={{ backgroundColor: 'red', height: '35px', width: '35px', blockSize: 'border', marginRight: '50px', borderRadius: '20px', display: 'flex', alignItems: 'center', position: 'relative', cursor: 'pointer', boxShadow: '1px black' }} onClick={handleClose}>
                                <div style={{ width: '100%', height: '5px', backgroundColor: 'white', borderRadius: '2px', rotate: '40deg' }}></div>
                                <div style={{ width: '100%', height: '5px', backgroundColor: 'white', borderRadius: '2px', rotate: '-40deg', position: 'absolute' }}></div>

                            </div>
                        </div>
                    </FirtLine>
                    <div style={{ height: '42px', backgroundColor: '#F8C8C0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', textTransform: 'uppercase', padding: '0 30px' }}>
                        <P className="text">category</P>
                        <img src={"/Quest-React-Avancado/images/" + info.moves[selectedValue][selectedIndex].category + ".png"} alt="category move icon" style={{ height: '34px', borderRadius: '6px' }}></img>
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
                            <P style={{ minHeight: '100%', width: '100%', background: 'repeating-linear-gradient( to bottom, #F0F8F8 0, #F0F8F8 42px, #E6E69E 42px, #E6E69E 84px)', padding: '0 25px 0 30px' }}>
                                {info.moves[selectedValue][selectedIndex].description}
                            </P>
                        </div>
                    </div>
                </Container>
                : ''
            }
        </>
    )
}

const P = styled.p`
    @font-face {
        font-family: 'Open Sans';
        src: url('./font/pokemon-dp-pro.ttf') format('truetype');
    }
    font-family: 'Open Sans', Arial, sans-serif;
    color: #242C35;
    font-size: 40px;
    text-shadow: 1px 1px 4px #32363B;
    line-height: 42px;
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
const Container = styled.div`
    width: 500px;
    height: 380px;
    position: absolute;
    margin: 50px 0 0 -480px;
    box-shadow: -2px -2px 0 #32363B, 2px -2px 0 #32363B, -2px 2px 0 #32363B, 2px 2px 0 #32363B;
    border-radius: 20px;
    overflow: hidden;
    display: ${props => props.display};
`
const FirtLine = styled.div`
    height: 63px;
    background-color: #F88078;
    display: flex;
    gap: 20px;
    align-items: center;
    padding-left: 30px;
    border-bottom: 2px solid #D86058;
`
const FirtLineContent = styled.div`
    display: flex;
    align-items: center;
`
const SpritePokemon = styled.img`
    width: 90px;
    transform: scaleX(-1);
`
const TextFirtLine = styled.div`
    width: 300px;
    display: flex;
    gap: 8px;
    text-transform: uppercase;
    align-items: center;
    justify-content: center;
    .type {
        width: 130px;
        height: 40px;
        padding: 20px;
        margin-top: -2px;
    }
`