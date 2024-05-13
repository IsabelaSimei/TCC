import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import signInBackgroundImg from '../../assets/ajuda.jpg'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* place-content: center; //Alinha na vertical e horizoltal */

  width: 100%;
  max-width: 700px;

`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1s;

  form {
    margin: 40px 0;
    width: 340px;
    text-align: center;

    h1 {
      color: #202020;
      margin-bottom: 20px;
    }

    a {
      color: #202020;
      display: block;
      margin-top: 26px;
      transition: color 0.2s;
      text-decoration: none;

      &:hover {
        color: ${shade(0.6, '#f4ede8')}
      }
    }
  }

  img {
    width: 350px;
    margin-top: -150px;
  }

  > a {

    color: #FC0090;
    display: block;
    margin-top: 26px;
    transition: color 0.2s;
    text-decoration: none;
    margin-bottom: 20px

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#F6001A')}
    }
  }

`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover; //cover garante que a imagem ocupe todo o container dela

`;
