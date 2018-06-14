import styled from 'styled-components';

export const LeftBar = styled.div`
    width: 75px;
    margin-top: 60px;
    background-color: #231F29;
    min-height: 100vh;
`
export const HeartBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 65px;
    border-bottom: 2px solid rgba(255, 255, 255, 0.4);
`
export const PlayerBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 65px;
    border-bottom: 2px solid rgba(255, 255, 255, 0.4);
`
export const PlayerIcon = styled.img`
    width: 36px; 
    height: 36px;
    opacity: 0.7;
    cursor: pointer;
`

export const StreamerBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
`
export const StreamerAvatarPlaceHolder = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    width: 49px;
    height: 49px;
    background-color: #2C2737;
    border-radius: 2px;
    cursor: pointer;
`
export const StreamerAvatar = styled.img`
    margin-top: 10px;
    margin-bottom: 10px;
    width: 49px;
    height: 49px;
    border-radius: 2px;
    cursor: pointer;
`