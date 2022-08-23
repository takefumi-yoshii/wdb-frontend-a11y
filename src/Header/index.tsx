import { useId } from "react";
import { Nav } from "./Nav";
import styles from "./styles.module.css";

export function Header() {
  const headingId = useId();
  return (
    <header aria-labelledby={headingId} className={styles.header}>
      <h1 id={headingId} className={styles.heading}>
        My News Portal
      </h1>
      <Nav />
      <input
        type="search"
        className={styles.search}
        placeholder="サイト内検索"
      />
    </header>
  );
}
