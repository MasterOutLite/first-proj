import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import ModalForm from "../components/Modal";
import Contacts from "../Pages/Contacts";

describe("ModalForm", () => {
  it("should show the form when the show prop is true", () => {
    const handleClose = jest.fn();
    const { getByLabelText, getByText } = render(<ModalForm show={true} handleClose={handleClose} />);
    const emailInput = getByLabelText(/email address/i);
    const passwordInput = getByLabelText(/password/i);
    const submitButton = getByText(/submit/i);

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});

describe("Contacts component", () => {
  it("renders the form and submits feedback successfully", async () => {
    render(<Contacts />);

    const emailInput = screen.getByLabelText(/email/i);
    fireEvent.change(emailInput, { target: { value: "test@test.com" } });

    const feedbackInput = screen.getByLabelText(/feedback/i);
    fireEvent.change(feedbackInput, { target: { value: "Test feedback" } });

    const submitButton = screen.getByText(/submit/i);
    fireEvent.click(submitButton);
  });
});
