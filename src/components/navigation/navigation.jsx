"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuItem,
  NavbarMenu,
  NavbarMenuToggle,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";
import {
  ChevronDown,
  Lock,
  Activity,
  Flash,
  Server,
  TagUser,
  Scale,
  Minecraft,
} from "./Icons.jsx";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const icons = {
    chevron: (
      <ChevronDown
        fill="currentColor"
        size={16}
        height={undefined}
        width={undefined}
      />
    ),
    scale: (
      <Scale
        className="text-warning"
        fill="currentColor"
        size={30}
        height={undefined}
        width={undefined}
      />
    ),
    lock: (
      <Lock
        className="text-success"
        fill="currentColor"
        size={30}
        height={undefined}
        width={undefined}
      />
    ),
    activity: (
      <Activity
        className="text-secondary"
        fill="currentColor"
        size={30}
        height={undefined}
        width={undefined}
      />
    ),
    flash: (
      <Flash
        className="text-primary"
        fill="currentColor"
        size={30}
        height={undefined}
        width={undefined}
      />
    ),
    server: (
      <Server
        className="text-success"
        fill="currentColor"
        size={30}
        height={undefined}
        width={undefined}
      />
    ),
    user: (
      <TagUser
        className="text-danger"
        fill="currentColor"
        size={30}
        height={undefined}
        width={undefined}
      />
    ),
    minecraft: (
      <Minecraft
        className="text-danger"
        fill="currentColor"
        size={30}
        height={undefined}
        width={undefined}
      />
    ),
  };

  return (
    <div>
      <Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <AcmeLogo />
            <p className="font-bold text-inherit">Legends - Dranzy</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem isActive>
            <Link color="foreground" href="/">
              Inicio
            </Link>
          </NavbarItem>
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                  endContent={icons.chevron}
                  radius="sm"
                  variant="light"
                >
                  Servicios
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="ACME features"
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
                key="web-hosting"
                description="Almacena y publica tu pagina web."
                startContent={icons.scale}
                href="/servicios/web"
              >
                Web Hosting
              </DropdownItem>

              <DropdownItem
                key="vps"
                description="adquiere tu propio servidor virtual privado."
                startContent={icons.activity}
                href="/servicios/vps"
              >
                VPS
              </DropdownItem>
              <DropdownItem
                key="minecraft"
                description="Corre tu servidor de minecraft al mejor precio y rendimiento."
                startContent={icons.minecraft}
                href="/servicios/minecraft"
              >
                Minecraft Server
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavbarItem>
            <Link color="foreground" href="/quienes-somos">
              Quines somos
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/contacto">
              Contactanos
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              as={Link}
              color="primary"
              href="https://billing.legendranzy.xyz"
              variant="flat"
            >
              Facturacion
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          <NavbarMenuItem>
            <Link color="foreground" href="/">
              Inicio
            </Link>
          </NavbarMenuItem>
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                  endContent={icons.chevron}
                  radius="sm"
                  variant="light"
                >
                  Servicios
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="ACME features"
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
                key="web-hosting"
                description="Almacena y publica tu pagina web."
                startContent={icons.scale}
                href="/servicios/web"
              >
                Web Hosting
              </DropdownItem>
              <DropdownItem
                key="vps"
                description="adquiere tu propio servidor virtual privado."
                startContent={icons.activity}
                href="/servicios/vps"
              >
                VPS
              </DropdownItem>
              <DropdownItem
                key="minecraft"
                description="Corre tu servidor de minecraft al mejor precio y rendimiento."
                startContent={icons.minecraft}
                href="/servicios/minecraft"
              >
                Minecraft Server
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavbarMenuItem>
            <Link color="foreground" href="/quienes-somos">
              Quienes Somos
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link color="foreground" href="/contacto">
              Contactanos
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </div>
  );
}
