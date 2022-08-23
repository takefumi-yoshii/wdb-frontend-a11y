import styles from "./styles.module.css";

export function Nav() {
  return (
    <nav className={styles.nav}>
      <ol>
        <li>
          <a aria-current="page" href="/01.html">
            ホーム
          </a>
        </li>
        <li>
          <a href="/02.html">記事一覧</a>
        </li>
        <li>
          <a href="/03.html">設定</a>
        </li>
      </ol>
    </nav>
  );
}
