import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { useState } from "react";

export function Navbars() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar
      fluid
      rounded
      className="bg-[#030c1c] px-4 lg:px-20 fixed w-full z-50"
    >
      <NavbarBrand href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
          MCK
        </span>
      </NavbarBrand>

      {/* Toggle + Hire Me Button */}
      <div className="flex items-center ml-auto md:order-2">
        <Button
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="ml-2 whitespace-nowrap hidden md:inline"
        >
          Hire Me
        </Button>

        <NavbarToggle onClick={() => setIsOpen(!isOpen)} />
      </div>

      {/* Animated Dropdown - MOBILE */}
      <div
        className={`absolute top-full left-0 w-full bg-[#030c1c] md:hidden overflow-hidden transition-all duration-500 ease-out transform ${
          isOpen ? "max-h-96 opacity-100 slide-down" : "max-h-0 opacity-0"
        }`}
      >
        <NavbarCollapse className="flex flex-col px-4 py-6 space-y-3">
          <NavbarLink href="/" onClick={() => setIsOpen(false)} active>
            Home
          </NavbarLink>

          <NavbarLink
            href="#about"
            className="text-[#e0e9f0]"
            onClick={() => setIsOpen(false)}
          >
            About
          </NavbarLink>

          <NavbarLink
            href="#skills"
            className="text-[#e0e9f0]"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </NavbarLink>

          <NavbarLink
            href="#projects"
            className="text-[#e0e9f0]"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </NavbarLink>

          <NavbarLink
            href="#experience"
            className="text-[#e0e9f0]"
            onClick={() => setIsOpen(false)}
          >
            Experience
          </NavbarLink>

          <NavbarLink
            href="#contact"
            className="text-[#e0e9f0]"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavbarLink>

          {/* Mobile Hire Me */}
          <Button
            onClick={() => {
              setIsOpen(false);
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-2 w-full"
          >
            Hire Me
          </Button>
        </NavbarCollapse>
      </div>

      {/* Desktop NavbarCollapse */}
      <div className="hidden md:flex md:ml-auto">
        <NavbarCollapse className="flex flex-row space-x-6">
          <NavbarLink href="/" active>
            Home
          </NavbarLink>
          <NavbarLink href="#about" className="text-[#e0e9f0]">
            About
          </NavbarLink>
          <NavbarLink href="#skills" className="text-[#e0e9f0]">
            Skills
          </NavbarLink>
          <NavbarLink href="#projects" className="text-[#e0e9f0]">
            Projects
          </NavbarLink>
          <NavbarLink href="#experience" className="text-[#e0e9f0]">
            Experience
          </NavbarLink>
          <NavbarLink href="#contact" className="text-[#e0e9f0]">
            Contact
          </NavbarLink>
        </NavbarCollapse>
      </div>
    </Navbar>
  );
}
