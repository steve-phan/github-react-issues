import { render, screen } from "@testing-library/react";

import { RadioButton } from "./RadioButton";

describe("RadioButton", () => {
  it("Should renders correctly", () => {
    const { baseElement } = render(
      <RadioButton value={true} label="Great Radio" onChange={() => {}} />
    );
    expect(baseElement).toBeTruthy();
  });
});
