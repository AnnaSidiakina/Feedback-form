import styled from 'styled-components';
import footerBg from '../../assets/bg/footerBg.png';

export const FooterContainer = styled.div`
  background-color: #fafafa;
  border-top: 1px solid #d8d8d8;
  background-image: url(${footerBg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left bottom;
  overflow: hidden;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 750px) {
    display: block;
  }
  @media (min-width: 1200px) {
    height: 200px;
  }
`;

export const IconsList = styled.ul`
  list-style: none;
  display: flex;
  @media (min-width: 750px) {
    margin-left: 300px;
    margin-top: 80px;
  }
`;

export const IconItem = styled.li`
  width: 16px;
  height: 16px;
  :not(:last-child) {
    margin-right: 25px;
  }
`;
