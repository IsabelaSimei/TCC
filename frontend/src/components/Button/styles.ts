import styled from 'styled-components';

export const Container = styled.button`
    background-image: linear-gradient(to right, #FC0090 , #F6001A);
    height: 56px;
    border-radius: 10px;
    border: 0;
    padding: 16px;
    color: #F9F9F9;
    width: 100%;
    margin-top: 16px;
    font-weight: 500;
    transition: background-color 0.2s;

    &:hover {
      opacity: 0.9;
    }
`;
