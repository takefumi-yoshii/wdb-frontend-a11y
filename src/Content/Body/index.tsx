import { useId } from "react";
import { Article } from "./Article";
import { mock } from "./mock";
import styles from "./styles.module.css";

export function Body() {
  const headingId = useId();
  return (
    <section aria-labelledby={headingId} className={styles.body}>
      <h2 id={headingId} className={styles.heading}>
        記事一覧
      </h2>
      <div className={styles.articles}>
        {mock.map((item) => (
          <Article key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}