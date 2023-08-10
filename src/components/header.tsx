import Image from "next/image";
import React from "react";
import logo3 from "../../public/images/me.png";
export default function Header() {
  return (
    <div className="flex lg:flex-row justify-between lg:items-center mb-8 flex-col-reverse">
      <div>
        <h1 className="md:text-2xl text-2xl font-bold tracking-tight mb-4 text-slate-900">
          I&apos;m Stephan
        </h1>
        <h3 className="text-slate-900 text-base mb-4">Software Developer 👨‍💻</h3>
        <p className="text-slate-900/60 text-base">
          Building fast
          <span className=" text-slate-50">⚡</span>, scalable
          <span className=" text-slate-50">📈</span>, robust
          <span className=" text-slate-50">💪</span>, and maintainable
          <span className=" text-slate-50">⛑️</span> software solutions.
        </p>
      </div>

      <div className="basis-1/2 lg:flex flex-row justify-end visible lg:mb-0 mb-8">
        <Image alt="logo" src={logo3} width="150" className="rounded-full " />
      </div>
    </div>
  );
}
