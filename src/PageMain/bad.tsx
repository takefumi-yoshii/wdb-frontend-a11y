import { Body } from "./Body/bad";
import { Breadcrumb } from "./Breadcrumb/bad";
import styles from "./styles.module.css";

export function Main() {
  return (
    // <main>要素でマークアップすべき
    <div className={styles.main}>
      <Breadcrumb />
      <Body />
    </div>
  );
}
