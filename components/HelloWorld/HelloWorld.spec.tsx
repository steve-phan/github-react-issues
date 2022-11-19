import { render } from "@testing-library/react";

import { HelloWorld } from "./HelloWorld";

describe("HelloWorld", () => {
  it("Should render correctly", () => {
    const { baseElement } = render(<HelloWorld />);
    expect(baseElement).toBeTruthy();
  });
});
