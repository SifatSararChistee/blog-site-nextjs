import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sifat's Blog Site",
  description: "Blog Site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <section>
          <Navbar></Navbar>
        </section>
        <section className="min-h-screen">{children}</section>
        <section className="bg-base-200 ">
          <Footer></Footer>
        </section>
      </body>
    </html>
  );
}
