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
//         <h5>ALBERTO GOGLOBAL™</h5>
//         <h5>
//           Web Developer
//         </h5>
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
