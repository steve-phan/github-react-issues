import { screen } from "@testing-library/react";
import Home from "../pages/index";
import { render } from "../testProvider";

describe("Home", () => {
  describe("When enable SSR", () => {
    it("should render correctly", () => {
      const { baseElement } = render(<Home />, { withApollo: true });

      expect(baseElement).toBeTruthy();
      expect(screen.getByText(/styled-components/)).toBeInTheDocument();
    });
  });
});
