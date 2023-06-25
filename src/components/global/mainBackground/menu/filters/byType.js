import styled from "styled-components";
import { useState, useContext } from "react";
import { SubText } from "../../../text";
import { ThemeContext } from "../../../../../context/themeContext"

export const FilterByType = (props) => {
    const [selectFilter, setSelectFilter] = props.filter;
    const [display, setDisplay] = useState('none');
    const [heightFilter, setHeightFilter] = useState('35px');
    const [heightFilterMobile, setHeightFilterMobile] = useState('1.875rem');
    const [widthFilterMobile, setWidthFilterMobile] = useState('110px');
    const { theme } = useContext(ThemeContext)

    const types = [
        { name: 'all', icon: '/Quest-React-Avancado/types-icon/all.png' },
        { name: 'normal', icon: '/Quest-React-Avancado/types-icon/normal.png' },
        { name: 'fighting', icon: '/Quest-React-Avancado/types-icon/fighting.png' },
        { name: 'flying', icon: '/Quest-React-Avancado/types-icon/flying.png' },
        { name: 'poison', icon: '/Quest-React-Avancado/types-icon/poison.png' },
        { name: 'ground', icon: '/Quest-React-Avancado/types-icon/ground.png' },
        { name: 'rock', icon: '/Quest-React-Avancado/types-icon/rock.png' },
        { name: 'bug', icon: '/Quest-React-Avancado/types-icon/bug.png' },
        { name: 'ghost', icon: '/Quest-React-Avancado/types-icon/ghost.png' },
        { name: 'steel', icon: '/Quest-React-Avancado/types-icon/steel.png' },
        { name: 'fire', icon: '/Quest-React-Avancado/types-icon/fire.png' },
        { name: 'water', icon: '/Quest-React-Avancado/types-icon/water.png' },
        { name: 'grass', icon: '/Quest-React-Avancado/types-icon/grass.png' },
        { name: 'electric', icon: '/Quest-React-Avancado/types-icon/electric.png' },
        { name: 'psychic', icon: '/Quest-React-Avancado/types-icon/psychic.png' },
        { name: 'ice', icon: '/Quest-React-Avancado/types-icon/ice.png' },
        { name: 'dragon', icon: '/Quest-React-Avancado/types-icon/dragon.png' },
        { name: 'dark', icon: '/Quest-React-Avancado/types-icon/dark.png' },
        { name: 'fairy', icon: '/Quest-React-Avancado/types-icon/fairy.png' }
    ];

    const handleDisplay = (filter, key) => {
        setDisplay(filter);
        setSelectFilter(key);
        filter === 'none' ? setHeightFilter('35px') : setHeightFilter('500px')
        filter === 'none' ? setHeightFilterMobile('1.875rem') : setHeightFilterMobile('320px')
        filter === 'none' ? setWidthFilterMobile('110px') : setWidthFilterMobile('200px')
    }

    return (
        <FilterByTypeContainer heightFilter={heightFilter} bgColor={theme.filters.bgColor} widthFilterMobile={widthFilterMobile} heightFilterMobile={heightFilterMobile}>
            <FilterByTypeDisable onClick={display === 'none' ? () => handleDisplay('flex', selectFilter) : () => handleDisplay('none', selectFilter)}>
                <Div hoverBgColor={theme.filters.hoverBgColor}>
                    <SubText FontSize='28px'>Type: </SubText>
                    <FilterByTyeSelected>
                        <Img src={types[selectFilter].icon} alt={`type ${types[selectFilter].name}`} />
                        <SubText ClassName='filter-tittle' FontSize='28px'>{`  ${types[selectFilter].name}`}</SubText>
                    </FilterByTyeSelected>
                </Div>
            </FilterByTypeDisable>
            <FilterByTypeActive display={display}>
                {
                    types.map((type, index) => (
                        <FilterByTypeList key={index} hoverBgColor={theme.filters.hoverBgColor}>
                            <li key={index} onClick={() => handleDisplay('none', index)}>
                                <img src={type.icon} alt={`type ${type.name}`} />
                                <SubText FontSize='28px'>{type.name}</SubText>
                            </li>
                            <hr />
                        </FilterByTypeList>
                    ))
                }
            </FilterByTypeActive>
        </FilterByTypeContainer>
    )
}
const FilterByTypeContainer = styled.div`
    width: 250px;
    height: ${props => props.heightFilter};
    background-color: ${props => props.bgColor};
    padding: 0px 10px 0 10px;
    border-radius: 17px;
    overflow: hidden;
    transition: all 0.2s ease 0s;
    line-height: 0;
    cursor: pointer;
    @media (max-width: 767px){
        width: ${props => props.widthFilterMobile};
        padding: 2px 0 0 10px;
    }
    @media (min-width: 768px) and (max-width: 991px){
        width: 40%;
        height: ${props => props.heightFilterMobile};
        p{
            line-height: 30px;
        }
    }
`
const FilterByTypeDisable = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
`
const Div = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    width: 110%;
    height: 100%;
    padding-left: 5%;
    margin: -2% 0;
    :hover{
        background-color: ${props => props.hoverBgColor};
        width: 110%;
        height: 100%;
        margin: -2% -5%;
        padding-left: 10%;
    }
    @media (max-width: 767px) {
        p{
            line-height: 30px;
        }
        line-height: 30px;
        margin-top: -0.4%;
        padding-left: 1%;
        :hover{
            width: 110%;
            margin: -2% -10%;
            padding: 1.7% 0 4% 11%;
        }
    }
    @media (min-width: 768px) and (max-width: 991px) {
        margin: 0;
        align-items: self-start;
        :hover{
            width: 110%;
            margin: 0 -5%;
            padding-left: 10%;
        }
    }
`
const FilterByTyeSelected = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    .filter-tittle{
        line-height: 0px;
        @media (max-width: 767px){
            display: none;
        }
    }
`
const Img = styled.img`
    width: 25px;
    padding-top: 3px;
`
const FilterByTypeActive = styled.div`
    padding: 10px;
    flex-direction: column;
    margin-top: 10px;
    overflow-y: scroll;
    height: 450px;
    display: ${props => props.display};
    cursor: pointer;
    @media (max-width: 767px) {
        padding: 0;
        p{
            line-height: 42px;
        }
    }
    @media (min-width: 768px) and (max-width: 991px){
        padding: 0;
        height: 86%;
        p{
            line-height: 42px;
        }
    }
`
const FilterByTypeList = styled.ul`
    li {
        display: flex;
        align-items: center;
        gap: 10px;
        line-height: 50px;
        padding-left: 5%;
        img {
            width: 28px;
            height: 28px;
        }
        hr {
            width: 107%;
            margin-left: -14px;
            border-top-color: rgba(56, 56, 56, 0.3);
        }
        :hover{
            background-color: ${props => props.hoverBgColor};
        }
    }
`