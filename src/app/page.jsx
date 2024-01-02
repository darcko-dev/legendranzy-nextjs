import { Hero } from "@/components/hero/hero";
import { Feature } from "@/components/features/feature";
import { Divider, Button, Link, Image } from "@nextui-org/react";
import { Minecraft } from "@/components/navigation/Icons.jsx";

export default function Inicio() {
  const precios = [
    {
      icon: (
        <Image
          width="96"
          height="96"
          src="https://img.icons8.com/nolan/96/web.png"
          alt="web"
        />
      ),
      producto: "Web Hosting",
      precio: "$1.25",
      enlace: "/servicios/web",
      caracteristicas: [
        "Fast Panel",
        "Copias de Seguridad",
        "Bases de Datos",
        "Certificados SSL",
        "phpMyAdmin",
        "1 Dominio Incluido",
      ],
    },
    {
      icon: (
        <Image
          width="100"
          height="100"
          src="https://img.icons8.com/clouds/100/server.png"
          alt="server"
        />
      ),
      producto: "VPS",
      precio: "$4",
      enlace: "/servicios/vps",
      caracteristicas: [
        "Intel Xeon E3-1245v5 - 3.5 GHz/3.9 GHz",
        "SolusVM/Virtualizor",
        "Acceso Administrador",
        "Proteccion DDoS",
        "Trafico Ilimitado",
      ],
    },
    {
      icon: <Minecraft size={100} />,
      producto: "Minecraft",
      precio: "$1.10",
      enlace: "/servicios/minecraft",
      caracteristicas: [
        " <Minecraft size={100} /> Panel Pterodactyl",
        "Intel Core i7-6700K",
        "Acceso Completo",
        "Copias de Seguridad",
        "Bases de datos",
        "Plugins",
        "Ram DDR4",
      ],
    },
  ];

  return (
    <main>
      <Hero />
      <Divider className="my-16" />
      <Feature />
      <Divider className="my-8" />
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                Nuestros Servicios
              </h1>
              <p className="max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto">
                Nos enfocamos en traer los mejores precios con un buen
                rendimiento.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8">
          {precios.map((elemento, index) => (
            <div
              key={index}
              className="flex flex-col p-6 bg-dark shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-gray-300"
            >
              <div>
                <div className="flex justify-center">{elemento.icon}</div>
                <h3 className="text-xl font-bold text-white text-center">
                  {elemento.producto}
                </h3>
                <div className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
                  <span className="text-4xl font-bold">{elemento.precio}</span>/
                  Mes
                </div>
                <ul className="mt-4 space-y-2">
                  {elemento.caracteristicas.map((caracteristica, i) => (
                    <li key={i} className="flex items-center">
                      <svg
                        className=" text-white text-xs bg-green-500 rounded-full mr-2 p-1"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {caracteristica}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <Button as={Link} href={elemento.enlace} className="w-full">
                  Ver Planes
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Divider className="my-8" />
    </main>
  );
}
