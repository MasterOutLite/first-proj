import { useState, useContext } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { LanguageContext } from "../context/LanguageContext";

const Contacts = () => {
  // const context = useContext(LanguageContext);
  const context = { language: "en" };

  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <Container>
      <h1 className="py-3">{context.language === "uk" ? "Наші контакти" : "Contact us"}</h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>{context.language === "uk" ? "Електронна адреса" : "Email"}</Form.Label>
          <Form.Control
            type="email"
            placeholder={context.language === "uk" ? "Введіть електронну адресу" : "Enter email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid">
            {context.language === "uk"
              ? "Будь ласка, введіть дійсну адресу електронної пошти."
              : "Please enter a valid email address."}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicFeedback">
          <Form.Label className="mt-3">{context.language === "uk" ? "Зворотній зв'язок" : "Feedback"}</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder={context.language === "uk" ? "Введіть відгук" : "Enter feedback"}
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid">
            {context.language === "uk" ? "Будь ласка, введіть свій відгук." : " Please enter your feedback."}
          </Form.Control.Feedback>
        </Form.Group>

        <Button type="submit" className="mt-3">
          {context.language === "uk" ? "Підтвердити" : "Submit"}
        </Button>
      </Form>
    </Container>
  );
};

export default Contacts;
