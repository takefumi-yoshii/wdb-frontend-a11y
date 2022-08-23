import { useId } from "react";
import styles from "./styles.module.css";

export function Aside() {
  const headingId = useId();
  return (
    // ランドーマークになっていない
    <div className={styles.topics}>
      <h2 className={styles.heading}>トピックス一覧</h2>
      <ul aria-labelledby={headingId}>
        <li>
          <a href="/topics/a.html">トピックA</a>
        </li>
        <li>
          <a href="/topics/b.html">トピックB</a>
        </li>
        <li>
          <a href="/topics/c.html">トピックC</a>
        </li>
      </ul>
    </div>
  );
}
