import { Aside } from "./Aside/bad";
import { Breadcrumb } from "./Breadcrumb/bad";
import { Body } from "./Body/bad";
import styles from "./styles.module.css";

export function Content() {
  return (
    <div className={styles.content}>
      {/* ランドマークとして識別されない */}
      <div className={styles.main}>
        <Breadcrumb />
        <Body />
      </div>
      <Aside />
    </div>
  );
}
