import styles from "./styles.module.css";

export function Breadcrumb() {
  return (
    <nav
      aria-label="パンくずリスト"
      className={styles.breadcrumb}
    >
      <a href="/">ホーム</a>
      <a aria-current="page" href="/articles">
        記事一覧
      </a>
    </nav>
  );
}
