import { Inter, Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "A portfolio of Alfred Asante Apenteng",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#121212]">{children}</body>
    </html>
  );
}
