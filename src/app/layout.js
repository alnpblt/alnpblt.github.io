import { Inter } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss=false;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Allen Poblete Portfolio",
  openGraph: {
    title: "Allen Poblete Portfolio",
    description: "Experienced backend developer specializing in RESTful APIs, Javascript(Node.js), PHP, MySQL and Docker. Passionate about crafting efficient and scalable solutions. Let‘s turn your ideas into reality!",
    siteName: 'Allen Poblete Portfolio'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth snap-y snap-mandatory'>
      <body className={`${inter.className} `}>{children}</body>
    </html>
  );
}
