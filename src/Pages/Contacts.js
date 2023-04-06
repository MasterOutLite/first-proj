import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

const Contacts = () => {
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
      <h1 className="py-3">Contact us</h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid email address.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicFeedback">
          <Form.Label className="mt-3">Feedback</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please enter your feedback.
          </Form.Control.Feedback>
        </Form.Group>

        <Button type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Contacts;
