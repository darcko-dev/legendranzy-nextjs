import { Hero } from "@/components/hero/hero";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";

export default function Terminos() {
  const HeroSection = [
    {
      title: "Terminos Y Condiciones",
      content:
        "Nuestras características están diseñadas para mejorar tu rendimiento y optimizar tu flujo de trabajo y diversion.",
    },
  ];
  return (
    <main>
      <Hero HeroSection={HeroSection} />
      <div className="w-full py-12 md:py-24 lg:py-32 px-4 md:px-6">
        <div className="container mx-auto">
          <Card className="mb-8">
            <CardHeader>
              <h2 className="text-2xl font-semibold">Cumplimiento</h2>
            </CardHeader>
            <CardBody>
              <p>
                Describe las reglas y regulaciones que los usuarios deben
                cumplir al utilizar tu sitio web.
              </p>
            </CardBody>
          </Card>
          <Card className="mb-8">
            <CardHeader>
              <h2 className="text-2xl font-semibold">Propiedad Intelectual</h2>
            </CardHeader>
            <CardBody>
              <p>
                Explica los derechos de propiedad intelectual relacionados con
                el contenido de tu sitio web.
              </p>
            </CardBody>
          </Card>
          <Card className="mb-8">
            <CardHeader>
              <h2 className="text-2xl font-semibold">Privacidad</h2>
            </CardHeader>
            <CardBody>
              <p>
                Describe cómo se recopila, utiliza y protege la información
                personal de los usuarios.
              </p>
            </CardBody>
          </Card>
          <Card className="mb-8">
            <CardHeader>
              <h2 className="text-2xl font-semibold">Responsabilidad</h2>
            </CardHeader>
            <CardBody>
              <p>
                Establece las limitaciones de responsabilidad para cualquier
                daño o pérdida que los usuarios puedan sufrir al utilizar tu
                sitio web.
              </p>
            </CardBody>
          </Card>
          <Card className="mb-8">
            <CardHeader>
              <h2 className="text-2xl font-semibold">Enlaces a Terceros</h2>
            </CardHeader>
            <CardBody>
              <p>
                Aclara que tu sitio web puede contener enlaces a otros sitios y
                que no te haces responsable de su contenido o prácticas de
                privacidad.
              </p>
            </CardBody>
          </Card>
          <Card className="mb-8">
            <CardHeader>
              <h2 className="text-2xl font-semibold">Modificaciones</h2>
            </CardHeader>
            <CardBody>
              <p>
                Reserva el derecho de realizar cambios en los términos y
                condiciones en cualquier momento y notificar a los usuarios
                sobre dichos cambios.
              </p>
            </CardBody>
          </Card>
          <Card className="mb-8">
            <CardHeader>
              <h2 className="text-2xl font-semibold">Acuerdo de Usuario</h2>
            </CardHeader>
            <CardBody>
              <p>
                Incluye una declaración en la que los usuarios deben aceptar los
                términos y condiciones antes de utilizar tu sitio web.
              </p>
            </CardBody>
          </Card>
          <Card className="mb-8">
            <CardHeader>
              <h2 className="text-2xl font-semibold">
                Información de Contacto
              </h2>
            </CardHeader>
            <CardBody>
              <p>
                Proporciona información de contacto para que los usuarios se
                comuniquen contigo en caso de preguntas o inquietudes
                relacionadas con los términos y condiciones.
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
    </main>
  );
}
