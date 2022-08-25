import styles from "./styles.module.css";

export function Form() {
  return (
    // アクセシブルネームがなく、ランドマークとして識別されていない
    <form
      className={styles.form}
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <div className={styles.group}>
        <p className={styles.heading}>ログイン</p>
        <div className={styles.row}>
          {/* 見栄えだけの label になっている */}
          <span className={styles.title}>
            会員ID
          </span>
          {/* アクセシブルネームがない */}
          <input
            id="userId"
            name="userId"
            type="text"
          />
        </div>
        <div className={styles.row}>
          {/* 見栄えだけの label になっている */}
          <span className={styles.title}>
            パスワード
          </span>
          {/* アクセシブルネームがない */}
          <input
            id="password"
            name="password"
            type="password"
          />
        </div>
        <div className={styles.keepSession}>
          <input
            id="keepSession"
            name="keepSession"
            type="checkbox"
          />
          <span>ログイン状態を保存する</span>
        </div>
      </div>
      <button className={styles.button}>
        ログイン
      </button>
    </form>
  );
}
