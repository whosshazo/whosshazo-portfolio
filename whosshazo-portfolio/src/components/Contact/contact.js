import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import { Form, FormGroup, Label, Input, Row, Col } from "reactstrap";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;
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
          <FormGroup id="contact-form" onSubmit={handleSubmit}>
            <Label for="formName">Say Hello?</Label>
          </FormGroup>
          <FormGroup>
            <Label for="formName">Name</Label>
            <Input
              type="text"
              onBlur={handleChange}
              defaultValue={name}
              name="email"
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="formEmail">Email</Label>
            <Input
              type="text"
              defaultValue={email}
              onBlur={handleChange}
              name="email"
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="formText">Whats on your mind?</Label>
        <Input defaultValue={message} name="message" onBLur={handleChange} />
      </FormGroup>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      <button type="submit">Submit</button>
    </Form>
  );
}

export default Contact;
