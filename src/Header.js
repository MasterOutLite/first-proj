import React, { useState, useEffect, useContext } from "react";
import { Navbar, Nav, FormControl, Container, Form, Button, Modal } from "react-bootstrap";
import { LanguageContext } from "./context/LanguageContext";

const Header = () => {
  const context = useContext(LanguageContext);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    <>
      <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/"></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">{context.language === "uk" ? "Головна" : "Home"}</Nav.Link>
              <Nav.Link href="/about">{context.language === "uk" ? "Про нас" : "About us"}</Nav.Link>
              <Nav.Link href="/contacts">{context.language === "uk" ? "Контакти" : "Contacts"}</Nav.Link>
              <Nav.Link href="/blog">{context.language === "uk" ? "Блог" : " Blog "}</Nav.Link>
            </Nav>

            <Form.Select
              aria-label="Default select example"
              style={{ width: "120px" }}
              onChange={(e) => {
                context.setLanguage(e.target.value);
              }}
            >
              <option value="uk">Українська</option>
              <option value="en">English</option>
            </Form.Select>

            <Form className="d-flex">
              <FormControl
                type="text"
                placeholder={context.language === "uk" ? "Знайти" : "Search"}
                className="me-sm-3"
              />
              <Button variant="outline-info">{context.language === "uk" ? "Знайти" : "Search"}</Button>
              <Button className="ms-2" onClick={handleShow}>
                {context.language === "uk" ? "Увійти" : "Login"}
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

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
    </>
  );
};

export default Header;
