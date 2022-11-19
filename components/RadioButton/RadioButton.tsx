import React from "react";

import styles from "./RadioButton.module.css";

interface RadioButtonProps {
  label: string;
  value: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RadioButton = ({
  label,
  value,
  onChange,
}: RadioButtonProps): JSX.Element => {
  return (
    <label className={styles.wrapper}>
      <input type="radio" checked={value} onChange={onChange} />
      {label}
    </label>
  );
};
