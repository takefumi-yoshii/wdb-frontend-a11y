import styles from "./styles.module.css";

export function Search() {
  return (
    <input
      type="search"
      className={styles.search}
      placeholder="サイト内検索"
    />
  );
}
