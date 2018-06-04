import styled from 'styled-components';

export const Loader = styled.div`
    margin-top: 60px;
    border: 16px solid #231F29;
    border-top: 16px solid #6441A4;
    border-radius: 50%;
    width: 180px;
    height: 180px;
    animation: spin 2s linear infinite;

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`