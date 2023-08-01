// import Link from "next/link";
// import styles from "./Navigation.module.css";

// const links = [
//   {
//     label: "Trabajos",
//     route: "/work",
//   },
//   {
//     label: "Sobre mi",
//     route: "/about",
//   },
//   {
//     label: "Contacto",
//     route: "/contact",
//   },
// ];

// export function Navigation() {
//   return (
//     <header className={styles.header}>
//       <div className={styles.datos}>
//         <h3>Alberto GoGlobal</h3>
//         <p>
//           Alberto GoGlobal is a PAGINITAS WEB at the Cosas™ based in Sagres,
//           Portugal. Alberto GoGlobal has a passion for Webs with lots of focus
//           on hacerlas bien
//         </p>
//         <p>
//           Desarrollador Web
//           <br />N 3° 42' 22"
//           <br />W 40° 24' 4"
//         </p>
//       </div>

//       <nav>
//         <ul className={styles.navigation}>
//           {links.map(({ label, route }) => (
//             <li key={route}>
//               <Link className={styles.link} href={route}>
//                 {label}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </header>
//   );
// }
