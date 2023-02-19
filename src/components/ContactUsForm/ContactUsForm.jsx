import React from 'react';
import { toast } from 'react-toastify';
import {
  FormContainer,
  Input,
  InputMessage,
  Button,
  Form,
  Title,
} from './ContactUsForm.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMessage } from '../../redux/operation';

const ContactUsForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

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

    dispatch(
      addMessage({
        name: name,
        email: email,
        message: message,
      })
    );
    toast.success('Your message has been sent successfully!');
    reset();
  };

  function reset() {
    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <FormContainer>
      <Title>Reach out us</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          placeholder="Your name*"
          required
          onChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          value={email}
          placeholder="Your e-mail*"
          required
          onChange={handleChange}
        />
        <InputMessage
          name="message"
          value={message}
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
