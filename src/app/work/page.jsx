import Link from "next/link";
import styles from "./Work.module.css";

export default function Work() {
  return (
    <>
      <section className={styles.body}>
        <hr />
        <section className={styles.seccion1}>
          <h2>Trabajos</h2>
          <h3>
            PROYECTOS SELECCIONADOS
          </h3>
        </section>
        <hr />
        <section>
          <div className={styles.proyectoCompleto}>
            <div>
              <h5>BeReArt</h5>
              <h6>Tecnologías:</h6>
              <ul>
                <li>NodeJS</li>
                <li>ExpressJs</li>
                <li>MongoDB </li>
                <li>Mongoose</li>
                <li>Handlebars</li>
              </ul>
            </div>
            <div className={styles.descripcionProyecto}>
              <h5>02.2023</h5>
              <p>
                Proyecto de backend realizado por Aaron Barcos y Alberto Gómez
                para el segundo proyecto del bootcamp de Ironhack. Con el modelo
                de la red social BeReal, los usuarios tendrán que subir cada dia
                una foto imitando un cuadro famoso.
              </p>
            </div>
            <div>
              <Link href="https://bereart.cyclic.app/">Visitar web</Link>
            </div>
          </div>
          <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </section>
        <hr />
        <section>
          <div className={styles.proyectoCompleto}>
            <div>
              <h5>Jacaton</h5>
              <h6>Tecnologías:</h6>
              <ul>
                <li>ReactJs</li>
                <li>NodeJS</li>
                <li>ExpressJs</li>
                <li>MongoDB </li>
                <li>Mongoose</li>
              </ul>
            </div>
            <div className={styles.descripcionProyecto}>
              <h5>03.2023</h5>
              <p>
                Proyecto fullstack donde los usuarios podrán encontrar los
                hackathones que se celebrarán en España. Las empresas podrán
                publicar sus eventos para darle más difusión.
              </p>
            </div>
            <div>
              <Link href="https://hackaton-app.netlify.app/">Visitar web</Link>
            </div>
          </div>
          <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </section>
        <hr />
        <section>
          <div className={styles.proyectoCompleto}>
            <div>
              <h5>JavaScript Disco</h5>
              <h6>Tecnologías:</h6>
              <ul>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
            <div className={styles.descripcionProyecto}>
              <h5>01.2023</h5>
              <p>Mini videojuego ambientado en la música disco.</p>
            </div>
            <div>
              <Link href="https://albertogomrod.github.io/javascript-disco/">
                Visitar web
              </Link>
            </div>
          </div>
          <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </section>
      </section>
    </>
  );
}
