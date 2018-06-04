import styled from 'styled-components';

export const VideoListContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    font-size: 14px;
    position: relative;
    color: white;
`

export const Video = styled.div`
    width: 331px;
    height: 260px;
    margin-top: 15px;
    border-radius: 2px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    position: relative;
`

export const ThumbNail = styled.img`
    width: 331px;
    height: 187px;
    overflow: hidden;
    border-radius: 2px;
    object-fit: cover;
    margin-bottom: 10px;
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: row;
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const Title = styled.div`
    display: inline-block;
    font-size: 15px;
    margin-left: 5px;
    opacity: 0.9;
    align-self: top;
    max-width: 282px;
    white-space: nowrap;
`
export const Subtitle = styled.div`
    display: inline-block;
    margin-left: 5px;
    opacity: 0.6;
    font-size: 12px;
`

export const IconBox = styled.div`
    width: 100%;
    height: 187px;
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    opacity: 0;
    justify-content: space-around;
    align-items: center;
    transition: all 0.3s ease;

    &:hover {
        opacity: 1;
    }

    &:hover img {
        width: 38px;
        height: 38px;
    }
`
export const Icon = styled.img`
    width: 0px;
    height: 0px;
    cursor: pointer;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`