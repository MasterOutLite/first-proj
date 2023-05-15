import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent, userEvent } from "@testing-library/react";
import ModalForm from "../components/Modal";
import Contacts from "../Pages/Contacts";
import Header from "../Header";

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

describe("Header component", () => {
  test("renders navbar links", () => {
    render(<Header />);

    const homeLink = screen.getByText(/home/i);
    const aboutLink = screen.getByText(/about us/i);
    const contactsLink = screen.getByText(/contacts/i);
    const blogLink = screen.getByText(/blog/i);

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(contactsLink).toBeInTheDocument();
    expect(blogLink).toBeInTheDocument();
  });

  test("ModalForm is rendered correctly", () => {
    render(<Header />);
    const loginButton = screen.getByText("Login");

    fireEvent.click(loginButton);

    const modalCloseButton = screen.getByRole("button", { name: "Close" });

    expect(modalCloseButton).toBeInTheDocument();
  });

  test("ModalForm closes when close button is clicked", () => {
    render(<Header />);
    const loginButton = screen.getByText("Login");

    fireEvent.click(loginButton);

    const modalCloseButton = screen.getByRole("button", { name: "Close" });

    fireEvent.click(modalCloseButton);

    const modalTitle = screen.queryByText("Modal Title");
    const modalCloseButtonAfterClose = screen.queryByRole("button", { name: "Close" });

    expect(modalTitle).toBeNull();
  });
});
