import Navbar from "@/components/layout/Navbar";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
