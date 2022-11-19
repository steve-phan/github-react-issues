import { render, screen } from "@testing-library/react";

import { IssueItem } from "./IssueItem";

const mockNode = {
  id: "super_id_dont_x",
  number: 30,
  title: "How can we create a webapp?",
  author: { login: "steve" },
  comments: {
    totalCount: 3,
  },
  createdAt: "long  time ago",
};

describe("IssueItem", () => {
  describe("When fetching OPEN state", () => {
    it("Should render IssueOpenItem component", () => {
      render(<IssueItem issueState="OPEN" node={mockNode} />);
      expect(screen.getByText(/opened by/)).toBeInTheDocument();
    });
  });
  describe("When fetching CLOSED state", () => {
    it("Should render IssueCLOSEDItem component", () => {
      render(<IssueItem issueState="CLOSED" node={mockNode} />);
      expect(screen.getByText(/was closed/)).toBeInTheDocument();
    });
  });
});
