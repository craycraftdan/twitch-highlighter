import styled from 'styled-components';

export const Container = styled.div`
    display: ${props => props.open ? 'flex' : 'none' };
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    opacity: 1;
    justify-content: center;
    align-items: center;
`
export const Modal = styled.div`
    width: 750px;
    height: 500px;
    border-radius: 2px;
    background-color: rgba(35, 31, 41, 0.9);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Close = styled.div`
    width: 40px;
    height: 40px;
    font-size: 24px;
    color: white;
    cursor: pointer;
`