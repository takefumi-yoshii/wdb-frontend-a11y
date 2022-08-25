import { useId } from "react";
import { Nav } from "./Nav";
import { Search } from "./Search";
import styles from "./styles.module.css";

export function Header() {
  const headingId = useId();
  return (
    <header
      aria-labelledby={headingId}
      className={styles.header}
    >
      <h1
        id={headingId}
        className={styles.heading}
      >
        My Travel Portal
      </h1>
      <Nav />
      <Search />
    </header>
  );
}
