import { useId } from "react";
import styles from "./styles.module.css";

type Props = {
  id: string;
  title: string;
  body: string;
};

export function Article({ id, title, body }: Props) {
  return (
    // 領域のアクセシブルネームが未定義
    <article className={styles.article}>
      {/* 見栄えのみの見出しになっている */}
      <p className={styles.heading}>{title}</p>
      <p>{body}</p>
      {/* 見栄えのみのリンクになっている */}
      <p
        className={styles.link}
        onClick={(event) => {
          console.log(id);
        }}
      >
        詳細ページへ
      </p>
    </article>
  );
}
