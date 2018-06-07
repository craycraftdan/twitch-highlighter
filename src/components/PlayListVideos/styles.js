import styled from 'styled-components';

export const VideosBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0px 5px 0px 5px;
`
export const Title = styled.h3`
    margin-bottom: 20px;
`
export const Video = styled.div`
    width: 250px;
    height: 150px;
    margin-bottom: 20px;
    position: relative;
`
export const Dimmer = styled.div`
    width: 100%;
    height: 150px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.7);
`
export const Thumbnail = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 2px;
    opacity: 1;
`
export const InfoBox = styled.div`
    position: absolute;
    z-index: 100;
    width: 95%;
    bottom: 5px;
    left: 5px;
    font-size: 14px;
    display: flex; 
    flex-direction: row;
`
export const TitleBox = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 5px;
    justify-content: flex-start;
    align-items: flex-start;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;
`
export const DateSubTitle = styled.div`
    opacity: 0.8;
    margin-top: 2px;
    font-size: 12px;
`
export const VidTitle = styled.div`
    font-size: 14px;
    opacity: 0.9;
`
export const IconBox = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    z-index: 6000;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    opacity: 0;
    transition: all 0.3s ease;

    &:hover { 
        opacity: 1;
    }

    &:hover img {
        width: 32px;
        height: 32px;
    }
`
export const Icon = styled.img`
    width: 0px;
    height: 0px;
    cursor: pointer;
    transition: all 600ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
`
