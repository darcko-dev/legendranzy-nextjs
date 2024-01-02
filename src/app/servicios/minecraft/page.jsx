import { Hero } from "@/components/hero/hero";
import Prices from "@/components/prices/prices";
import { Divider } from "@nextui-org/react";
import { LogoMinecraft } from "./minecrafticons.jsx";

export default function Minecraft() {
  const prices = [
    {
      icon: <LogoMinecraft size={100} height={undefined} width={undefined} />,
      plan: "Steve",
      precio: "1.10$",
      enlace: "#",
      caracteristicas: [
        "1GB de Ram",
        "3GB SSD",
        "0.75 Vcores",
        "1 Copia de Seguridad",
        "1 Base de datos",
      ],
    },
    {
      icon: <LogoMinecraft size={100} height={undefined} width={undefined} />,
      plan: "Creeper",
      precio: "2.20$",
      enlace: "#",
      caracteristicas: [
        "2GB de Ram",
        "3GB SSD",
        "1.5 Vcores",
        "1 Copia de Seguridad",
        "1 Base de datos",
      ],
    },
    {
      icon: <LogoMinecraft size={100} height={undefined} width={undefined} />,
      plan: "Endermite",
      precio: "3.30$",
      enlace: "#",
      caracteristicas: [
        "3GB de Ram",
        "9GB SSD",
        "2.25 Vcores",
        "1 Copia de Seguridad",
        "2 Base de datos",
      ],
    },
    {
      icon: <LogoMinecraft size={100} height={undefined} width={undefined} />,
      plan: "Enderman",
      precio: "4.40$",
      enlace: "#",
      caracteristicas: [
        "4GB de Ram",
        "12GB SSD",
        "3 Vcores",
        "2 Copia de Seguridad",
        "2 Base de datos",
      ],
    },
    {
      icon: <LogoMinecraft size={100} height={undefined} width={undefined} />,
      plan: "Blaze",
      precio: "6.60$",
      enlace: "#",
      caracteristicas: [
        "6GB de Ram",
        "18GB SSD",
        "4.5 Vcores",
        "2 Copia de Seguridad",
        "3 Base de datos",
      ],
    },
    {
      icon: <LogoMinecraft size={100} height={undefined} width={undefined} />,
      plan: "Diamante",
      precio: "8.80$",
      enlace: "#",
      caracteristicas: [
        "8GB de Ram",
        "24GB SSD",
        "6 Vcores",
        "3 Copia de Seguridad",
        "3 Base de datos",
      ],
    },
    {
      icon: <LogoMinecraft size={100} height={undefined} width={undefined} />,
      plan: "Ghast",
      precio: "13.20$",
      enlace: "#",
      caracteristicas: [
        "12GB de Ram",
        "36GB SSD",
        "9 Vcores",
        "3 Copia de Seguridad",
        "4 Base de datos",
      ],
    },
    {
      icon: <LogoMinecraft size={100} height={undefined} width={undefined} />,
      plan: "Nether",
      precio: "17.60$",
      enlace: "#",
      caracteristicas: [
        "16GB de Ram",
        "48GB SSD",
        "12 Vcores",
        "4 Copia de Seguridad",
        "5 Base de datos",
      ],
    },
    {
      icon: <LogoMinecraft size={100} height={undefined} width={undefined} />,
      plan: "Custom",
      precio: "Custom",
      enlace: "#",
      caracteristicas: [
        "Custom de Ram",
        "Custom SSD",
        "Custom Vcores",
        "Custom Copia de Seguridad",
        "Custom Base de datos",
      ],
    },
  ];

  return (
    <main>
      <Hero />
      <Divider className="my-16" />
      <Prices prices={prices} />
      <Divider className="my-16" />
      <div className="w-full py-4 md:py-12 lg:py-24 xl:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 items-center">
            <div className="flex flex-col justify-center space-y-2 text-center">
              <p className="max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto">
                El almacenamiento, Bases de Datos y Copias de Seguridad se
                pueden aquirir de manera gratuita hasta una cierta cantidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
