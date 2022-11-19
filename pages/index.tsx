import { HelloWorld } from "../components/HelloWorld/HelloWorld";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Github React Issues</h1>
      <HelloWorld />
    </div>
  );
}
