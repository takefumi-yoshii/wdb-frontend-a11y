import styles from "./styles.module.css";

export function Breadcrumb() {
  return (
    // <nav>要素でマークアップすべき
    <div className={styles.breadcrumb}>
      <a href="/">ホーム</a>
      {/* aria-current を使うと、スタイリングとa11y配慮が同時にできる */}
      <a
        className={styles.current}
        href="/articles"
      >
        記事一覧
      </a>
    </div>
  );
}
