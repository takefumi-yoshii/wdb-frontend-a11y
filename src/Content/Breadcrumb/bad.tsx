import styles from "./styles.module.css";

export function Breadcrumb() {
  return (
    <nav className={styles.breadcrumb}>
      {/* aria-current を使うと、スタイリングとa11y配慮が同時にできる */}
      <a className={styles.current} href="/01.html">
        ホーム
      </a>
      <a href="/02.html">記事一覧</a>
      <a href="/03.html">設定</a>
    </nav>
  );
}
