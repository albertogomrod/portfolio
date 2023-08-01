import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="datos">
          <h3>Alberto GoGlobal</h3>
          <p>
            Alberto GoGlobal is a PAGINITAS WEB at the Cosas™ based in Sagres,
            Portugal. Alberto GoGlobal has a passion for Webs with lots of focus
            on hacerlas bien
          </p>
          <p>
            Desarrollador Web
            <br />N 3° 42' 22"
            <br />W 40° 24' 4"
          </p>
        </div>

        <div className="nav">
          <ul className="navigation">
            <li className="li-nav">
              <Link className="link" href="/work">
                Trabajos
              </Link>
            </li>
            <li className="li-nav">
              <Link className="link" href="/about">
                Sobre mí
              </Link>
            </li>
            <li className="li-nav">
              <Link className="link" href="/contact">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </header>
      <section>
        <p id="iniciales">AGWD</p>
      </section>
    </>
  );
}
