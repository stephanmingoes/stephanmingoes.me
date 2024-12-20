"use client";
import Link from "next/link";
import React from "react";

import { usePathname } from "next/navigation";
import ContactForm from "./contact-form";
import ThemeToggle from "./themeToggle";

export default function Navbar() {
  return (
    <nav className="my-8 flex justify-between items-center">
      <NavMenu />
      {/* <ThemeToggle /> */}
    </nav>
  );
}

function NavMenu() {
  return (
    <ul className="flex flex-row space-x-3 ">
      <Links />
    </ul>
  );
}

function Links() {
  const pathname = usePathname();
  return (
    <>
      {" "}
      {[["Home", "/"]].map((link: string[]) => (
        <li key={link[0]}>
          <Link
            className={` ${
              pathname == link[1] ? " underline decoration-2" : ""
            } lgtext-slate-900  text-sm
               `}
            href={link[1]}
          >
            {link[0]}
          </Link>
        </li>
      ))}
    </>
  );
}
