import styled from 'styled-components';

export const RightNavContainer = styled.div`
    width: 323px;
    background-color: #231F29;
    color: white;
    font-size: 24px;
    padding-top: 40px;
    text-align: center;
`
export const Title = styled.div`
    margin-bottom: 15px;
`
export const InputBox = styled.div`
    display: block;
    position: relative;
`
export const InputName = styled.input`
    color: white;
    font-size: 17px;
    width: 240px;
    height: 30px;
    background-color: transparent;
    border: none;
    outline: none;
    border-bottom: 1.5px solid white;

    &:focus + label {
        font-size: 14px;
        opacity: 0.9;
        transform: translateY(20px);
    }
    &:valid + label {
        font-size: 14px;
        opacity: 0.9;
        transform: translateY(20px);
    }

`
export const Label = styled.label`
    position: absolute;
    bottom: 1px;
    left: 42px;
    font-size: 16px;
    transition: 0.4s ease all; 
    pointer-events: none;
`
export const SubmitBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    font-size: 18px;
    margin-top: 5px;
`
export const Icon = styled.img`
    width: 21px;
    height: 21px;
    margin-right: 37px;
    margin-left: 5px;
    padding-top: 4px;
    cursor: pointer;
`