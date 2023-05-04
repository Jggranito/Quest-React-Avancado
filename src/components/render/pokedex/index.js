import './css/reset.css'
import './css/hover.css'
import { setPokedex } from '../../objects/pokedex';
import React, { useEffect, useState } from 'react';
import { Button } from '../../button/button';
import { Cards } from '../card/card';
import styled from 'styled-components';

export function Pokedex() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const pokemonsData = await setPokedex(0);
            setPokemons(pokemonsData);
        };
        fetchData();
    }, []);

    const addPokemon = async () => {
        const newPokedexData = await setPokedex(pokemons.length);
        setPokemons([...pokemons, ...newPokedexData]);
    };

    return (
        <BgImage>
            <Menu>
                <PokedexLogo src='/Quest-React-Avancado/images/pokedex.png' alt='pokedex logo' />
            </Menu>
            <Container>
                <PokedexContainer>
                    <Border>
                        <section>
                            <PokeList>
                                <Cards pokemons={pokemons} />
                                <BtnLoadMore>
                                    <Button onClick={addPokemon} className="btn-load-more" id='btn-load-more'>
                                        <CirclePlus>
                                            <Svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-plus" className="svg-circle-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"></path></Svg>
                                        </CirclePlus>
                                        <Text>Load More</Text>
                                    </Button>
                                </BtnLoadMore>
                            </PokeList>
                        </section>
                    </Border>
                </PokedexContainer>
            </Container>
        </BgImage>
    );
}

export default Pokedex;

export const BgImage = styled.div`
    background: url('/Quest-React-Avancado/images/background.jpg') no-repeat center center fixed;
    background-size: cover;
    overflow: hidden;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.section`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    padding: 0 22px;
    @media (max-width: 480px) {
        margin-bottom: 50px;
    }
`;

export const PokedexContainer = styled.div`
    width: 100%;
    max-width: 1268px;
    height: 537px;
    background-color: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(10px);
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
    transition: all 0.3s ease 0s;
    border-radius: 50px;
    @media (max-width: 480px) 
    { 
        height: 98%;
        padding: 10px;
    }

    .more-info{
        position: relative;
        display: flex;
        gap: 95px;
        flex-wrap: wrap;

        @media screen {
            position: static;
        }
    }
`;

export const Border = styled.div`
    width: 100%;
    height: 100%;
    border: 2px solid rgba(255, 255, 255, 0.25);
    border-radius: 50px;
    padding: 47px;
    transition: all 0.3s ease 0s;
    @media (max-width: 480px) { 
        padding: 15px 10px 0 0;
        display: flex;
        border-radius: 40px;
    };
`;

const PokeList = styled.ul`
    display: flex;
    max-width: 1100px;
    height: 410px;
    flex-wrap: wrap;
    overflow-y: scroll;
    gap: 25px;
    justify-content: center;
    @media (max-width: 480px) {
        height: 572px;
    }
`;
const Text = styled.p`
    @font-face {
        font-family: 'Open Sans';
        src: url('/Quest-React-Avancado/font/pokemon-dp-pro.ttf') format('truetype');
    }
    font-family: 'Open Sans', Arial, sans-serif;
    color: #F8F8F8;
    font-size: 30px;
    text-shadow: 1px 1px 1px #32363B;
    font-weight: 500;
    border-width: 0;

`;
const BtnLoadMore = styled.div`
    .btn-load-more {
        display: flex;
        background-color: rgba(56, 56, 56, 0.3);
        border-radius: 200px 70px 70px 200px;
        width: 250px;
        height: 112px;
        gap: 10px;
        transition: all 0.3s ease 0s;
        align-items: center;
        cursor: pointer;
    }
    .btn-load-more:hover{
        background-color: #2372D9;
    }
    .btn-load-more:hover path{
        color: #F8F8F8;
    }
`

const CirclePlus = styled.div`
    width: 112px;
    height: 112px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 80px;
    transition: all 0.3s ease 0s;
    color: rgba(0, 0, 0, 0.08);
`;

const Svg = styled.svg`
    height: 85px;
`;

const Menu = styled.nav`
    width: 100%;
    height: 65px;
    background: url('/Quest-React-Avancado/images/menu.png') repeat-x ;
    text-align: right;
`

const PokedexLogo = styled.img`
    width: 300px;
    margin-right: 2%;
`