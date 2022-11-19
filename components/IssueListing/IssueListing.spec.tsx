import { render } from "@testing-library/react";
import { MockedProvider } from "@apollo/react-testing";

import { IssueListing } from "./IssueListing";
import { mockIssuesData, mockIssuesQuery } from "../../__MOCK__";

const mocks = [
  {
    request: mockIssuesQuery,
    result: {
      data: mockIssuesData,
    },
  },
];

const subject = () =>
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <IssueListing />
    </MockedProvider>
  );

describe("IssueListing", () => {
  it("should render correctly", () => {
    const { baseElement } = subject();

    expect(baseElement).toBeTruthy();
  });
});
