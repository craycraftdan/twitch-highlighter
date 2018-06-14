import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    overflow: hidden;
    color: white;
    position: relative;
    padding: 0px 35px 0px 35px;
`
export const ChevBoxLeft = styled.div`
    position: absolute;
    left: 0px;
    align-self: center;
`
export const ChevBoxRight = styled.div`
    position: absolute;
    right: 0px;
    align-self: center;
`
export const Chev = styled.img`
    width: 20px;
    height: 31px;
    transform: ${props => props.right ? 'rotate(180deg)' : 'rotate(0deg)'};
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        transform: ${props => props.right ? 'rotate(180deg) scale(1.2)' : 'rotate(0deg) scale(1.2)'};
    }
`
export const PlayListBox = styled.div`
    width: 210px;
    height: 155px;
    font-size: 14px;
    position: relative;
    margin: 10px;

    &:hover > div {
        width: 211px;
    }


`
export const Thumbnail = styled.img`
    position: absolute;
    top: 0pz
    width: 211px;
    height: 113px;
    border-radius: 2px;
`
export const VideoAmount = styled.div`
    position: absolute;
    top: 30px;
    right: 50px;
    font-size: 16px;
    z-index: 9999;
    width: 10px;
    height: 10px;
    transition: all 0.3s ease;
`
export const IconContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover > img {
        opacity: 1;
    }
    &:hover > img:nth-child(2) {
        opacity: 1;
    }
`
export const Share = styled.img`
    width: 21px;
    height: 24px;
    cursor: pointer;
    opacity: 0;
    margin-left: 15px;
    transition: all 0.1s 0.3s ease;
`
export const PlayIcon = styled.img`
    width: 28px;
    height: 28px;
    cursor: pointer;
    opacity: 0;
    margin-right: 15px;
    transition: all 0.1s 0.3s ease;
`
export const FadedCover = styled.div`
    position: absolute;
    top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    right: -1px;
    z-index: 9000;
    width: 105px;
    height: 113px;
    background-color: rgba(0, 0, 0, 0.8);
    transition: all 0.5s ease;


`
export const Title = styled.div`
    position: absolute;
    bottom: 20px;
    font-size: 15px;
    left: 0px;
    width: 100%;
    height: 15px;
`
export const Subtitle = styled.div`
    position: absolute;
    font-size: 14px;
    bottom: 0px;
    left: 0px;
    opacity: 0.7;
    width: 100%;
    height: 15px;
`
