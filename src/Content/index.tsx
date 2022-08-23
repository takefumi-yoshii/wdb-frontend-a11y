import { Aside } from "./Aside";
import { Breadcrumb } from "./Breadcrumb";
import { Body } from "./Body";
import styles from "./styles.module.css";

export function Content() {
  return (
    <div className={styles.content}>
      <main className={styles.main}>
        <Breadcrumb />
        <Body />
      </main>
      <Aside />
    </div>
  );
}
