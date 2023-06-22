import styled from "styled-components";

import { SubText } from "../../../../../../global/text";
import { TextContainer } from "./textContainer";

export const Stats = (props) => {
    const info = props.info;
    const display = props.display;
    
    return (
        <StatsContainer className="stats" display={display}>
            <TextContainer info={info}/>
            <Container>
                <SubText ClassName='stats-hp' FontSize='40px'>{info.stats.hp - 3}/{info.stats.hp}</SubText>
                <HPBar src="/Quest-React-Avancado/images/hp-bar.png" alt="hp bar" />
                <CombatStatus>
                    <SubText FontSize='40px'>{info.stats.attack}</SubText>
                    <SubText FontSize='40px'>{info.stats.defence}</SubText>
                    <SubText FontSize='40px'>{info.stats.specialAttack}</SubText>
                    <SubText FontSize='40px'>{info.stats.specialDefense}</SubText>
                    <SubText FontSize='40px'>{info.stats.speed}</SubText>
                </CombatStatus>
            </Container>
        </StatsContainer>
    )
}

const StatsContainer = styled.div`
    width: 40.625rem;
    height: 26.25rem;
    display: ${props => props.display};
    border-radius: 25px;
    background-color: #8891F8;
    position: relative;
    justify-content: right;
    box-shadow: -2px -2px 0 #32363B, 2px -2px 0 #32363B, -2px 2px 0 #32363B, 2px 2px 0 #32363B;
    overflow: hidden;
    @media (max-width: 767px) {
        border-radius: 1.875rem;
        overflow: hidden;
        top: -3rem;
        width: 100%;
        height: 18rem;
    .line{
        height: 29px;
        padding-left: 42px
        }
    .ability-name{
        height: 31px;
        font-size: 27px;
        }
    }
    @media (min-width: 768px) and (max-width: 991px) {
        position: relative;
        border-radius: 1.875rem;
        overflow: hidden;
        top: 0.5rem;
        width: 100%;
        height: 17rem;
    .line{
        height: 29px;
        padding-left: 42px
        }
    .ability-name{
        height: 29px;
        font-size: 27px;
        }
    }
`
const HPBar = styled.img`
    width: 250px;
    height: 20px;
    margin-left: 16px;
    @media (max-width: 991px) {
        display: flex;
        height: 12px;
        width: 80%;
        margin-left: 5px;
    }
`
const Container = styled.div`
    position: absolute;
    width: 50%;
    .stats-hp{
        height: 42px;
        width: 280px;
        background-color: #F0F8F8;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        @media (max-width: 991px) {
            height: 29px;
            width: 90%;
            /* margin-left: 0.8rem; */
        }
        @media (min-width: 768px) and (max-width: 991px){
            width: 86%;
        }
    }
`
const CombatStatus = styled.div`
    width: 200px;
    height: 210px;
    margin-left: 50px;
    margin-top: -5px;
    background: repeating-linear-gradient(to bottom, #F0F8F8 0, #F0F8F8 42px, #F0F0C0 42px,  #F0F0C0 84px);
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 991px) {
        width: 70%;
        height: 9.063rem;
        margin-left: 1rem;
        margin-top: 0;
        background: repeating-linear-gradient(to bottom, #F0F8F8 0, #F0F8F8 29px, #F0F0C0 29px,  #F0F0C0 58px);
    }
`