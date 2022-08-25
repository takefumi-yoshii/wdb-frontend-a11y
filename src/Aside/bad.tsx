import { Form } from "./Form/bad";
import styles from "./styles.module.css";
import { Topics } from "./Topics/bad";

export function Aside() {
  return (
    // <aside>要素でマークアップすべき
    <div className={styles.aside}>
      <Form />
      <Topics />
    </div>
  );
}
