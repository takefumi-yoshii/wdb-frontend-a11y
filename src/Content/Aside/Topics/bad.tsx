import styles from "./styles.module.css";
import Book from "./assets/book.svg";
import Camera from "./assets/camera.svg";
import Photo from "./assets/photo.svg";

export function Topics() {
  return (
    <div className={styles.topics}>
      <h3 className={styles.heading}>トピックス一覧</h3>
      <ul>
        <li>
          <a href="/topics/a">
            {/* 読み上げノイズ。読み飛ばしてほしい装飾画像は、無理に alt 指定しない */}
            <img src={Book} alt="本アイコン" />
            科学
          </a>
        </li>
        <li>
          <a href="/topics/b">
            {/* 読み上げノイズ。読み飛ばしてほしい装飾画像は、無理に alt 指定しない */}
            <img src={Photo} alt="写真アイコン" />
            自然
          </a>
        </li>
        <li>
          <a href="/topics/c">
            {/* 読み上げノイズ。読み飛ばしてほしい装飾画像は、無理に alt 指定しない */}
            <img src={Camera} alt="カメラアイコン" />
            エンタメ
          </a>
        </li>
      </ul>
      <p>
        <a className={styles.learnMore} href="/topics">
          トピックス一覧ページへ
        </a>
      </p>
    </div>
  );
}
