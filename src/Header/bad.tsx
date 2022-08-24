import { Nav } from "./Nav/bad";
import styles from "./styles.module.css";

export function Header() {
  return (
    // ランドマークとして識別されない
    <div className={styles.header}>
      <h1 className={styles.heading}>My News Portal</h1>
      <Nav />
      <input type="text" className={styles.search} placeholder="サイト内検索" />
    </div>
  );
}
