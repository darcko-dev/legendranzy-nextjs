import { Button, Link } from "@nextui-org/react";
import React from "react";

const Prices = (props) => {
  const { prices } = props;
  return (
    <>
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8">
          {prices.map((elemento, index) => (
            <div
              key={index}
              className="flex flex-col p-6 bg-dark shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-gray-300"
            >
              <div>
                <div className="flex justify-center">{elemento.icon}</div>
                <h3 className="text-xl font-bold text-white text-center">
                  {elemento.plan}
                </h3>
                <div className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
                  <span className="text-4xl font-bold">{elemento.precio}</span>/
                  Mes
                </div>
                <ul className="mt-4 space-y-2">
                  {elemento.caracteristicas.map((caracteristica, i) => (
                    <li key={i} className="flex items-center">
                      <svg
                        className="text-white text-xs bg-green-500 rounded-full mr-2 p-1"
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
                  Comprar Plan
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Prices;
