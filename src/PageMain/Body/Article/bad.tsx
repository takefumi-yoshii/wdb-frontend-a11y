import styles from "./styles.module.css";

type Props = {
  id: string;
  title: string;
  body: string;
  imageUrl: string;
  imageAlt?: string;
};

export function Article({
  id,
  title,
  body,
  imageUrl,
  imageAlt,
}: Props) {
  return (
    // 領域のアクセシブルネームが未定義
    // セクショニングされていない
    <div className={styles.article}>
      {/* alt がない */}
      <img src={imageUrl} alt={imageAlt} />
      <div>
        {/* 見栄えのみの見出しになっている */}
        <p className={styles.heading}>{title}</p>
        <p className={styles.body}>{body}</p>
        {/* 見栄えのみのリンクになっている */}
        <p
          className={styles.link}
          onClick={() => {
            // SPA 遷移ができていても、リンクとして識別されない
            // router.push(`/articles/${id}`)
          }}
        >
          詳細ページへ
        </p>
      </div>
    </div>
  );
}
