import React, { useState, useEffect, useContext } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { LanguageContext } from "../context/LanguageContext";

function ModalForm({ show, handleClose }) {
  //   const context = useContext(LanguageContext);
  const context = { language: "en" };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState(
    context.language === "uk" ? "Email не може бути порожнім" : "Email cannot be empty"
  );
  const [passwordError, setPasswordError] = useState(
    context.language === "uk" ? "Пароль не може бути порожнім" : "Password cannot be empty"
  );
  const [formValid, setFormValid] = useState(false);

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!re.test(String(e.target.value.toLowerCase()))) {
      setEmailError(context.language === "uk" ? "Некоректний email" : "Incorrect email");
    } else {
      setEmailError("");
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 3 || e.target.length > 8) {
      setPasswordError(
        context.language === "uk"
          ? "Пароль повинен мати не менше 3 і не більше 8 символів"
          : "The password must have at least 3 and no more than 8 characters"
      );
      if (!e.target.value) {
        setPasswordError(context.language === "uk" ? "Пароль не може бути порожнім" : "Password cannot be empty");
      }
    } else {
      setPasswordError("");
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{context.language === "uk" ? "Авторизуватися" : "Log in"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="fromBasicEmail">
            <Form.Label>{context.language === "uk" ? "Електронна адреса" : "Email Address"}</Form.Label>
            {emailDirty && emailError && <div style={{ color: "red" }}>{emailError}</div>}
            <Form.Control
              onChange={(e) => emailHandler(e)}
              name="email"
              value={email}
              onBlur={(e) => blurHandler(e)}
              type="email"
              placeholder={context.language === "uk" ? "Введіть електронну пошту" : "Enter email"}
            />
            <Form.Text className="text-muted">
              {context.language === "uk"
                ? "Ми ніколи нікому не передамо вашу електронну адресу."
                : "We'll never share your email with anyone else."}
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="fromBasicPassword">
            <Form.Label>{context.language === "uk" ? "Пароль" : "Password"}</Form.Label>
            {passwordError && passwordDirty && <div style={{ color: "red" }}>{passwordError}</div>}
            <Form.Control
              onChange={(e) => passwordHandler(e)}
              name="password"
              value={password}
              onBlur={(e) => blurHandler(e)}
              type="password"
              placeholder={context.language === "uk" ? "Введіть пароль" : "Enter password"}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="fromBasicCheckbox">
            <Form.Check type="checkbox" label={context.language === "uk" ? "Запамятати мене" : "Remember me"} />
          </Form.Group>
          <Button disabled={!formValid} variant="primary" type="submit">
            {context.language === "uk" ? "Підтвердити" : "Submit"}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ModalForm;
