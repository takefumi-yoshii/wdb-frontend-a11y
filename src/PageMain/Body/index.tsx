import { useId } from "react";
import { Card } from "./Card";
import { mock } from "./mock";
import styles from "./styles.module.css";

export function Body() {
  const headingId = useId();
  return (
    <section
      aria-labelledby={headingId}
      className={styles.body}
    >
      <h2
        id={headingId}
        className={styles.heading}
      >
        最新記事一覧
      </h2>
      <div className={styles.articles}>
        {mock.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
