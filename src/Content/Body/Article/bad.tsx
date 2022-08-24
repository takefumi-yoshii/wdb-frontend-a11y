import { useId } from "react";
import styles from "./styles.module.css";

type Props = {
  id: string;
  title: string;
  body: string;
  imageUrl: string;
};

export function Article({ id, title, body, imageUrl }: Props) {
  return (
    // 領域のアクセシブルネームが未定義、セクショニングされていない
    <div className={styles.article}>
      {/* alt がない */}
      <img src={imageUrl} />
      <div>
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
      </div>
    </div>
  );
}
