import React, { useState } from "react";

import { useFetchingData } from "../../libs/hooks/useFetchingData";
import { useIssueState } from "../../libs/hooks";
import { GET_ISSUES, GET_ISSUES_PAGANITION } from "../../libs/apollo-graphql";
import { IIssue } from "./Issue.types";
import { IssueItem } from "../IssueItem/IssueItem";

export const IssueListing = () => {
  const [currentCursor, setCurrentCursor] = useState("");
  const { issueState, handleStatesChange } = useIssueState();
  const { data, loading, error } = useFetchingData({
    issueState,
    //TODO: dynamic query based on variable?
    query: currentCursor ? GET_ISSUES_PAGANITION : GET_ISSUES,
    before: currentCursor,
  });

  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>Something wrong</h1>;
  const issues = data?.repository.issues.edges as {
    cursor: string;
    node: IIssue;
  }[];
  return (
    <div>
      {issues.map((issue) => (
        <IssueItem
          key={issue.cursor}
          issueState={issueState}
          node={issue.node}
        />
      ))}
    </div>
  );
};
