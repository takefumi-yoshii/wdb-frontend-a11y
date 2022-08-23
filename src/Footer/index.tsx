import { useId } from "react";
import styles from "./styles.module.css";

export function Footer() {
  const headingId = useId();
  return (
    <footer aria-labelledby={headingId} className={styles.footer}>
      <h2 id={headingId} className={styles.heading}>
        My News Portal
      </h2>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="/terms">ご利用規約</a>
          </li>
          <li>
            <a href="/privacy-policy">プライバシーポリシー</a>
          </li>
          <li>
            <a href="/inquiry">お問合せ</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
