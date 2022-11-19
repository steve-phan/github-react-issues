import React, { useState } from "react";

import { useFetchingData } from "../../libs/hooks/useFetchingData";
import { STATE, useIssueState } from "../../libs/hooks";
import { GET_ISSUES, GET_ISSUES_PAGANITION } from "../../libs/apollo-graphql";
import { IIssue } from "./Issue.types";
import { IssueItem } from "../IssueItem/IssueItem";
import { Loading } from "../Loading/Loading";
import { Reload } from "../Reload/Reload";
import styles from "./IssueListing.module.css";
import { RadioButton } from "../RadioButton/RadioButton";

export const IssueListing = () => {
  const [currentCursor, setCurrentCursor] = useState("");
  const { issueState, handleStatesChange } = useIssueState();
  const { data, loading, error } = useFetchingData({
    issueState,
    //TODO: dynamic query based on variable?
    query: currentCursor ? GET_ISSUES_PAGANITION : GET_ISSUES,
    before: currentCursor,
  });

  if (loading) return <Loading />;
  if (error) return <Reload />;
  const issues = data?.repository.issues.edges as {
    cursor: string;
    node: IIssue;
  }[];
  return (
    <div className={styles.wrapper}>
      <div className={styles.toolbar}>
        <div>
          <RadioButton
            label="Issues Open"
            value={issueState === STATE.OPEN}
            onChange={handleStatesChange}
          />
          <RadioButton
            label="Issues Closed"
            value={issueState === STATE.CLOSED}
            onChange={handleStatesChange}
          />
        </div>
      </div>
      <div>
        {issues.map((issue) => (
          <a
            key={issue.cursor}
            target="__blank"
            href={`https://github.com/reactjs/reactjs.org/issues/${issue.node.number}`}
          >
            <IssueItem issueState={issueState} node={issue.node} />
          </a>
        ))}
      </div>
    </div>
  );
};
