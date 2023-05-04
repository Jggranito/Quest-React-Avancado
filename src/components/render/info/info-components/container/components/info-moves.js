import styled from "styled-components"
import { useLocation } from "react-router-dom"

export const InfoMoves = (props) => {
    const info = props.info
    const selectedValue = props.selectedValue
    const [selectedIndex, setSelectIndex] = props.selectedIndex
    const [isOpen, setIsOpen] = props.isOpen
    const { state: { pokemon } } = useLocation()

    const handleClose = () => {
        setIsOpen(false)
        setSelectIndex('0')
    }

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
                        <BtnCloseContainer onClick={handleClose}>
                            <BtnClose />
                        </BtnCloseContainer>
                    </FirtLine>
                    <StatsContainer>
                        <SecontLine>
                            <MainText>category</MainText>
                            <CategoryIcon src={"/Quest-React-Avancado/images/" + info.moves[selectedValue][selectedIndex].category + ".png"} alt="category move icon" />
                        </SecontLine>
                        <ThirdLine>
                            <MainText>power</MainText>
                            <SubText className="bg-color">
                                {
                                    info.moves[selectedValue][selectedIndex].power ? info.moves[selectedValue][selectedIndex].power : "---"
                                }
                            </SubText>
                        </ThirdLine>
                        <FourthLine>
                            <MainText>accuracy</MainText>
                            <SubText className="bg-color">
                                {
                                    info.moves[selectedValue][selectedIndex].accuracy ? info.moves[selectedValue][selectedIndex].accuracy : "---"
                                }
                            </SubText>
                        </FourthLine>
                    </StatsContainer>
                    <DescriptionContainer>
                        <Description>
                            <TextDescription>
                                <SubText>
                                    {info.moves[selectedValue][selectedIndex].description}
                                </SubText>
                            </TextDescription>
                        </Description>
                    </DescriptionContainer>
                </Container>
                : ''
            }
        </>
    )
}
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
    @media (max-width: 480px) {
        font-size: 29px;
        line-height: 32px;
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
    font-size: 40px;
    text-shadow: 2px 2px 3px #BCBCBC;
    line-height: 42px;
    @media (max-width: 480px) {
        font-size: 29px;
        line-height: 32px;
    }
`
const Container = styled.div`
    width: 500px;
    height: 380px;
    position: absolute;
    top: 0px;
    margin: 50px 0 0 -480px;
    box-shadow: -2px -2px 0 #32363B, 2px -2px 0 #32363B, -2px 2px 0 #32363B, 2px 2px 0 #32363B;
    border-radius: 20px;
    overflow: hidden;
    display: ${props => props.display};
    @media (max-width: 480px){
        width: 95.2%;
        height: 69%;
        border-radius: 30px;
        top: -52%;
        margin-left: 0;
        left: 4%;
    }
`
const StatsContainer = styled.div`
    height: 126px;
    background: repeating-linear-gradient(to bottom, #F8C8C0 0, #F8C8C0 32px, #F0A8A0 32px,  #F0A8A0 64px);
    background-color: #F8C8C0;
    text-transform: uppercase;
    padding: 0 30px;
    .bg-color {
        display: flex;
        align-items: center;
        justify-content: right;
        height: 42px;
        width: 80px;
        background-color: #F0F8F8;
        padding-right: 18px;
        border-radius: 20px;
    }
    @media (max-width: 480px) {
        height: 96px;
    }
`
const FirtLine = styled.div`
    height: 63px;
    background-color: #F88078;
    display: flex;
    gap: 20px;
    align-items: center;
    padding-left: 30px;
    border-bottom: 2px solid #D86058;
    @media (max-width: 480px){
        height: 56px;
        padding-left: 3px;
        gap: 10px;
        justify-content: space-evenly;
    }
`
const FirtLineContent = styled.div`
    display: flex;
    align-items: center;
`
const SpritePokemon = styled.img`
    width: 90px;
    transform: scaleX(-1);
    @media (max-width: 480px) {
        width: 80px;
    }
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
    @media (max-width: 480px) {
        width: 150px;
        .type {
            width: 90px;
            padding: 5px;
        }
    }
`
const SecontLine = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const CategoryIcon = styled.img`
    height: 34px;
    border-radius: 6px;
    @media (max-width: 480px) {
        height: 28px;
    }
`
const ThirdLine = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 480px) {
        height: 32px;
        .bg-color{
            height: 32px;
            width: 70px;
        }
    }
`
const FourthLine = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    .bg-color{
        background-color: #F2EFC0;
    }
    @media (max-width: 480px) {
        height: 32px;
        .bg-color{
            background-color: #F2EFC0;
            height: 32px;
            width: 70px;
        }
    }
`
const DescriptionContainer = styled.div`
    height: 191px;
    @media (max-width: 480px) {
        height: 167px;
    }
`
const Description = styled.div`
    height: 100%;
    overflow-y: auto;
    ::-webkit-scrollbar {
        background-color: #f5f5f5;
        height: 100px;
        border-radius: 6px;
    }
`
const BtnCloseContainer = styled.div`
    width: 40px;
    height: 40px;
    @media (max-width: 480px) {
        width: 30px;
        height: 30px;
        margin-right: 10px
    }
`
const BtnClose = styled.div`
    width: 100%;
    height: 100%;
    background-image: url("/Quest-React-Avancado/images/buton-icons/close.png");
    background-size: cover;
    cursor: pointer;
    transition: 0.2s ease;
    :hover{
        background-image: url("/Quest-React-Avancado/images/buton-icons/close-hover.png");
    }
    @media (max-width: 480px) {
        background-image: url("/Quest-React-Avancado/images/buton-icons/close-hover.png");
    }
`
const TextDescription = styled.div`
    min-height: 100%;
    width: 100%;
    background: repeating-linear-gradient( to bottom, #F0F8F8 0, #F0F8F8 42px, #E6E69E 42px, #E6E69E 84px);
    padding: 0 10px 0 15px;
    @media (max-width: 480px) {
        min-height: 100%;
        width: 100%;
        background: repeating-linear-gradient( to bottom, #F0F8F8 0, #F0F8F8 32px, #E6E69E 32px, #E6E69E 64px);
        padding: 0 10px 10px 15px;
    }
`