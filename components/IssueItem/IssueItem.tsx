import React from "react";

import { TStates, STATE } from "../../libs/hooks";
import { IIssue } from "../IssueListing/Issue.types";
import { IssueClosedItem } from "./IssueClosedItem";
import { IssueOpenItem } from "./IssueOpenItem";

export const IssueItem = ({
  issueState,
  node,
}: {
  issueState: TStates;
  node: IIssue;
}) => {
  if (issueState === STATE.OPEN) {
    return <IssueOpenItem {...node} />;
  }
  return <IssueClosedItem {...node} />;
};
