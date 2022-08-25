import Book from "./assets/book.svg";
import Camera from "./assets/camera.svg";
import Photo from "./assets/photo.svg";
import styles from "./styles.module.css";

export function Topics() {
  return (
    <div className={styles.topics}>
      <h3 className={styles.heading}>
        トピックス一覧
      </h3>
      <ul>
        <li>
          {/* 「本アイコン季節の特集」と読まれる */}
          <a href="/topics/seasonal">
            <img src={Book} alt="本アイコン" />
            季節の特集
          </a>
        </li>
        <li>
          {/* 「写真アイコンキャンプ特集」と読まれる  */}
          <a href="/topics/camp">
            <img src={Photo} alt="写真アイコン" />
            キャンプ特集
          </a>
        </li>
        <li>
          {/* 「カメラアイコン絶景スポット」と読まれる */}
          <a href="/topics/superb-view">
            <img
              src={Camera}
              alt="カメラアイコン"
            />
            絶景スポット
          </a>
        </li>
      </ul>
      <p>
        <a
          className={styles.learnMore}
          href="/topics"
        >
          トピックス一覧ページへ
        </a>
      </p>
    </div>
  );
}
