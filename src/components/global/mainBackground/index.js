import styled from "styled-components";
import { ThemeContext } from '../../../context/themeContext';
import { useContext } from "react";
import { Menu } from "../menu";

export const MainBackground = (props) => {
    const [selectFilter, setSelectFilter] = props.filter ? props.filter : '';
    const [filterName, setFilterName] = props.byName ? props.byName : '';
    const { theme } = useContext(ThemeContext)
    const isHome = props.isHome

    return (
        <MainContainer>
            <Menu filter={[selectFilter, setSelectFilter]} byName={[filterName, setFilterName]} isHome={isHome} />
            <BgImage background={theme.background} scrollbarTrackColor={theme.scrollbar.track.background}>
                <Container>
                    <Content>
                        <Border>
                            {props.children}
                        </Border>
                    </Content>
                </Container>
            </BgImage>
        </MainContainer>
    )
}

const MainContainer = styled.div`
    height: 100vh;
`
const BgImage = styled.div`
    background: ${props => props.background};
    background-size: cover;
    overflow: hidden;
    height: 91%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease 0s;
    @media (max-width: 480px) {
        height: 93%;
    }
    @media (min-width: 480px) and (max-width: 800px){
        height: 90%;
    }
`;
const Container = styled.section`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    padding: 0 22px;
    @media (max-width: 480px) {
        min-height: 100%;
        margin: 2% 0 3%;
    }
`;
const Content = styled.div`
    width: 100%;
    max-width: 79.2rem;
    height: 95%;
    background-color: rgba(105, 205, 205, 0.2);
    backdrop-filter: blur(10px);
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
    transition: all 0.3s ease 0s;
    border-radius: 50px;
    @media (max-width: 767px) { 
        height: 95%;
        padding: 10px;
    }
    @media (min-width: 768px) and (max-width: 991px){
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
const Border = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    gap: 5%;
    border: 2px solid rgba(255, 255, 255, 0.25);
    border-radius: 50px;
    padding: 4%;
    transition: all 0.3s ease 0s;
    /* overflow-y: hidden; */
    @media (max-width: 767px) {
        padding: 4%;
        display: flex;
        flex-direction: column;
        border-radius: 40px;
        justify-content: unset;
    };
    @media (min-width: 768px) and (max-width: 991px) {
        padding: 2%;
        display: flex;
        flex-direction: column;
        border-radius: 40px;
        justify-content: unset;
    }
`;