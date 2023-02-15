import styled from 'styled-components';

export const FooterContainer = styled.div`
  height: 200px;
  background-color: #fafafa;
  border-top: 1px solid #d8d8d8;
  margin-top: 174px;
`;

export const IconsList = styled.ul`
  list-style: none;
  display: flex;
  margin-top: 80px;
  margin-left: 343px;
`;

export const IconItem = styled.li`
  width: 16px;
  height: 16px;
  :not(:last-child) {
    margin-right: 25px;
  }
`;
