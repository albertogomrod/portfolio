import styles from "./About.module.css";
export default function About() {
  return (
    <>
      <section className={styles.body}>
        <div className={styles.div}>
          <img src="" alt="yop :P" />
        </div>

        <div className={styles.div}>
          <h5>
            ¡Hola! Soy Alberto Gómez, un desarrollador frontend viviendo en
            Madrid.
          </h5>
      
          <p>
            Bienvenido a mi porfolio! Aquí podréis encontrar un resumen de mis 3
            pilares: esencia, creatividad y satisfacción del cliente. La esencia
            de mi trabajo es combinar modernidad y tecnología. La creatividad
            hace de cada proyecto una experiencia única.
          </p>
          <hr />
          <img src="" alt="flechita" />
        </div>

        <div className={styles.div}>
          <div className={styles.actual}>
            <h5>Actualmente</h5>
            <img src="" alt="flechita" />
          </div>

          <p>
            En estos momentos me encuentro trabajando como Frontend Developer en
            la consultora informática Bosonit.
          </p>
        </div>
      </section>
    </>
  );
}
