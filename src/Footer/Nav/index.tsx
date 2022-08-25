import styles from "./styles.module.css";

export function Nav() {
  return (
    <nav
      aria-label="補足メニュー"
      className={styles.nav}
    >
      <ul>
        <li>
          <a href="/terms">ご利用規約</a>
        </li>
        <li>
          <a href="/privacy-policy">
            プライバシーポリシー
          </a>
        </li>
        <li>
          <a href="/inquiry">お問合せ</a>
        </li>
      </ul>
    </nav>
  );
}
