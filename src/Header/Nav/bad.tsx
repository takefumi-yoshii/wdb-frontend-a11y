import styles from "./styles.module.css";

export function Nav() {
  return (
    // ランドマークとして識別されない
    <div className={styles.nav}>
      <ol>
        <li>
          <a aria-current="page" href="/">
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
