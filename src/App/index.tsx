import { Aside } from "../Aside";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Main } from "../PageMain";
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
