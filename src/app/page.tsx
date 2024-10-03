import Experience from "@/sections/experience";
import Header from "@/sections/header";
import Projects from "@/sections/projects";
import TechStack from "@/sections/techStack";
import React from "react";
export default function Home() {
  return (
    <>
      <Header />
      <TechStack />
      <Experience />
      <Projects />
    </>
  );
}
