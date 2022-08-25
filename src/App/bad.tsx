import { Aside } from "../Aside/bad";
import { Footer } from "../Footer/bad";
import { Header } from "../Header/bad";
import { Main } from "../PageMain/bad";
import styles from "./styles.module.css";

export function App() {
  return (
    <div className="app">
      <Header />
      <div className={styles.content}>
        <Main />
        <Aside />
      </div>
      <Footer />
    </div>
  );
}
