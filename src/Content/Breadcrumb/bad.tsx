import styles from "./styles.module.css";

export function Breadcrumb() {
  return (
    // ランドマークとして識別されない
    <div className={styles.breadcrumb}>
      {/* aria-current を使うと、スタイリングとa11y配慮が同時にできる */}
      <a className={styles.current} href="/">
        ホーム
      </a>
      <a href="/articles">記事一覧</a>
      <a href="/settings">設定</a>
    </div>
  );
}
