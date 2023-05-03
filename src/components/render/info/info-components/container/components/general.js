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
                <StatsBgLine >
                    <SubText >{parseInt(info.stats.nextLevel)}</SubText>
                </StatsBgLine>
                <XPBarContainer >
                    <MainText className='text'>EXP </MainText>
                    <XPBar src='/Quest-React-Avancado/images/xp-bar2.png' alt="xp bar" />
                </XPBarContainer>
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
    line-height: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 40px;
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
    line-height: 50px;
`
const EmpyLine = styled.div`
    width: 100%;
    height: 50px;
`
const StatsContainer = styled.div`
    position: absolute;
    width: 50%;
    height: 100%;
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
`
export const TypesContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    text-transform: uppercase;
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