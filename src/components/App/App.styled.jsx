import styled from 'styled-components';
import backGR from '../../assets/bg/backGr.png';

export const Container = styled.div`
  background-image: url(${backGR});
  background-size: cover;
  background-position: top left;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 750px) {
    display: block;
  }
`;

export const Main = styled.div`
  width: 100%;
`;
