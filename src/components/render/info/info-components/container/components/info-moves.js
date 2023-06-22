import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { MainText, SubText } from "../../../../../global/text";

export const InfoMoves = (props) => {
    const info = props.info;
    const display = props.display;
    const selectedValue = props.selectedValue;
    const [selectedIndex, setSelectIndex] = props.selectedIndex;
    const [isOpen, setIsOpen] = props.isOpen;
    const { state: { pokemon } } = useLocation();

    const handleClose = () => {
        setIsOpen(false);
        setSelectIndex('0');
    }

    return (
        <>
            {info.moves[selectedValue][selectedIndex] ?
                <Container className="move-info" display={display === 'flex' ? (isOpen ? 'block' : 'none') : 'none'}>
                    <FirtLine>
                        <FirtLineContent>
                            <SpritePokemon src={pokemon.sprites.spriteVIIIGen} alt='pokemon icon' />
                            <TextFirtLine>
                                <MainText ClassName={'type type-' + pokemon.types[1]} FontSize='40px'>{pokemon.types[1]}</MainText>
                                {
                                    pokemon.types[2] ? <MainText ClassName={'type type-' + pokemon.types[2]} FontSize='40px'>{pokemon.types[2]}</MainText> : ''
                                }
                            </TextFirtLine>
                        </FirtLineContent>
                        <BtnCloseContainer onClick={handleClose}>
                            <BtnClose />
                        </BtnCloseContainer>
                    </FirtLine>
                    <StatsContainer>
                        <SecontLine>
                            <MainText ClassName='line' FontSize='40px' height='42px'>category</MainText>
                            <CategoryIcon src={"/Quest-React-Avancado/images/" + info.moves[selectedValue][selectedIndex].category + ".png"} alt="category move icon" />
                        </SecontLine>
                        <ThirdLine>
                            <MainText ClassName='line' FontSize='40px' height='42px'>power</MainText>
                            <SubText ClassName="bg-color line" FontSize='40px'>
                                {
                                    info.moves[selectedValue][selectedIndex].power ? info.moves[selectedValue][selectedIndex].power : "---"
                                }
                            </SubText>
                        </ThirdLine>
                        <FourthLine>
                            <MainText ClassName='line' FontSize='40px' height='42px'>accuracy</MainText>
                            <SubText ClassName="bg-color line" FontSize='40px'>
                                {
                                    info.moves[selectedValue][selectedIndex].accuracy ? info.moves[selectedValue][selectedIndex].accuracy : "---"
                                }
                            </SubText>
                        </FourthLine>
                    </StatsContainer>
                    <DescriptionContainer>
                        <Description>
                            <TextDescription>
                                <SubText FontSize='40px'>
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
const Container = styled.div`
    width: 31.25rem;
    height: 23.75rem;
    position: absolute;
    top: 0px;
    margin: 50px 0 0 -480px;
    box-shadow: -2px -2px 0 #32363B, 2px -2px 0 #32363B, -2px 2px 0 #32363B, 2px 2px 0 #32363B;
    border-radius: 20px;
    overflow: hidden;
    display: ${props => props.display};
    @media (max-width: 767px){
        width: 100%;
        height: 16.9rem;
        border-radius: 1.875rem;
        top: -24.8rem;
        margin-left: 0;
        .line{
            font-size: 30px;
            height: 32px;
        }
    }
    @media (min-width: 768px) and (max-width: 991px){
        width: 90%;
        height: 14.5rem;
        border-radius: 1.875rem;
        margin: 0;
        top: 3rem;
        right: 22rem;
        .line{
            font-size: 30px;
            height: 32px;
        }
    }
`
const StatsContainer = styled.div`
    height: 126px;
    background: repeating-linear-gradient(to bottom, #F8C8C0 0, #F8C8C0 42px, #F0A8A0 42px,  #F0A8A0 84px);
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
    @media (max-width: 991px) {
        background: repeating-linear-gradient(to bottom, #F8C8C0 0, #F8C8C0 32px, #F0A8A0 32px,  #F0A8A0 64px);
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
    @media (max-width: 991px){
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
    @media (max-width: 991px) {
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
    @media (max-width: 991px) {
        width: 150px;
        .type {
            width: 90px;
            height: 2rem;
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
    @media (max-width: 991px) {
        height: 28px;
    }
`
const ThirdLine = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 991px) {
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
    @media (max-width: 991px) {
        height: 32px;
        .bg-color{
            background-color: #F2EFC0;
            height: 32px;
            width: 70px;
        }
    }
`
const DescriptionContainer = styled.div`
    height: 11.938rem;
    @media (max-width: 991px) {
        height: 7.5rem;
    }
`
const Description = styled.div`
    height: 100%;
    overflow-y: auto;
    ::-webkit-scrollbar {
        background-color: #f5f5f5;
        height: 6.25rem;
        border-radius: 0.375rem;
    }
    @media (min-width: 768px) and (max-width: 991px){
        height: 92%;
    }
`
const BtnCloseContainer = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    @media (max-width: 991px) {
        width: 1.875rem;
        height: 1.875rem;
        margin-right: 0.625rem;
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
    @media (max-width: 991px) {
        background-image: url("/Quest-React-Avancado/images/buton-icons/close-hover.png");
    }
`
const TextDescription = styled.div`
    min-height: 100%;
    width: 100%;
    background: repeating-linear-gradient( to bottom, #F0F8F8 0, #F0F8F8 42px, #E6E69E 42px, #E6E69E 84px);
    padding: 0 10px 0 15px;
    @media (max-width: 991px) {
        min-height: 100%;
        width: 100%;
        background: repeating-linear-gradient( to bottom, #F0F8F8 0, #F0F8F8 30px, #E6E69E 30px, #E6E69E 60px);
        padding: 0 10px 10px 15px;
    }
    @media (min-width: 768px) and (max-width: 991px){
        padding: 0 10px 30px 15px;
    }
`