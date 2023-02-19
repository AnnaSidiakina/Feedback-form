import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactUsForm from 'components/ContactUsForm/ContactUsForm';
import Footer from 'components/Footer/Footer';
import { Container, Main } from './App.styled';
export const App = () => {
  return (
    <Main>
      <Container>
        <ContactUsForm />
      </Container>

      <Footer />
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Main>
  );
};
