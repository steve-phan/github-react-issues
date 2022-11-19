import React from "react";

import styles from "./Reload.module.css";

export const Reload = () => {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className={styles.wrapper}>
      <h3>Something gone wrong...</h3>
      <button onClick={refreshPage}>Click to reload!</button>
    </div>
  );
};
