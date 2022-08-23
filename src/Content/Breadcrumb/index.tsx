import styles from "./styles.module.css";

export function Breadcrumb() {
  return (
    <nav aria-label="パンくずリスト" className={styles.breadcrumb}>
      <a aria-current="page" href="/01.html">
        ホーム
      </a>
      <a href="/02.html">記事一覧</a>
      <a href="/03.html">設定</a>
    </nav>
  );
}
