import { Form } from "./Form/bad";
import styles from "./styles.module.css";
import { Topics } from "./Topics/bad";

export function Aside() {
  return (
    // ランドマークとして識別されていない
    <div className={styles.aside}>
      <Form />
      <Topics />
    </div>
  );
}
