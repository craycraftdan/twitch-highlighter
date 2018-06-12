import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid red;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: white;
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
    border: 1px solid pink;
    font-size: 14px;
    position: relative;
`
export const Thumbnail = styled.img`
    width: 211px;
    height: 113px;
    border-radius: 2px;
`
export const FadedCover = styled.div`
    position: absolute;
    right: 0px;
    width: 50%;
    background-color: rgba(0, 0, 0, 0.7);
`

