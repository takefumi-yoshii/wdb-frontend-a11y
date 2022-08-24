import { useId } from "react";
import styles from "./styles.module.css";

type Props = {
  id: string;
  title: string;
  body: string;
  imageUrl: string;
  imageAlt?: string;
};

export function Article({ id, title, body, imageUrl, imageAlt }: Props) {
  const headingId = useId();
  return (
    <article aria-labelledby={headingId} className={styles.article}>
      <img src={imageUrl} alt={imageAlt || ""} />
      <div>
        <h3 id={headingId} className={styles.heading}>
          {title}
        </h3>
        <p className={styles.body}>{body}</p>
        <a className={styles.link} href="#">
          詳細ページへ
        </a>
      </div>
    </article>
  );
}
