import React from 'react';
import {
  FormContainer,
  Input,
  InputMessage,
  Button,
  Form,
  Title,
} from './ContactUsForm.styled';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFeedback } from 'redux/slice';

const ContactUsForm = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();
  const feedback = useSelector(store => store.feedback);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'message':
        return setMessage(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    // const formName = e.currentTarget.elements.name.value;
    // const formEmail = e.currentTarget.elements.email.value;
    // const formMessage = e.currentTarget.elements.message.value;
    dispatch(
      addFeedback({
        name: name,
        email: email,
        message: message,
      })
    );
    reset();
  };

  function reset() {
    setName(null);
    setEmail(null);
    setMessage(null);
  }
  console.log(feedback);

  return (
    <FormContainer>
      <Title>Reach out us</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          placeholder="Your name*"
          required
          onChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          placeholder="Your e-mail*"
          required
          onChange={handleChange}
        />
        <InputMessage
          name="message"
          placeholder="Your message*"
          rows={5}
          required
          onChange={handleChange}
        />
        <Button type="submit">Send message</Button>
      </Form>
    </FormContainer>
  );
};
export default ContactUsForm;
