import styles from "../styles/Home.module.css";
import Script from "next/script";
import { useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("Aparelhos Conectados");

  const aparelho = {
    names: ["MaxPro", "Luz-Sala", "TV-Sansung"],
  };

  function desconect(id) {
    document.getElementById(id).style.backgroundColor = "red";
  }

  function inicial() {
    return aparelho.names?.map((doc, i) => {
      i++;
      return (
        <li key={i}>
          <div className="flex items-center text-center">
            {doc}
            <id
              id={i}
              className="flex bg-green-400 w-3 h-3 rounded-full m-3"
            ></id>
          </div>

          <button onClick={() => desconect(i)}> desconectar</button>
        </li>
      );
    });
  }

  return (
    <div className="flex">
      <Script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
        integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
        crossorigin="anonymous"
      ></Script>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
        integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
        crossorigin="anonymous"
      ></Script>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"
      ></Script>
      <Script
        src="https://kit.fontawesome.com/42c8de28f3.js"
        crossorigin="anonymous"
      ></Script>
      <div id="content" className={styles.content}>
        <div className={styles.phone}>
          <div className={styles.screen}>
            <div className={styles.top}>
              <div className={styles.dockLeft}>
                <span className={styles.clock}>22:45</span>
              </div>
              <div className={styles.dock}>
                <div className={styles.sensor}></div>
                <div className={styles.speaker}></div>
                <div className={styles.camera}></div>
              </div>
              <div className={styles.dockRight}>
                <div className={styles.signal}>
                  <i className="fas fa-signal"></i>
                </div>
                <div className={styles.wifi}>
                  <i className="fas fa-wifi"></i>
                </div>
                <div className={styles.battery}>
                  <i className="fas fa-battery"></i>
                </div>
              </div>
            </div>
            <header className={styles.header}>
              <button type="button" className="btn btn-secondary">
                Configurar Aparelhos
              </button>
              <button type="button" className="btn btn-secondary">
                Novo Aparelho
              </button>
            </header>
            <div id="itens" className={styles.itens}>
              <span>{title}</span>
              <span className={styles.ul} id="ul">
                {inicial()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
