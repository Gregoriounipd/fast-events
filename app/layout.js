import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Eventi",
  description: "Organizziamo i tuoi momenti speciali",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className="antialiased">
        <Header />
        <div className="pt-16">{children}</div> 
      </body>
    </html>
  );
}
