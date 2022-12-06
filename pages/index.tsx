import styled, { css } from "styled-components";

import { IssueListing } from "../components/IssueListing/IssueListing";
import { useMounted } from "../libs/hooks";
import styles from "../styles/Home.module.css";
const AA = css`
  color: pink;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  /* color: palevioletred;
   */
  ${AA}
`;
export default function Home() {
  const { isMounted } = useMounted();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Github React Issues</h1>
      <Title>A title from styled-components</Title>
      {isMounted && <IssueListing />}
    </div>
  );
}
