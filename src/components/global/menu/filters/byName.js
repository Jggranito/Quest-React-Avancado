import styled from "styled-components";
import { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../../../../context/themeContext";

export const FilterByName = (props) => {
    const [, setFilterName] = props.byName;
    const [tempFilterName, setTempFilterName] = useState('');
    const { theme } = useContext(ThemeContext)

    const handleChange = (e) => {
        setTempFilterName(e.target.value);
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            search()
        }
    }

    const search = () => {
        if (tempFilterName !== '') {
            setFilterName(tempFilterName.toLowerCase())
        }
    }

    const CleanFilter = () => {
        setFilterName('')
        setTempFilterName('')
    }

    return (
        <FilterByNameContainer bgColor={theme.filters.bgColor}>
            <Lupa onClick={() => search()} style={{}}>
                <img src='/Quest-React-Avancado/images/buton-icons/lupa.png' alt='Search' />
            </Lupa>
            <ByName type='text' value={tempFilterName} onChange={handleChange} onKeyDown={handleKeyDown} placeholder='name or id' />
            {
                tempFilterName !== '' ?
                    <BtnClear onClick={() => CleanFilter()}>
                        <img src='/Quest-React-Avancado/images/buton-icons/close2.png' alt='Close' />
                    </BtnClear>
                    :
                    <BtnClear />
            }
        </FilterByNameContainer>
    )
}

const FilterByNameContainer = styled.div`
    width: 300px;
    height: 35px;
    background-color: ${props => props.bgColor};
    padding: 0 10px 0 14px;
    border-radius: 25px;
    line-height: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    @media (max-width: 480px){
        width: 50%;
        gap: 0;
    }
    @media (min-width: 480px) and (max-width: 800px){
        width: 40%;
        height: 1.875rem;
    }
`
const Lupa = styled.div`
    width: 15%;
    
    img{
        width: 70%;
        cursor: pointer;
    }

    @media (max-width: 480px) {
        width: 2%;
        margin-left: -5%;

        img{
            width: 700%;
        }
    }
`
const ByName = styled.input`
    width: 70%;
    height: 30px;
    border: none;
    background-color: transparent;
    outline: none;
    color: #252A30;
    text-transform: capitalize;
    font-size: 28px;
    text-shadow: 1px 1px 3px #BCBCBC;

    span{
        width: 10%;
    }

    @media (max-width: 480px) {
        width: 65%;
        font-size: 22px;
    }
`
const BtnClear = styled.div`
    width: 10%;
    cursor: pointer;

    img{
        width: 70%;
    }

    @media (max-width: 480px) {
        width: 2%;
        margin-right: 10%;

        img{
            width: 550%;
        }
    }
`