import './css/hover.css';
import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';

import { Button } from '../../button/button';
import { Cards } from '../card/card';
import { CirclePlus } from '../../svg/circlePlus';
import { MainBackground } from '../../global/mainBackground';
import { setPokedex } from '../../objects/pokedex';
import { ThemeContext } from '../../../context/themeContext';

export function Pokedex() {
    const [pokemons, setPokemons] = useState([]);
    const [selectFilter, setSelectFilter] = useState(0);
    const [limit, setLimit] = useState(10);
    const [filterName, setFilterName] = useState('');
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        const fetchData = async () => {
            const pokemonsData = filterName === '' ? await setPokedex(0, selectFilter, '') : await setPokedex(0, 0, filterName);
            const limitedPokedexData = pokemonsData.slice(0, 11);
            setPokemons(limitedPokedexData);
            setLimit(10);
        };
        fetchData();
    }, [selectFilter, filterName]);

    const addPokemon = async () => {
        if (pokemons.length === limit + 1) pokemons.pop();
        console.log(pokemons.length, '', limit);
        const newPokedexData = await setPokedex(pokemons.length, selectFilter, '');
        const limitedNewPokedexData = newPokedexData.slice(limit, limit + 11);
        selectFilter === 0 ? setPokemons([...pokemons, ...newPokedexData]) : setPokemons([...pokemons, ...limitedNewPokedexData]);
        setLimit(limit + 10)
    };

    return (
        <MainBackground filter={[selectFilter, setSelectFilter]} byName={[filterName, setFilterName]} isHome={true}>
            <PokeList>
                <Cards pokemons={pokemons} limit={limit} />
                {
                    pokemons.length - 1 === limit ?
                        <BtnLoadMore bgColor={theme.cardBackgroundColor} hoverColor={ theme.isLightMode? '#2372D9' : '#192A56'}>
                            <Button onClick={addPokemon} className="btn-load-more" id='btn-load-more'>
                                <CirclePlus />
                                <Text color={theme.text.main.color} shadow={theme.text.main.shadow}>Load More</Text>
                            </Button>
                        </BtnLoadMore>
                        :
                        ''
                }
            </PokeList>
        </MainBackground>
    );
}

export default Pokedex;

const PokeList = styled.ul`
    display: flex;
    max-width: 1200px;
    height: 410px;
    flex-wrap: wrap;
    overflow-y: auto;
    gap: 25px;
    justify-content: center;
    @media (max-width: 480px) {
        margin-right: 2%;
        gap: 3%;
        height: 100%;
    }
    @media (min-width: 480px) and (max-width: 850px) {
        height: 110%;
    }
`;
const Text = styled.p`
    font-family: 'Open Sans', Arial, sans-serif;
    color: ${props => props.color};
    font-size: 30px;
    text-shadow: ${props => props.shadow};
    font-weight: 500;
    border-width: 0;

`
const BtnLoadMore = styled.div`
    .btn-load-more {
        display: flex;
        background-color: ${props => props.bgColor};
        border-radius: 200px 70px 70px 200px;
        width: 250px;
        height: 112px;
        gap: 10px;
        transition: all 0.3s ease 0s;
        align-items: center;
        cursor: pointer;
    }
    .btn-load-more:hover{
        background-color: ${props => props.hoverColor};
    }
    .btn-load-more:hover path{
        color: #F8F8F8;
    }
`