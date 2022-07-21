import NameForm from "../NameForm";
import { render, screen } from "test-utils";
import { fireEvent } from "test-utils";

const renderNameForm = () => render(<NameForm />);

it("contains correct elements", () => {
  renderNameForm();

  expect(screen.getByText("Tell us your name!")).toBeInTheDocument();
  expect(screen.getByRole("textbox")).toBeInTheDocument();
  expect(screen.getByRole("button")).toBeInTheDocument();
  expect(screen.getByText("Enter")).toBeInTheDocument();
});

describe("button", () => {
  it("is disabled when input field is empty", () => {
    renderNameForm();

    expect(screen.getByRole("button")).toBeDisabled();
  });
});

describe("input field", () => {
  it("displays correct text entry and enables the button when has entry", () => {
    renderNameForm();

    const inputField: HTMLInputElement = screen.getByRole("textbox");

    fireEvent.change(inputField, { target: { value: "asdf" } });

    expect(inputField.value).toBe("asdf");
    expect(screen.getByRole("button")).not.toBeDisabled();
  });

  it("parses the input so only letters are accepted", () => {
    renderNameForm();

    const inputField: HTMLInputElement = screen.getByRole("textbox");

    fireEvent.change(inputField, { target: { value: "asdf23" } });

    expect(inputField.value).toBe("asdf");
  });
});
