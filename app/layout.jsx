// app/layout.jsx
import "./globals.css";

// Components
import Header from "./components/Header/ Header";
// import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

export const metadata = {
  title: "CA Kanika Sharma",
  description: "Professional Chartered Accountancy Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {/* <Navbar/> */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
