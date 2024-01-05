import { Hero } from "@/components/hero/hero";
export default function QuienesSomos() {
  const HeroSection = [
    {
      title: "Quienes Somos",
      content: "Información de quienes somos",
    },
  ];
  return (
    <main>
      <Hero HeroSection={HeroSection} />
    </main>
  );
}
