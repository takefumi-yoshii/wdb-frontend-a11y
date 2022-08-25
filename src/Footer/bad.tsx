import { Nav } from "./Nav";
import styles from "./styles.module.css";

export function Footer() {
  return (
    // <footer>要素でマークアップすべき
    <div className={styles.footer}>
      <h2 className={styles.heading}>
        My Travel Portal
      </h2>
      <Nav />
    </div>
  );
}
