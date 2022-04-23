import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import { Form, FormGroup, Label, Input, Row, Col } from "reactstrap";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  // const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      //isValid conditional statement
      if (!isValid) {
        setErrorMessage("Your email is invalid");
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else setErrorMessage("");
      }
      if (!errorMessage) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
      }
    }
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <Form>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="formEmail">Say Hello?</Label>
          </FormGroup>
          <FormGroup>
            <Label for="formEmail">Email</Label>
            <Input
              id="formEmail"
              name="email"
              placeholder="Email"
              type="email"
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="formPassword">Password</Label>
            <Input
              id="formPassword"
              name="password"
              placeholder="Password"
              type="password"
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="formText">Whats on your mind?</Label>
        <Input id="formText" name="text" type="textarea" />
      </FormGroup>
    </Form>
  );
}

export default Contact;
