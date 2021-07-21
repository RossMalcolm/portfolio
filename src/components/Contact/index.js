import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
} from "./ContactElements";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(name);
    console.log(email);
    console.log(message);
    axios({
      method: "POST",
      url: "http://localhost:3002",
      data: JSON.stringify({ name: name, email: email, message: message }),
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Message Sent.");
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Ross Malcolm</Icon>
          <FormContent>
            <Form onSubmit={handleSubmit}>
              <FormH1>Contact Me</FormH1>
              <FormLabel>Your Name:</FormLabel>
              <FormInput
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <FormLabel>Your Email:</FormLabel>
              <FormInput
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <FormLabel>Your Message:</FormLabel>
              <FormInput
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <FormButton type="submit">Submit</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Contact;
