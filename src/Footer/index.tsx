import { useId } from "react";
import { Nav } from "./Nav";
import styles from "./styles.module.css";

export function Footer() {
  const headingId = useId();
  return (
    <footer
      aria-labelledby={headingId}
      className={styles.footer}
    >
      <h2
        id={headingId}
        className={styles.heading}
      >
        My Travel Portal
      </h2>
      <Nav />
    </footer>
  );
}
