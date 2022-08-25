import { useId } from "react";
import styles from "./styles.module.css";

export function Form() {
  const headingId = useId();
  return (
    <form
      aria-labelledby={headingId}
      className={styles.form}
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <fieldset className={styles.group}>
        <legend
          id={headingId}
          className={styles.heading}
        >
          ログイン
        </legend>
        <div className={styles.row}>
          <label
            htmlFor="userId"
            className={styles.title}
          >
            会員ID
          </label>
          <input
            id="userId"
            name="userId"
            type="text"
          />
        </div>
        <div className={styles.row}>
          <label
            htmlFor="password"
            className={styles.title}
          >
            パスワード
          </label>
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
          <label htmlFor="keepSession">
            ログイン状態を保存する
          </label>
        </div>
      </fieldset>
      <button className={styles.button}>
        ログイン
      </button>
    </form>
  );
}
