import { Body } from "./Body";
import { Breadcrumb } from "./Breadcrumb";
import styles from "./styles.module.css";

export function Main() {
  return (
    <main className={styles.main}>
      <Breadcrumb />
      <Body />
    </main>
  );
}
