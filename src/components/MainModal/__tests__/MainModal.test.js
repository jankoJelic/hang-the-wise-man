import { fireEvent, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

import MainModal from "../MainModal";

const mockClickConfirmButton = jest.fn();
const mockCancelClick = jest.fn();

const renderMainModal = () =>
  render(
    <MainModal onClickButton={mockClickConfirmButton} title="Modal" visible />
  );

const renderModalWithTwoButtons = () =>
  render(
    <MainModal
      onClickButton={mockClickConfirmButton}
      onClickCancel={mockCancelClick}
      confirmButtonTitle="Submit"
      title="Modal"
      visible
      showTwoButtons
    />
  );

it("renders correctly", () => {
  const tree = renderer.create(<MainModal />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe("buttons", () => {
  it("shows one button by default", async () => {
    const wrapper = renderMainModal();
    expect(await wrapper.findAllByRole("button")).toHaveLength(1);
  });

  it("contains two buttons when 'showTwoButtons' prop is true", async () => {
    const wrapper = renderModalWithTwoButtons();
    expect(await wrapper.findAllByRole("button")).toHaveLength(2);
  });
});

describe("onClick handlers", () => {
  it("calls desired functions when buttons are being clicked", async () => {
    const wrapper = renderModalWithTwoButtons();

    const confirmButton = wrapper.getByText("Submit");
    const cancelButton = wrapper.getByText("Cancel");

    fireEvent.click(confirmButton);
    fireEvent.click(cancelButton);
    fireEvent.click(cancelButton);

    expect(mockClickConfirmButton).toHaveBeenCalledTimes(1);
    expect(mockCancelClick).toHaveBeenCalledTimes(2);
  });
});
