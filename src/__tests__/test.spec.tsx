import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import { Home } from "../pages/Home";

describe("test", () => {
  it("should pass", () => {
    const { getByTestId, debug } = render(<Home />);

    debug();

    const count = getByTestId("count");

    expect(count.props.children).toBe(0);

    const increaseButton = getByTestId("increase-button");

    fireEvent.press(increaseButton);
    fireEvent.press(increaseButton);

    expect(count.props.children).toBe(2);

    const decreaseButton = getByTestId("decrease-button");
    fireEvent.press(decreaseButton);

    expect(count.props.children).toBe(1);
  });
});
