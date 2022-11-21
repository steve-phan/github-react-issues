import { IssueListing } from "./IssueListing";
import { render } from "../../testProvider";

const subject = () => render(<IssueListing />, { withApollo: true });

describe("IssueListing", () => {
  it("should render correctly", () => {
    const { baseElement } = subject();

    expect(baseElement).toBeTruthy();
  });
});
