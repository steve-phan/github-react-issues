import { useEffect, useState } from "react";

export const STATE = {
  OPEN: "OPEN",
  CLOSED: "CLOSED",
} as const;

export type TStates = keyof typeof STATE;

export const useIssueState = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [states, setState] = useState<TStates>(STATE.OPEN);

  const handleStatesChange = () => {
    if (states === STATE.OPEN) {
      setState(STATE.CLOSED);
    } else {
      setState(STATE.OPEN);
    }
    setCurrentPage(1);
  };

  return {
    currentPage,
    issueState: states,
    handleStatesChange,
    setCurrentPage,
  };
};
