import styled from "styled-components";
 
export const CirclePlus = () => {
    return (
        <CirclePlusContainer>
            <Svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-plus" className="svg-circle-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z">
                </path>
            </Svg>
        </CirclePlusContainer>
    )
}


const CirclePlusContainer = styled.div`
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