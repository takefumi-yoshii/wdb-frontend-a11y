import styles from "./styles.module.css";

export function Breadcrumb() {
  return (
    <nav aria-label="パンくずリスト" className={styles.breadcrumb}>
      <a aria-current="page" href="/">
        ホーム
      </a>
      <a href="/articles">記事一覧</a>
      <a href="/settings">設定</a>
    </nav>
  );
}
