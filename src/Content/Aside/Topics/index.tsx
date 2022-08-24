import { useId } from "react";
import styles from "./styles.module.css";
import Book from "./assets/book.svg";
import Camera from "./assets/camera.svg";
import Photo from "./assets/photo.svg";

export function Topics() {
  const headingId = useId();
  return (
    <section aria-labelledby={headingId} className={styles.topics}>
      <h3 id={headingId} className={styles.heading}>
        トピックス一覧
      </h3>
      <ul aria-labelledby={headingId}>
        <li>
          <a href="/topics/a">
            <img src={Book} alt="" />
            科学
          </a>
        </li>
        <li>
          <a href="/topics/b">
            <img src={Photo} alt="" />
            自然
          </a>
        </li>
        <li>
          <a href="/topics/c">
            <img src={Camera} alt="" />
            エンタメ
          </a>
        </li>
      </ul>
      <p>
        <a className={styles.learnMore} href="/topics">
          トピックス一覧ページへ
        </a>
      </p>
    </section>
  );
}
