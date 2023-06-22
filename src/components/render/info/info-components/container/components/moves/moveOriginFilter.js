import { useContext, useState } from "react";
import styled from "styled-components"

import { ThemeContext } from "../../../../../../../context/themeContext";
import { MainText } from "../../../../../../global/text";

export const MoveOriginFilter = (props) => {
    const { theme } = useContext(ThemeContext);
    const [arrowController, setArrowController] = useState(1);
    const [selectedValue, setSelectedValue] = props.value

    console.log(selectedValue)

    const handleChange = (event) => {
        setSelectedValue(event);
    }

    const controller = (i) => {
        const newArrowController = arrowController + i;
        const options = {
            1: 'levelUp',
            2: 'tm',
            3: 'egg',
            4: 'tutor',
        };
        const selectedValue = options[newArrowController];
        setArrowController(newArrowController);
        setSelectedValue(selectedValue);
    }

    return (
        <SwitchStats>
            <Container>
                <Options className="desktop" colorDisable={theme.text.disabled.color} underLine={theme.text.disabled.underLineColor}>
                    <MainText FontSize='40px'>Moves learnt by:</MainText>
                    <div onClick={() => handleChange('levelUp')}>
                        <MainText ClassName={(selectedValue === 'levelUp') ? "select" : "disable"} FontSize='40px'>Level up</MainText>
                    </div>
                    <div onClick={() => handleChange('tm')}>
                        <MainText ClassName={(selectedValue === 'tm') ? "select" : "disable"} FontSize='40px'>TM</MainText>
                    </div>
                    <div onClick={() => handleChange('egg')}>
                        <MainText ClassName={(selectedValue === 'egg') ? "select" : "disable"} FontSize='40px'>Egg</MainText>
                    </div>
                    <div onClick={() => handleChange('tutor')}>
                        <MainText ClassName={(selectedValue === 'tutor') ? "select" : "disable"} FontSize='40px'>Tutor</MainText>
                    </div>
                </Options>
                <OptionsMobile className="mobile">
                    <MainText ClassName="text">Moves by:</MainText>
                    {
                        arrowController > 1 ?
                            <ArrowContainer onClick={() => controller(-1)}>
                                <Arrow className="btn" src="/Quest-React-Avancado/images/buton-icons/arrow.png" />
                            </ArrowContainer>
                            :
                            <ArrowContainer>
                                <Arrow className="disabled" src="/Quest-React-Avancado/images/buton-icons/arrow.png" />
                            </ArrowContainer>
                    }
                    <MainText ClassName={(selectedValue === 'levelUp') ? "select" : "disable"} onClick={() => handleChange('levelUp')} FontSize='40px'>Level</MainText>
                    <MainText ClassName={(selectedValue === 'tm') ? "select" : "disable"} onClick={() => handleChange('tm')} FontSize='40px'>TM</MainText>
                    <MainText ClassName={(selectedValue === 'egg') ? "select" : "disable"} onClick={() => handleChange('egg')} FontSize='40px'>Egg</MainText>
                    <MainText ClassName={(selectedValue === 'tutor') ? "select" : "disable"} onClick={() => handleChange('tutor')} FontSize='40px'>Tutor</MainText>
                    {
                        arrowController < 4 ?
                            <ArrowContainer className="btn-area" onClick={() => controller(1)}>
                                <Arrow className="btn right" src="/Quest-React-Avancado/images/buton-icons/arrowR.png" />
                            </ArrowContainer>
                            :
                            <ArrowContainer>
                                <Arrow className="disabled right" src="/Quest-React-Avancado/images/buton-icons/arrowR.png" />
                            </ArrowContainer>
                    }
                </OptionsMobile>
            </Container>
        </SwitchStats>
    )
}
const SwitchStats = styled.div`
    width: 100%;
    height: 42px;
    display: flex;
    align-items: center;
    padding-left: 30px;
    @media (max-width: 991px) {
        height: 32px;
        padding-left: 10px;
    }
`
const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin: 10px 0;
    border-radius: 5px;
    color: #333333;
    padding: 4px 10px;
    border-radius: 20px;
    gap: 25px;
    cursor: default;
    .mobile{
        display: none;
    }
    @media (max-width: 991px) {
        margin: 0;
        .desktop{
            display: none;
        }
        .mobile {
            display: flex;
            align-items: center;
        }
    }
`
const Options = styled.div`
    display: flex;
    gap: 20px;
    .disable{
        cursor: pointer;
        color: ${props => props.colorDisable};
    }
    .select{
        text-decoration: underline ${props => props.underLine};
    }
`
const OptionsMobile = styled.div`
    gap: 10px;
    .disable{
        display: none;
    }
    .disabled{
        filter: grayscale(100%);
    }
    .select{
        width: 4rem;
        text-align: center;
    }
    .text {
        margin: 0;
    }
    .right {
        margin-left: 10px;
    }
    @media (max-width: 991px) {
        .desktop {
            display: none;
        }
    }
`
const ArrowContainer = styled.div`
    width: 42px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 991px) {
        width: 32px;
        height: 32px;
    }
`
const Arrow = styled.img`
    height: 20px;
`