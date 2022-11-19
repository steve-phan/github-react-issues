import React from "react";

import { CommentIcon } from "../../icons/CommentIcon";
import { OpenIcon } from "../../icons/OpenIcon";
import { IIssue } from "../IssueListing/Issue.types";
import styles from "./IssueItem.module.css";

export const IssueOpenItem = ({
  id,
  number,
  title,
  author,
  comments,
  createdAt,
}: IIssue) => {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.states} ${styles.open}`}>
        <OpenIcon />
      </div>
      <div className={styles.descWrapper}>
        <div className={styles.descTitle}>{title}</div>
        <div className={styles.descInfo}>
          <span>
            {`#${number} opened by ${author?.login} on ${createdAt.slice(0, 10)}
          `}
          </span>
        </div>
      </div>
      <div className={styles.comment}>
        <CommentIcon /> {comments?.totalCount}
      </div>
    </div>
  );
};
