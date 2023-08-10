"use client";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../public/images/dark-logo.png";

import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-between items-center my-5">
      <NavMenu />
      <MenuToggle />
      <Image src={logo} alt="Stephan Mingoes Logo" width={100} />
    </nav>
  );
}

function NavMenu() {
  return (
    <ul className="lg:flex flex-row justify-start items-center hidden  ">
      <Links />
    </ul>
  );
}

function NavMenuResponsive(props: { toggle: boolean }) {
  return (
    <>
      {props.toggle && (
        <div className="absolute lg:hidden h-60 list-none top-24 py-5 px-5 bg-slate-600 rounded flex flex-col justify-between items-center ">
          <Links />
        </div>
      )}
    </>
  );
}

function Links() {
  const pathname = usePathname();
  return (
    <>
      {" "}
      {[
        ["Home", "/"],
        [
          "Resume",
          "https://github.com/stephanmingoes/stephanmingoes/raw/main/Stephan%20Mingoes%20Resume.pdf",
        ],
        ["Github", "https://github.com/stephanmingoes"],
        // ["Blog", "/blogs"],
        ["Email", "mailto:stephanmingoes@gmail.com"],
      ].map((link: string[]) => (
        <li key={link[0]}>
          <Link
            className={` dark:text-slate-50/80  ${
              pathname == link[1] ? " bg-slate-600/30 " : ""
            } lg:text-slate-900 text-slate-50  
               text-base hover:bg-slate-600/30 py-2 px-4 rounded w-full  `}
            href={link[1]}
          >
            {link[0]}
          </Link>
        </li>
      ))}
    </>
  );
}

function MenuToggle() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex items-center p-2 text-sm h-10
         text-gray-500 rounded-lg lg:hidden
          hover:ring-gray-200 focus:outline-none 
          focus:ring-2 focus:ring-gray-200
           dark:text-gray-400 dark:hover:ring-gray-200
            dark:focus:ring-gray-200"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <NavMenuResponsive toggle={toggle} />
    </>
  );
}
