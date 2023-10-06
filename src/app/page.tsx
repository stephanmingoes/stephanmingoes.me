import Blog from "@/sections/blog";
import Header from "@/sections/header";
import Projects from "@/sections/projects";
import TechStack from "@/sections/techStack";

export default function Home() {
  return (
    <>
      <Header />
      <TechStack />
      <Blog />
      <Projects />
    </>
  );
}
