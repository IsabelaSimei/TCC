import styled, { css } from 'styled-components';
import Tooltip from '../Tooltips';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #F9F9F9;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid #444444 ;
  color: #202020;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${(props) => props.isErrored
    && css`
    border-color: #c53030;
    color: #c53030;
  `}

  ${(props) => props.isFocused
  && css`
    color: #FC0090;
    border-color: #FC0090;
  `}

  ${(props) => props.isFilled
    && css`
    color: #FC0090;
  `}

  input {
    flex: 1;
    background: transparent;
    color: #202020;
  border: 0;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
