import styles from "./styles.module.css";

export function Nav() {
  return (
    // <nav>要素でマークアップすべき
    <div className={styles.nav}>
      <ol>
        <li>
          {/* aria-current でa11y配慮できる */}
          <a className={styles.current} href="/">
            ホーム
          </a>
        </li>
        <li>
          <a href="/articles">記事一覧</a>
        </li>
        <li>
          <a href="/settings">設定</a>
        </li>
      </ol>
    </div>
  );
}
