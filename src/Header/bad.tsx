import { Nav } from "./Nav/bad";
import { Search } from "./Search";
import styles from "./styles.module.css";

export function Header() {
  return (
    // <header>要素でマークアップすべき
    <div className={styles.header}>
      <h1 className={styles.heading}>
        My Travel Portal
      </h1>
      <Nav />
      <Search />
    </div>
  );
}
