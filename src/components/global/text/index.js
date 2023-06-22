import { useContext } from "react"
import styled from "styled-components"
import { ThemeContext } from "../../../context/themeContext"

export const MainText = (props) => {
    const { theme } = useContext(ThemeContext)
    const { height } = props;
    const { padding } = props.padding ? props : '0';
    const { ClassName } = props.ClassName ? props : '';
    const { FontSize } = props.FontSize ? props : '40px';
    return (
        <Main
            className={ClassName}
            color={theme.text.main.color}
            shadow={theme.text.main.shadowHigh}
            height={height}
            padding={padding}
            fontSize={FontSize}
        >
            {props.children}
        </Main>
    )
}

export const SubText = (props) => {
    const { transform } = props.transform ? props : 'none';
    const { theme } = useContext(ThemeContext);
    const { ClassName } = props.ClassName ? props : '';
    const { FontSize } = props.FontSize ? props : '40px';
    return (
        <Sub
            className={ClassName}
            color={theme.text.subText.color}
            shadow={theme.text.subText.shadow}
            transform={transform}
            fontSize={FontSize}
            >
            {props.children}
        </Sub>
    )
}

const Main = styled.p`
    color: ${props => props.color};
    font-size: ${props => props.fontSize};
    text-shadow: ${props => props.shadow};
    height: ${props => props.height};
    display: flex;
    align-items: center;
    padding: ${props => props.padding};
    @media (max-width: 980px) {
        font-size: 30px;
        padding-left: 15px;
        height: 35px;
        text-shadow: 1px 1px 1px #32363B;
    }
`
const Sub = styled.p`
    color: ${props => props.color};
    font-size: ${props => props.fontSize};
    text-transform: ${props => props.transform};
    text-shadow: ${props => props.shadow};
    line-height: 42px;
    @media (max-width: 980px) {
        font-size: 29px;    
        line-height: 30px;
    }
`