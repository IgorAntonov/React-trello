import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { H2 } from 'Components/shared';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;

  background-color: ${p => p.theme.main};
`;

export const FlexTitle = styled.div`
  display: flex;
  align-items: center;

  padding: 1rem;

  fill: #fff;
`;

export const Title = styled(H2)`
  margin: 0;
  padding: 0 0.5rem;

  color: #fff;
  cursor: default;
`;

export const FlexBoards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const BoardLink = styled(Link)`
  display: flex;
  flex-basis: 23%;
  
  padding: 1rem;
  margin-bottom: 1rem;
  
  border: none;
  border-radius: 4px;

  background-color: rgba(222, 225, 227, 0.7);
  color: #4c4e50;
  cursor: pointer;
  
  transition: 0.2s all;
  :focus {
    outline: none;
    background-color: rgba(222, 225, 227, 0.9);
  }
  :hover {
    background-color: rgba(222, 225, 227, 0.9);
  }
`;

