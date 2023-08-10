import styles from "./Contact.module.css";
export default function Contact() {
  return (
    <>
      <section className={styles.body}>
        <hr />
        <div className={styles.enlaces}>
          <div>
            <h5>Linkedin</h5>
            <p>01</p>
          </div>
          <div>
            <h5>Contacto</h5>
            <p>02</p>
          </div>
          <div>
            <h5>Volver a Inicio</h5>
            <p>03</p>
          </div>
        </div>
        <div>
          <p>©2023 Alberto GoGlobal</p>
          <p id="iniciales">AGWD</p>
        </div>
      </section>
    </>
  );
}
