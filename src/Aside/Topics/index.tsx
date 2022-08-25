import { useId } from "react";
import Book from "./assets/book.svg";
import Camera from "./assets/camera.svg";
import Photo from "./assets/photo.svg";
import styles from "./styles.module.css";

export function Topics() {
  const headingId = useId();
  return (
    <section
      aria-labelledby={headingId}
      className={styles.topics}
    >
      <h3
        id={headingId}
        className={styles.heading}
      >
        トピックス一覧
      </h3>
      <nav aria-labelledby={headingId}>
        <ul>
          <li>
            <a href="/topics/seasonal">
              <img src={Book} alt="" />
              季節の特集
            </a>
          </li>
          <li>
            <a href="/topics/camp">
              <img src={Photo} alt="" />
              キャンプ特集
            </a>
          </li>
          <li>
            <a href="/topics/superb-view">
              <img src={Camera} alt="" />
              絶景スポット
            </a>
          </li>
        </ul>
      </nav>
      <p>
        <a
          className={styles.learnMore}
          href="/topics"
        >
          トピックス一覧ページへ
        </a>
      </p>
    </section>
  );
}
