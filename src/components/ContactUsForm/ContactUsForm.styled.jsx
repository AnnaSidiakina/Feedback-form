import styled from 'styled-components';
export const FormContainer = styled.div`
  padding: 50px;
  margin: 0 auto;

  @media (min-width: 750px) {
    padding-top: 170px;
    padding-left: 150px;
    padding-bottom: 150px;
  }
`;
export const Title = styled.h1`
  font-family: 'ApercuArabicPro', sans-serif;
  font-size: 40px;
  font-weight: 400;
  color: #3e3e3e;
  margin-bottom: 30px;
`;
export const Form = styled.form`
  width: 450px;
  display: flex;
  flex-direction: column;

  @media (min-width: 750px) {
    width: 557px;
  }
`;
export const Input = styled.input`
  color: #2d2d2d;
  font-size: 18px;
  font-family: 'ApercuArabicPro', sans-serif;
  height: 93px;
  padding: 0 46px;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  margin-bottom: 10px;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #2d2d2d;
    opacity: 1;
    font-size: 18px;
  }
  :-ms-input-placeholder {
    color: #2d2d2d;
    opacity: 1;
    font-size: 18px;
  }
`;
export const InputMessage = styled.textarea`
  font-family: 'ApercuArabicPro', sans-serif;
  color: #2d2d2d;
  font-size: 18px;
  padding: 31px 46px;
  border: 1px solid #dcdcdc;
  border-radius: 10px;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #2d2d2d;
    opacity: 1;
    font-size: 18px;
  }
  :-ms-input-placeholder {
    color: #2d2d2d;
    opacity: 1;
    font-size: 18px;
  }
`;
export const Button = styled.button`
  font-family: 'ApercuArabicPro', sans-serif;
  margin-top: 23px;
  width: 218px;
  height: 73px;
  background-color: #fad34f;
  border-radius: 500px;
  border-color: transparent;
  color: #ffffff;
  font-size: 18px;
  cursor: pointer;
  transform: scale(1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    transform: scale(1.1);
  }
`;
