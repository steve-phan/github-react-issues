import { HelloWorld } from "../components/HelloWorld/HelloWorld";
import { IssueListing } from "../components/IssueListing/IssueListing";
import { useMounted } from "../libs/hooks";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { isMounted } = useMounted();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Github React Issues</h1>
      {isMounted && <IssueListing />}
    </div>
  );
}
