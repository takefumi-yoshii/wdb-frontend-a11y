import { useId } from "react";
import { Form } from "./Form";
import styles from "./styles.module.css";
import { Topics } from "./Topics";

export function Aside() {
  const headingId = useId();
  return (
    <aside aria-labelledby={headingId} className={styles.aside}>
      <Form />
      <Topics />
    </aside>
  );
}
