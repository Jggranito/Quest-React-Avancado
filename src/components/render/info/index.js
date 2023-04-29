import { Link, useLocation } from "react-router-dom"
import styled from "styled-components"
import { getInfo } from "../../objects/info";
import { useEffect, useState } from "react";
import './teste.css'
import { Moves } from "./info-components/moves";

export const MoreInfo = () => {
    const { state: { pokemon } } = useLocation();
    const [info, setInfo] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [generalDisplay, setGeneralDisplay] = useState('flex')
    const [statsDisplay, setStatsDisplay] = useState('none')
    const [movesDisplay, setMovesDisplay] = useState('none')
    const [generalButtonActived, setGeneralButtonActived] = useState(true)
    const [statsButtonActived, setStatsButtonActived] = useState(false)
    const [movesButtonActived, setMovesButtonActived] = useState(false)

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            const infoData = await getInfo(pokemon.name)
            setInfo(infoData)
        }
        fetchData();
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, [pokemon.name])

    const changeCard = (cardNumber) => {
        switch (cardNumber) {
            case 1:
                setGeneralDisplay('flex')
                setStatsDisplay('none')
                setMovesDisplay('none')
                setGeneralButtonActived(true)
                setStatsButtonActived(false)
                setMovesButtonActived(false)
                break
            case 2:
                setGeneralDisplay('none')
                setStatsDisplay('flex')
                setMovesDisplay('none')
                setGeneralButtonActived(false)
                setStatsButtonActived(true)
                setMovesButtonActived(false)
                break
            case 3:
                setGeneralDisplay('none')
                setStatsDisplay('none')
                setMovesDisplay('flex')
                setGeneralButtonActived(false)
                setStatsButtonActived(false)
                setMovesButtonActived(true)
                break
            default:
                break
        }
    }

    return (
        <BgImage>
            <nav className='menu' style={{ display: 'flex', justifyContent: 'space-between', padding: '0 2%', alignItems: 'center' }}>
                <P style={{ color: '#FFFFFF', fontSize: '65px', height: '58px', display: 'flex', alignItems: 'center' }}>POKéMON INFO</P>
                <Link to='/' style={{ backgroundColor: 'white', borderRadius: '30px', padding: '3px 10px' }}> Voltar </Link>
            </nav>
            <Container>
                <PokedexContainer>
                    <Border style={{ position: 'relative' }}>
                        {isLoading ?
                            '' : (
                                <>
                                    <div className="cardName" style={{ display: "flex", flexDirection: 'column', width: '380px', height: '100px', alignItems: 'center', gap: '20px', }}>
                                        <div style={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px 4px 4px', borderRadius: '20px' }}>
                                            <div style={{ width: '380px', backgroundColor: '#FFCF51', height: '50px', borderRadius: '20px 20px 0 0', alignItems: 'center', display: 'flex', color: '#0B161A', fontSize: '25px', padding: '10px 0 0 10px', gap: '5px', textTransform: 'uppercase' }}>
                                                <img src='/images/pokeball.png' alt='pokeball' width={'40px'}></img>
                                                <P className="text" style={{ margin: '0 0 5px 8px', width: '100%', display: 'flex', justifyContent: 'left' }}>{pokemon.name}</P>
                                            </div>
                                            <div style={{ width: '380px', backgroundColor: '#ffffff', height: '40px', borderRadius: '0 0 20px 20px', padding: '0 0 0 20px' }}>
                                                <P style={{ textShadow: '1px 1px 1px #0B161A', fontSize: '40px', color: '#252A30' }}>Lv.9</P>
                                            </div>
                                        </div>
                                        <div>
                                            <div style={{
                                                position: 'relative',
                                                width: '280px',
                                                height: '280px',
                                                display: "flex",
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <div style={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    width: '100%',
                                                    height: '100%',
                                                    backgroundImage: `url(https://pokedex-nu-ten.vercel.app/images/pokeball-card-background.png)`,
                                                    backgroundPosition: 'center',
                                                    backgroundSize: 'cover',
                                                    zIndex: -1,
                                                    borderRadius: '50px'
                                                }}></div>
                                                <img src={pokemon.sprites.simpleSprite} style={{ width: '200px', zIndex: 0, transform: 'scaleX(-1)', }} alt="pokemon" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="infoContainer" style={{ position: 'relative' }}>
                                        <div style={{ display: 'flex', width: '100%', position: 'absolute', zIndex: 1, justifyContent: 'center', marginTop: '-42px' }}>
                                            <div className={generalButtonActived? "actived btn-card" : "btn-card"} style={{backgroundColor: '#85DE8C'}} onClick={() => changeCard(1)}>
                                                <img src={generalButtonActived? "/images/buton-icons/general-actived.png" : "/images/buton-icons/general.png"} alt="ads" style={{ width: '75%' }}></img>
                                            </div>
                                            <div className={statsButtonActived? "actived btn-card" : "btn-card"} style={{backgroundColor: '#8891F8'}} onClick={() => changeCard(2)}>
                                                <img src={statsButtonActived? "/images/buton-icons/stats-actived.png" : "/images/buton-icons/stats.png"} alt="ads" style={{ width: '75%' }}></img>
                                            </div>
                                            <div className={movesButtonActived? "actived btn-card" : "btn-card"} style={{backgroundColor: '#F88078'}} onClick={() => changeCard(3)}>
                                                <img src={movesButtonActived? "/images/buton-icons/moves-actived.png" : "/images/buton-icons/moves.png"} alt="ads" style={{ width: '75%' }}></img>
                                            </div>
                                        </div>
                                        <div className="general" style={{ width: '650px', height: '420px', borderRadius: '20px', backgroundColor: '#85DE8C', paddingTop: '25px', justifyContent: 'right', boxShadow: ' -2px -2px 0 #32363B, 2px -2px 0 #32363B, -2px 2px 0 #32363B, 2px 2px 0 #32363B', display: generalDisplay }}>
                                            <div style={{ width: '100%' }}>
                                                <P className='text' style={{ backgroundColor: '#74BD74', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'left', paddingLeft: '40px' }}>Pokédex No.</P>
                                                <P className='text' style={{ height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'left', paddingLeft: '40px' }}>Name</P>
                                                <P className='text' style={{ backgroundColor: '#74BD74', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'left', paddingLeft: '40px' }}>Type</P>
                                                <P className='text' style={{ height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'left', paddingLeft: '40px' }}>Exp. Points</P>
                                                <P className='text' style={{ backgroundColor: '#74BD74', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'left', paddingLeft: '40px' }}></P>
                                                <P className='text' style={{ height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'left', paddingLeft: '40px' }}>To Next Lv.</P>
                                                <P className='text' style={{ backgroundColor: '#74BD74', height: '95px', borderRadius: '0 0 25px 25px' }}></P>
                                            </div>
                                            <div style={{ position: 'absolute', width: '50%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                                                <div style={{ width: '300px', height: '50px', backgroundColor: '#FFFECE', marginRight: '30px', borderRadius: '25px 25px 0 0', textAlign: 'center', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 4px 4px' }}>
                                                    <P style={{ color: ' #252A30' }}>{pokemon.id}</P>
                                                </div>
                                                <div style={{ width: '300px', height: '50px', backgroundColor: '#FFFFFF', marginRight: '30px', textAlign: 'center', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 4px 4px' }}>
                                                    <P style={{ textTransform: 'uppercase', color: ' #252A30' }}>{pokemon.name}</P>
                                                </div>
                                                <div style={{ width: '300px', height: '50px', backgroundColor: '#FFFECE', marginRight: '30px', borderRadius: '0 0 25px 25px', display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '20px', alignItems: 'center', textTransform: 'uppercase', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 4px 4px' }}>
                                                    <P className={'text type-' + pokemon.types[1]} >{pokemon.types[1]}</P>
                                                    <P className={'text type-' + pokemon.types[2]}>{pokemon.types[2]}</P>
                                                </div>
                                                <div style={{ width: '300px', height: '50px' }}></div>
                                                <div style={{ width: '300px', height: '50px', backgroundColor: '#FFFFFF', marginRight: '30px', borderRadius: '25px', display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '20px', alignItems: 'center', textTransform: 'uppercase', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 4px 4px' }}>
                                                    <P style={{ color: ' #252A30', marginLeft: '100px' }}>{info.stats.exp}</P>
                                                </div>
                                                <div style={{ width: '300px', height: '50px' }}></div>
                                                <div style={{ width: '300px', height: '50px', backgroundColor: '#FFFFFF', marginRight: '30px', borderRadius: '25px', display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '20px', alignItems: 'center', textTransform: 'uppercase', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 4px 4px' }}>
                                                    <P style={{ color: ' #252A30', marginLeft: '100px' }}>{parseInt(info.stats.nextLevel)}</P>
                                                </div>
                                                <div style={{ width: '300px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <P className='text'>EXP </P>
                                                    <img src='/images/xp-bar2.png' alt="xp bar" style={{ marginRight: ' 90px', width: '250px' }}></img>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="stats" style={{ width: '650px', height: '420px', borderRadius: ' 20px', backgroundColor: '#8891F8', position: 'relative', justifyContent: 'right', boxShadow: ' -2px -2px 0 #32363B, 2px -2px 0 #32363B, -2px 2px 0 #32363B, 2px 2px 0 #32363B', display: statsDisplay }}>
                                            <div style={{ width: '100%' }}>
                                                <div style={{ height: '42px', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                                                    <P className="text">HP</P>
                                                    <div style={{ height: '42px', width: '280px', backgroundColor: '#F0F8F8', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                        <P style={{ color: '#32363B', textShadow: '1px 1px 3.5px #575E66', }}>{info.stats.hp - 3}/{info.stats.hp}</P>
                                                    </div>
                                                </div>
                                                <div style={{ height: '21px', backgroundColor: '#6770D9', display: 'flex', justifyContent: 'right', paddingRight: '80px' }}>
                                                    <img src="/images/hp-bar.png" alt="hp bar" style={{ alignSelf: 'center', width: '250px', height: '17px' }}></img>
                                                </div>
                                                <div style={{ height: '42px', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                                                    <P className="text">Attack</P>
                                                    <div style={{ height: '42px', width: '200px', backgroundColor: '#F0F8F8', borderRadius: '20px 20px 0 0', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
                                                        <P style={{ color: '#32363B', textShadow: '1px 1px 3.5px #575E66' }}>{info.stats.attack}</P>
                                                    </div>
                                                </div>
                                                <div style={{ height: '42px', display: 'flex', alignItems: 'center', justifyContent: 'space-around', backgroundColor: '#6770D9' }}>
                                                    <P className="text">Defence</P>
                                                    <div style={{ height: '42px', width: '200px', backgroundColor: '#F0F0C0', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
                                                        <P style={{ color: '#32363B', textShadow: '1px 1px 3.5px #575E66' }}>{info.stats.defence}</P>
                                                    </div>
                                                </div>
                                                <div style={{ height: '42px', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                                                    <P className="text">Sp. Atk</P>
                                                    <div style={{ height: '42px', width: '200px', backgroundColor: '#F0F8F8', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
                                                        <P style={{ color: '#32363B', textShadow: '1px 1px 3.5px #575E66' }}>{info.stats.specialAttack}</P>
                                                    </div>
                                                </div>
                                                <div style={{ height: '42px', display: 'flex', alignItems: 'center', justifyContent: 'space-around', backgroundColor: '#6770D9' }}>
                                                    <P className="text">Sp. Def</P>
                                                    <div style={{ height: '42px', width: '200px', backgroundColor: '#F0F0C0', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
                                                        <P style={{ color: '#32363B', textShadow: '1px 1px 3.5px #575E66' }}>{info.stats.specialDefense}</P>
                                                    </div>
                                                </div>
                                                <div style={{ height: '42px', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                                                    <P className="text">Speed</P>
                                                    <div style={{ height: '42px', width: '200px', backgroundColor: '#F0F8F8', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '0 0 20px 20px', marginRight: '20px' }}>
                                                        <P style={{ color: '#32363B', textShadow: '1px 1px 3.5px #575E66' }}>{info.stats.speed}</P>
                                                    </div>

                                                </div>
                                                <div style={{ height: '63px', display: 'flex', alignItems: 'end', backgroundColor: '#6770D9', paddingLeft: '20px', gap: '20px' }}>
                                                    <P className="text">Ability</P>
                                                    <div style={{ height: '42px', width: '490px', backgroundColor: '#D8E0F0', marginBottom: '2px', borderRadius: '20px 0 0 0', paddingLeft: '50px', display: 'flex', alignItems: 'center', textTransform: 'capitalize' }}>
                                                        <P>{info.abilities[0].ability.name}</P>
                                                    </div>
                                                </div>

                                                <div style={{ height: '84px', background: 'linear-gradient(to bottom, #F0F8F8 50%, #F0F0C0 50%)', borderRadius: '0 0 20px 20px', padding: '0 15px 0 20px', marginBottom: '10px', display: 'flex', flexWrap: 'wrap' }}>
                                                    <P style={{ width: '100%', height: '84px', lineHeight: '40px' }}>{info.abilities[0].ability.description}</P>
                                                </div>

                                            </div>
                                        </div>
                                        <Moves info={info} display={movesDisplay} />
                                    </div>
                                </>
                            )}
                    </Border>
                </PokedexContainer>
            </Container>
        </BgImage >
    )
}

const BgImage = styled.div`
                background: url("/images/background.jpg") no-repeat center center fixed;
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
                background-color: rgba(207, 214, 198, 0.4);
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
                display: flex;
                gap: 95px;
                width: 100%;
                height: 100%;
                border: 2px solid rgba(255, 255, 255, 0.25);
                border-radius: 50px;
                padding: 47px;
                transition: all 0.3s ease 0s;
                @media (max-width: 480px) {padding: 45px 10px 0 0 };
                `;

const P = styled.p`
                @font-face {
                    font-family: 'Open Sans';
                src: url('../font/pokemon-dp-pro.ttf') format('truetype');
    }
                font-family: 'Open Sans', Arial, sans-serif;
                color: #242C35;
                font-size: 40px;
                text-shadow: 1px 1px 4px #32363B;
                line-height: 42px;
`