import styled from "styled-components"
import { useLocation } from "react-router-dom"

export const General = (props) => {
    const { state: { pokemon } } = useLocation()
    const info = props.info
    const display = props.display

    return (
        <GeneralContainer className="general" display={display}>
            <TextContainer>
                <MainText className='bg-color'>Pokédex No.</MainText>
                <MainText>Name</MainText>
                <MainText className='bg-color' >Type</MainText>
                <MainText>Exp. Points</MainText>
                <EmpyLine className='bg-color' ></EmpyLine>
                <MainText className='text' >To Next Lv.</MainText>
                <EmpyLine className='bg-color last-line' ></EmpyLine>
            </TextContainer>
            <StatsContainer>
                <MainStatus>
                    <SubText >{pokemon.id}</SubText>
                    <SubText >{pokemon.name}</SubText>
                    <TypesContainer>
                        <MainText className={'type type-' + pokemon.types[1]} >{pokemon.types[1]}</MainText>
                        {
                            pokemon.types[2] ? <MainText className={'type type-' + pokemon.types[2]}>{pokemon.types[2]}</MainText> : ''
                        }
                    </TypesContainer>
                </MainStatus>
                <EmpyLine />
                <StatsBgLine>
                    <SubText>{info.stats.exp}</SubText>
                </StatsBgLine>
                <EmpyLine />
                <ContainerNextLevel>
                    <StatsBgLine >
                        <SubText >{parseInt(info.stats.nextLevel)}</SubText>
                    </StatsBgLine>
                    <XPBarContainer className="xp-bar">
                        <MainText className="text">EXP </MainText>
                        <XPBar className="xp-bar-img" src='/Quest-React-Avancado/images/xp-bar2.png' alt="xp bar" />
                    </XPBarContainer>
                </ContainerNextLevel>
            </StatsContainer>
        </GeneralContainer>
    )
}

const GeneralContainer = styled.div`
    width: 650px;
    height: 420px;
    border-radius: 25px;
    background-color: #85DE8C;
    padding-top: 25px;
    justify-content: right;
    box-shadow: -2px -2px 0 #32363B, 2px -2px 0 #32363B, -2px 2px 0 #32363B, 2px 2px 0 #32363B;
    display: ${props => props.display};
    @media (max-width: 480px) {
        position: relative;
        border-radius: 30px;
        overflow: hidden;
        top: 34.1%;
        margin-left: 4%;
        width: 95%;
        height: 62%;
        padding-top: 10px;
    }
`

const TextContainer = styled.div`
    width: 100%;
    .bg-color{
        background-color: #74BD74;
    }
    .last-line{
        height: 95px;
        border-radius: 0 0 25px 25px;
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
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 40px;
    @media (max-width: 480px) {
        font-size: 29px;
        padding-left: 15px;
        height: 35px;
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
    height: 50px;
    @media (max-width: 480px) {
        font-size: 29px;
        height: 35px;
    }
`
const EmpyLine = styled.div`
    width: 100%;
    height: 50px;
    @media (max-width: 480px){
        height: 30px;
    }
`
const StatsContainer = styled.div`
    position: absolute;
    width: 50%;
    height: 100%;
    @media (max-width: 480px) {
        width: 28%;
        margin-right: 60px;
    }
`
const MainStatus = styled.div`
    width: 300px;
    height: 150px;
    margin-right: 30px;
    border-radius: 25px;
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
    background: repeating-linear-gradient(to bottom, #F0F0C0 0, #F0F0C0 50px, #F0F8F8 50px, #F0F8F8 100px);
    .type {
        height: 45px;
        padding: 20px;
        margin-top: 2px;
    }
    @media (max-width: 480px) {
        width: 168%;
        height: 105px;
        background: repeating-linear-gradient(to bottom, #F0F0C0 0, #F0F0C0 35px, #F0F8F8 35px, #F0F8F8 70px);

        .type {
            height: 28px;
            padding: 6px;
            margin-top: 2px;
            font-size: 20px;
        }
    }
`
export const TypesContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    text-transform: uppercase;
    @media (max-width: 480px) {
        gap: 7px;
    }
`

const StatsBgLine = styled.div`
    width: 300px;
    height: 50px;
    background-color: #F0F8F8;
    border-radius: 25px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 70px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
    @media (max-width: 480px) {
        width: 168%;
        height: 30px;
        margin-top: 5px;
        padding-right: 25px;
    }
`
const XPBarContainer = styled.div`
    display: flex;
    width: 300px;
    align-items: center;
    justify-content: center;
    gap: 5px;
`
const XPBar = styled.img`
    margin-right: 90px;
    width: 250px;
`
const ContainerNextLevel = styled.div`
    @media (max-width: 420px) {
        .xp-bar{
            display: flex;
            justify-content: flex-start;
        }
        .xp-bar-img{
            width: 39%;
            height: 12px;
        }
        .text {
            text-shadow: none;
            font-size: 25px;
            margin-left: -13%;
        }
    }
`