import { useState } from "react";

export const STATE = {
  OPEN: "OPEN",
  CLOSED: "CLOSED",
} as const;

export type TStates = keyof typeof STATE;

export const useIssueState = () => {
  const [states, setState] = useState<TStates>(STATE.OPEN);

  const handleStatesChange = () => {
    if (states === STATE.OPEN) {
      setState(STATE.CLOSED);
    } else {
      setState(STATE.OPEN);
    }
  };
  return {
    issueState: states,
    handleStatesChange,
  };
};
