import React, { useState, useEffect, useContext } from "react";
import { Navbar, Nav, FormControl, Container, Form, Button } from "react-bootstrap";
import { LanguageContext } from "./context/LanguageContext";
import ModalForm from "./components/Modal";

const Header = () => {
  const context = useContext(LanguageContext);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

      <ModalForm show={show} handleClose={handleClose} />
    </>
  );
};

export default Header;
