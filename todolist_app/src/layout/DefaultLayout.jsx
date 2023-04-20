import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import styles from "./DefaultLayout.module.css";

//os arquivos de Layout são arquivos contendo conteudo em comum como Headers, footers e etc
//a tag Outlet se refere ao resto do conteudo que será carregado, ou seja, o conteudo unico de cada pagina
export function DefaultLayout() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
