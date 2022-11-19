import React from "react";

import { CloseIcon } from "../../icons/ClosedIcon";
import { CommentIcon } from "../../icons/CommentIcon";
import { IIssue } from "../IssueListing/Issue.types";
import styles from "./IssueItem.module.css";

export const IssueClosedItem = ({
  id,
  number,
  title,
  author,
  comments,
}: IIssue) => {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.states} ${styles.closed}`}>
        <CloseIcon />
      </div>
      <div className={styles.descWrapper}>
        <div className={styles.descTitle}>{title}</div>
        <div className={styles.descInfo}>
          <span>{`#${number} by ${author?.login} was closed`}</span>
        </div>
      </div>
      <div className={styles.comment}>
        <CommentIcon /> {comments?.totalCount}
      </div>
    </div>
  );
};
