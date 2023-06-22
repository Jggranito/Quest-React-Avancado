import styled from "styled-components"
import { useLocation } from "react-router-dom"
import { useContext } from "react"
import { ThemeContext } from "../../../../../../context/themeContext"
import { MainText, SubText } from "../../../../../global/text"

export const General = (props) => {
    const { state: { pokemon } } = useLocation()
    const info = props.info
    const display = props.display
    const { theme } = useContext(ThemeContext)

    return (
        <GeneralContainer className="general" display={display}>
            <TextContainer>
                <MainText ClassName='bg-color' padding='0 0 0 40px' height='50px' FontSize='40px'>Pokédex No.</MainText>
                <MainText padding='0 0 0 40px' height='50px' FontSize='40px'>Name</MainText>
                <MainText ClassName='bg-color' padding='0 0 0 40px' height='50px' FontSize='40px'>Type</MainText>
                <MainText padding='0 0 0 40px' height='50px' FontSize='40px'>Exp. Points</MainText>
                <EmpyLine className='bg-color' color={theme.text.main.color} shadow={theme.text.main.shadowHigh}></EmpyLine>
                <MainText padding='0 0 0 40px' height='50px' FontSize='40px'>To Next Lv.</MainText>
                <EmpyLine className='bg-color last-line' color={theme.text.main.color} shadow={theme.text.main.shadowHigh}></EmpyLine>
            </TextContainer>
            <StatsContainer>
                <MainStatus>
                    <Div>
                        <SubText FontSize='40px'>{pokemon.id}</SubText>
                    </Div>
                    <Div>
                        <SubText transform={'uppercase'}  FontSize='40px'>{pokemon.name}</SubText>
                    </Div>
                    <TypesContainer>
                        <MainText ClassName={`type type-${pokemon.types[1]}`} FontSize='40px'>{pokemon.types[1]}</MainText>
                        {
                            pokemon.types[2] ?
                                    <MainText ClassName={`type type-${pokemon.types[2]}`} FontSize='40px'>{pokemon.types[2]}</MainText>
                                : ''
                        }
                    </TypesContainer>
                </MainStatus>
                <EmpyLine />
                <StatsBgLine>
                    <SubText FontSize='40px'>{info.stats.exp}</SubText>
                </StatsBgLine>
                <EmpyLine />
                <ContainerNextLevel>
                    <StatsBgLine >
                        <SubText FontSize='40px'>{parseInt(info.stats.nextLevel)}</SubText>
                    </StatsBgLine>
                    <XPBarContainer className="xp-bar">
                        <MainText FontSize='40px'>EXP </MainText>
                        <XPBar className="xp-bar-img" src='/Quest-React-Avancado/images/xp-bar2.png' alt="xp bar" />
                    </XPBarContainer>
                </ContainerNextLevel>
            </StatsContainer>
        </GeneralContainer>
    )
}

const GeneralContainer = styled.div`
    width: 40.625rem;
    height: 26.25rem;
    border-radius: 25px;
    background-color: #85DE8C;
    padding-top: 25px;
    justify-content: right;
    box-shadow: -2px -2px 0 #32363B, 2px -2px 0 #32363B, -2px 2px 0 #32363B, 2px 2px 0 #32363B;
    display: ${props => props.display};
    @media (max-width: 767px) {
        position: relative;
        border-radius: 1.875rem;
        overflow: hidden;
        top: -3rem;
        width: 100%;
        height: 18rem;
        padding-top: 0.625rem;
    }
    @media (min-width: 768px) and (max-width: 991px){
        position: relative;
        border-radius: 1.875rem;
        overflow: hidden;
        top: 0.5rem;
        width: 100%;
        height: 17rem;
        padding-top: 0.3rem;
    }
`
const Div = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 967px) {
        height: 35px;
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
const EmpyLine = styled.div`
    width: 100%;
    height: 50px;
    @media (max-width: 967px){
        height: 30px;
    }
`
const StatsContainer = styled.div`
    position: absolute;
    width: 50%;
    height: 100%;
    @media (max-width: 967px) {
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
    @media (max-width: 967px) {
        width: 168%;
        height: 105px;
        background: repeating-linear-gradient(to bottom, #F0F0C0 0, #F0F0C0 35px, #F0F8F8 35px, #F0F8F8 70px);

        .type {
            height: 1.75rem;
            padding: 6px;
            margin-top: 2px;
            font-size: 20px;
        }
    }
    @media (min-width: 768px) and (max-width: 991px){
        width: 150%;
        .type{
            height: 1.875rem;
        }
    }
`
export const TypesContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    text-transform: uppercase;
    @media (max-width: 967px) {
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
    @media (max-width: 967px) {
        width: 168%;
        height: 30px;
        margin-top: 5px;
        padding-right: 25px;
    }
    @media (min-width: 768px) and (max-width: 991px){
        width: 150%;
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
    @media (max-width: 967px) {
        .xp-bar{
            display: flex;
            justify-content: flex-start;
            margin-left: -50%;
        }
        .xp-bar-img{
            width: 39%;
            height: 12px;
        }
    }
    @media (min-width: 768px) and (max-width: 991px){
        .xp-bar-img{
            width: 45%;
        }
    }
`