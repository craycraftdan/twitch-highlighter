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

export const IconBox = styled.div`
    cursor: pointer;
    width: 100%;
    height: 116px;
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    opacity: 0;
    z-index: 10;
    justify-content: space-around;
    align-items: center;
    transition: all 0.3s ease;

    &:hover {
        opacity: 1;
    }

    &:hover img {
        width: 38px;
        height: 38px;
        opacity: 1;
    }
`

export const Icon = styled.img`
    width: 0px;
    height: 0px;
    z-index: 110;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`
