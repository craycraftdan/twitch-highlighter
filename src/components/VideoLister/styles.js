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

export const BoxArt = styled.div`
    display: inline-block;
    width: 40px;
    height: 56px;
    border: 1px solid white;
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const Title = styled.div`
    display: inline-block;
    overflow: hidden;
    font-size: 15px;
    margin-left: 5px;
    opacity: 0.9;
    align-self: top;
`
export const Subtitle = styled.div`
    display: inline-block;
    overflow: hidden;
    margin-left: 5px;
    opacity: 0.7;
    font-size: 13px;
`