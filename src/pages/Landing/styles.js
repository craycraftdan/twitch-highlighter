import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 60px;
    height: 93vh;
    width: calc(100% - (323px + 75px));
    margin-bottom: 60px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`
export const ToolTips = styled.div`
    margin-top: 15px;
    padding: 15px 25px 0px 25px;
    width: 95%;
    height: 300px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: bold;
    font-size: 16px;
    color: white;
    text-align: center;
    opacity: 0.9;
`
export const ToolTipBoxSide = styled.div`
    width: 156px;
    height: 56px;
    font-size: 14px;
    background-color: #6441A4;
    border-radius: 2px;
    align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    position: relative;
`
export const ToolTipBoxTop = styled.div`
    width: 330px;
    height: 50px;
    background-color: #6441A4;
    border-radius: 2px;
    padding: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`
export const LogoContainer = styled.div`
    width: 90%;
    height: 209px;
    margin-top: 40px;
    display: flex;
    justify-content: center;

    & img {
        max-width: 100%;
    }
`
export const PointerLeft = styled.div`
    position: absolute;
    z-index: -1;
    left: 0px;
    width: 0;
    height: 0;
    transform: rotate(180deg) translateX(20px);
	border-top: 25px solid transparent;
	border-left: 50px solid #6441A4;
	border-bottom: 25px solid transparent;
`
export const PointerRight = styled.div`
    position: absolute;
    z-index: -1;
    right: 0px;
    transform: translateX(20px);
    width: 0;
    height: 0;
	border-top: 25px solid transparent;
	border-left: 50px solid #6441A4;
	border-bottom: 25px solid transparent;
`
export const PointerTop = styled.div`
    position: absolute;
    z-index: -1;
    top: 0px;
    transform: rotate(-90deg) translateX(20px);
    width: 0;
    height: 0;
	border-top: 25px solid transparent;
	border-left: 50px solid #6441A4;
	border-bottom: 25px solid transparent;
`
export const CreatedPlaylist = styled.div`
    position: absolute;
    bottom: 15px;
    width: 90%;
    height: 200px;
`