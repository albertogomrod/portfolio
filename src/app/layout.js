import "./globals.css";
import { Inter } from "next/font/google";
// import { Navigation } from "./components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio Alberto GoGlobal",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Portfolio Alberto Gómez</title>
      </head>
      <body>
        {/* <Navigation /> */}
        {children}
      </body>
    </html>
  );
}
