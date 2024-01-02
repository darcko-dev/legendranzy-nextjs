import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";

import "./globals.css";
import Navigation from "@/components/navigation/navigation";
import { Footer } from "@/components/footer/footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LegenDranzy - Hosting",
  description: "Tu Destino para un Hosting Epico de Minecraft!!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body>
        <Providers>
          <Navigation />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
