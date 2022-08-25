import { Form } from "./Form";
import styles from "./styles.module.css";
import { Topics } from "./Topics";

export function Aside() {
  return (
    <aside className={styles.aside}>
      <Form />
      <Topics />
    </aside>
  );
}
