import styled from 'styled-components';

export const Container = styled.div`
    display: ${props => props.open ? 'flex' : 'none' };
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    opacity: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Modal = styled.div`
    width: 765px;
    height: 490px;
    border-radius: 2px;
    background-color: rgba(35, 31, 41, 1);
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Buttons = styled.div`
    width: 100%;
    padding-right: 10px;
    display: flex;
    justify-content: flex-end;
    position: absolute;
    top: 10px;
`
export const Video = styled.div`
    margin-top: 25px;
`
export const AddButton = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
    opacity: 0.9;
    margin-right: 10px;
`
export const CloseButton = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
    opacity: 0.9;
    transform: rotate(45deg);
`
export const BottomContainer = styled.div`
    width: 84%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`
export const SocialBox = styled.div`
    padding-top: 10px;
    padding-right: 5px;
    width: 175px;
    height: 50px;
    display: flex;
    justify-content: space-between;
`
export const SocialIcon = styled.img`
    width: 25px;
    height: 25px;
    opacity: 1;
    cursor: pointer;
    transition: all 600ms cubic-bezier(0.175, 0.885, 0.32, 1.275);

    &:hover {
        transform: scale(1.15) rotate(10deg);

    }
`