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
            <nav className='menu' style={{textAlign: 'right'}}>
                <img src='/images/pokedex.png' alt='pokedex logo' style={{width: '300px', marginRight: '2%'}}></img>
            </nav>
            <Container>
                <PokedexContainer>
                    <Border>
                        <section className='main'>
                            <PokeList>
                                <Cards pokemons={pokemons} />
                                <BtnLoadMore>
                                    <Button onClick={addPokemon} className="btn-load-more" id='btn-load-more'>
                                        <CirclePlus>
                                            <Svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-plus" className="svg-circle-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"></path></Svg>
                                        </CirclePlus>
                                        <p>Load More</p>
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

const BgImage = styled.div`
    background: url('/images/background.jpg') no-repeat center center fixed;
    background-size: cover;
    overflow: hidden;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.section`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    padding: 0 22px;
`;

const PokedexContainer = styled.div`
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
        height: 95%;
    }
`;

const Border = styled.div`
    width: 100%;
    height: 100%;
    border: 2px solid rgba(255, 255, 255, 0.25);
    border-radius: 50px;
    padding: 47px;
    transition: all 0.3s ease 0s;
    @media (max-width: 480px) { padding: 45px 10px 0 0 };
`;

const PokeList = styled.ul`
    display: flex;
    max-width: 1100px;
    height: 410px;
    flex-wrap: wrap;
    overflow-y: scroll;
    gap: 30px 16px;
    justify-content: center;
    @media (max-width: 480px) {
        height: 540px;
    }
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
    p{
        font-size: 18px;
        font-weight: 600;
        color: rgb(255, 255, 255);
        border-width: 0;
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