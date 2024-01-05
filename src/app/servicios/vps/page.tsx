import { Hero } from "@/components/hero/hero";
import Prices from "@/components/prices/prices";
import { Divider } from "@nextui-org/react";

export default function Vps() {
  const HeroSection = [
    {
      title: "Servicis de VPS",
      content: "Toda la Información de nuestras VPS ",
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
      plan: "VPS 2GB",
      precio: "1.10$",
      caracteristicas: ["2GB de Ram"],
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
      plan: "VPS 4GB",
      precio: "2.20$",
      caracteristicas: ["4GB de Ram"],
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
      plan: "VPS 8GB",
      precio: "3.30$",
      caracteristicas: ["8GB de Ram"],
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
