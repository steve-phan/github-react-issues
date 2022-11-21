import { render as originalRender } from "@testing-library/react";

import { MockedProvider } from "@apollo/react-testing";

import { mockIssuesData, mockIssuesQuery } from "./mock_issues_data";

const mocks = [
  {
    request: mockIssuesQuery,
    result: {
      data: mockIssuesData,
    },
  },
];

export const render = (
  ui: React.ReactElement,
  { withApollo = false }: { withApollo?: boolean }
) => {
  if (withApollo) {
    return originalRender(
      <MockedProvider mocks={mocks} addTypename={false}>
        {ui}
      </MockedProvider>
    );
  }

  return originalRender(ui);
};
