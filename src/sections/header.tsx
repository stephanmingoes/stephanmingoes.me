import Image from "next/legacy/image";
import React from "react";
import logo3 from "../../public/images/me.jpeg";
export default function Header() {
  return (
    <div className="flex lg:flex-row justify-between lg:items-center mb-8 flex-col-reverse">
      <div>
        <h1 className="md:text-2xl text-2xl font-bold tracking-tight mb-4 text-justify">
          I&apos;m Stephan
        </h1>
        <h3 className="text-muted-foreground text-lg mb-4">
          Software Engineer
        </h3>
        <p className="text-muted-foreground text-base">
          As a Software Engineer with a strong background in Computer Science
          (BSc), I excel in developing user-friendly interfaces and architecting
          backend systems. I&apos;m passionate about applying my technical
          skills to solve complex challenges and deliver innovative solutions.
        </p>
      </div>

      <div className="basis-1/2 lg:flex flex-row justify-end visible lg:mb-0 mb-8">
        <Image
          alt="logo"
          src={logo3}
          width="150"
          height="150"
          layout="fixed"
          className="rounded-full "
        />
      </div>
    </div>
  );
}
