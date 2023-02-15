import React from 'react';
import ContactUsForm from 'components/ContactUsForm/ContactUsForm';
import Footer from 'components/Footer/Footer';
import { Container } from './App.styled';
export const App = () => {
  return (
    <Container>
      <ContactUsForm />
      <Footer />
    </Container>
  );
};
