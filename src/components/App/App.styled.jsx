import styled from 'styled-components';
import backGR from '../../assets/bg/backGr.png';

export const Container = styled.div`
  background-image: url(${backGR});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // text-align: center;

  @media (min-width: 750px) {
    display: block;
    max-width: 1440px;
  }
`;
