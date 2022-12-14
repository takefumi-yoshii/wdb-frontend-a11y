import { Card } from "./Card/bad";
import { mock } from "./mock";
import styles from "./styles.module.css";

export function Body() {
  return (
    <div className={styles.body}>
      <h2 className={styles.heading}>
        最新記事一覧
      </h2>
      <div className={styles.articles}>
        {mock.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
