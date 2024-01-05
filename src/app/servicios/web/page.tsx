import { Hero } from "@/components/hero/hero";
import Prices from "@/components/prices/prices";
import { Divider } from "@nextui-org/react";
export default function Web() {
  const HeroSection = [
    {
      title: "Servicios Web",
      content: "Toda la Información de nuestros servicios web en un solo lugar",
    },
  ];
  const prices = [
    {
      icon: (
        <img
          width="100"
          height="100"
          src="https://img.icons8.com/clouds/100/server.png"
          alt="server"
        />
      ),
      plan: "Basico",
      precio: "1.10$",
      caracteristicas: [
        "1GB de Ram",
        "0.75 Vcores",
        "1 Copia de Seguridad",
        "1 Base de datos",
      ],
    },
    {
      icon: (
        <img
          width="100"
          height="100"
          src="https://img.icons8.com/clouds/100/server.png"
          alt="server"
        />
      ),
      plan: "Estandar",
      precio: "2.20$",
      caracteristicas: [
        "2GB de Ram",
        "3GB SSD",
        "1.5 Vcores",
        "1 Copia de Seguridad",
        "1 Base de datos",
      ],
    },
    {
      icon: (
        <img
          width="100"
          height="100"
          src="https://img.icons8.com/clouds/100/server.png"
          alt="server"
        />
      ),
      plan: "Premium",
      precio: "3.30$",
      caracteristicas: [
        "3GB de Ram",
        "9GB SSD",
        "2.25 Vcores",
        "1 Copia de Seguridad",
        "2 Base de datos",
      ],
    },
  ];
  return (
    <main>
      <Hero HeroSection={HeroSection} />
      <Divider className="my-16" />
      <Prices prices={prices} />
    </main>
  );
}
