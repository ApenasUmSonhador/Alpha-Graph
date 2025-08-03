import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Alpha-Graph",
  description: "Visualizador de algoritmos em grafos",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-100 text-gray-900">
        <Navbar />
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
