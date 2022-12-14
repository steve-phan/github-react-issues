import React, { useState } from "react";

import { useFetchingData } from "../../libs/hooks/useFetchingData";
import { STATE, useIssueState, useMediaQuery } from "../../libs/hooks";
import { GET_ISSUES, GET_ISSUES_PAGANITION } from "../../libs/apollo-graphql";
import { IIssue } from "./Issue.types";
import { IssueItem } from "../IssueItem/IssueItem";
import { Loading } from "../Loading/Loading";
import { Reload } from "../Reload/Reload";
import styles from "./IssueListing.module.css";
import { RadioButton } from "../RadioButton/RadioButton";
import { Pagination } from "../Pagination/Pagination";

export const IssueListing = () => {
  const [currentCursor, setCurrentCursor] = useState("");
  const { issueState, currentPage, setCurrentPage, handleStatesChange } =
    useIssueState();
  const { matches } = useMediaQuery("(max-width: 460px)");
  const { data, loading, error, previousData } = useFetchingData({
    issueState,
    //TODO: dynamic query based on variable?
    query: currentCursor ? GET_ISSUES_PAGANITION : GET_ISSUES,
    before: currentCursor,
  });

  if (loading && !previousData) return <Loading />;

  if (error) return <Reload />;

  const issues = (data?.repository.issues.edges ||
    previousData?.repository.issues.edges) as {
    cursor: string;
    node: IIssue;
  }[];

  const totalCount = (data?.repository.issues.totalCount ||
    previousData?.repository.issues.totalCount) as number;

  const handlePageChange = (num: number | string) => {
    if (typeof num !== "string") {
      setCurrentPage(num);
      setCurrentCursor(issues[issues.length - 1].cursor);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.toolbar} ${matches ? styles.toolbarMobile : ""}`}
      >
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
        <div>Current page: {currentPage}</div>
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
      <div>
        <Pagination
          onPageChange={handlePageChange}
          totalCount={totalCount}
          siblingCount={2}
          pageSize={10}
          currentPage={currentPage}
          matches={matches}
        />
      </div>
    </div>
  );
};
