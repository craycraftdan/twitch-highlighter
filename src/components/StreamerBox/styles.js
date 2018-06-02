import styled from 'styled-components';

export const StreamerContainer = styled.div`
    height: 135px;
    width: 760px;
    background-color: #231F29;
    border-radius: 2px;
    margin-top: 40px;
    margin-bottom: 40px;
    color: white;
    padding: 10px;
    display: flex;
    font-size: 18px;
    margin-left: 10px;
    margin-right: 10px;

    @media only screen and (max-width: 1240px) {
        width: 500px;
    }
`

export const AvatarContainer = styled.div`
    position: relative;

    &:hover {
        opacity: 0.3;
    }
`

export const Avatar = styled.img`
    width: 116px;
    height: 116px;
    border-radius: 2px;
`

export const InfoBox = styled.div`
    width: 100%;
    height: 116px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding-left: 10px;
    overflow: hidden;
`

export const LiveStatus = styled.div`
    width: 16px;
    height: 16px;
    border-radius: 100%;
    display: inline-block;
    background-color: ${props => props.online ? 'red' : 'black' };
    margin-right: 3px;
    border: 2px solid white;
    transform: translateY(2.5px);
`

export const Streamer = styled.div`
    font-size: 22px;
`

export const Status = styled.div`
    opacity: 0.9;
    font-size: 16px;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;
`
export const Game = styled.div`
    opacity: 0.6;
    font-size: 14px;
`
export const Live = styled.div`
    margin-top: auto;
    font-size: 14px;
`
