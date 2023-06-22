import styled from "styled-components";
import { FilterByType } from "./filters/byType"
import { FilterByName } from "./filters/byName";
import { ThemeContext, themes } from '../../../context/themeContext';
import { useContext } from "react";
import { AnimatedIconTheme } from '../../svg/sunAndMon';
import { Link } from "react-router-dom"

export const Menu = (props) => {
    const [selectFilter, setSelectFilter] = props.filter;
    const [filterName, setFilterName] = props.byName;
    const { theme, setTheme } = useContext(ThemeContext)
    const isHome = props.isHome

    return (
        <BgMenu background={theme.menu}>
            {
                isHome ?
                    <Filters>
                        <FilterByType filter={[selectFilter, setSelectFilter]} />
                        <FilterByName byName={[filterName, setFilterName]} />
                    </Filters>
                    :
                    <Link className="menu-back-btn" to="/Quest-React-Avancado">
                        <p className="menu-sub-text">Go Back</p>
                    </Link>
            }
            <ToggleTheme onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)} width={isHome? '5.7rem' : '2.188rem'} widthLandscape={isHome? '2.978rem' : '1.875rem'}>
                <AnimatedIconTheme />
            </ToggleTheme>
        </BgMenu>
    )
}

const BgMenu = styled.nav`
    width: 100%;
    height: 9%;
    padding: 0 70px;
    background: ${props => props.background};
    background-size: auto 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 480px) {
        padding: 0 15px;
        height: 7%;
    }
    @media (min-width: 480px) and (max-width: 800px){
        height: 10%;
    }

    .menu-back-btn{
        background-color: #f8f8f8;
        color: #242C35;
        border-radius: 30px;
        padding: 3px 10px;
        transition: 0.3s ease 0.1s;
        display: flex;
        @media (max-width: 480px) {
            height: 2.2rem;
            margin-top: 0.25rem;
            padding: 0 16px;
            align-items: center;
        }
        @media (min-width: 480px) and (max-width: 800px) {
            height:80%;
            padding: 0 10px;
            align-items: center;
        }
    }

    .menu-sub-text {
        font-size: 32px;
        line-height: 32px;
    }

    .menu-back-btn:hover{
        background-color: #242C35;
        color: #f8f8f8;

    }
`
const Filters = styled.div`
    display: flex;
    align-items: flex-start;
    padding-top: 0.6rem;
    gap: 40px;
    z-Index: 1;
    height: 50px;

    @media (max-width: 480px) {
        gap: 10px;
    }
`
const ToggleTheme = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: 2.188rem;
    height: 2.188rem;
    border-radius: 20px;
    cursor: pointer;
    margin-right: 5%;

    @media (max-width: 480px) {
        width: ${props => props.width};
        height: 62.5%;
    }
    @media (min-width: 480px) and (max-width: 800px){
        width: ${props => props.widthLandscape};
        height: 80%;
    }
`