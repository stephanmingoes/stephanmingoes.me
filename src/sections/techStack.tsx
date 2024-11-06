import React from "react";
import { Card } from "@/components/ui/card";
import CollapsibleSection from "@/components/collapsible-section";
import Marquee from "@/components/ui/marquee";
const techStack = [
  "Serverless Microservice",
  "React",
  "Git",
  "HTML",
  "NextJS",
  "Jest/Vitest",
  "Figma",
  "React Native",
  "CSS",
  "MySQL",
  "GraphQL",
  "Redux",
  "ExpressJS",
  "JavaScript",
  "OOP",
  "NestJS",
  "DynamoDB",
  "C#/.NET",
  "Cloud Computing",
  "AWS",
  "Lambda",
  "MongoDB",
  "Node.js",
  "Tailwind CSS",
  "Vue",
  "S3",
  "Unit Testing",
  "PostgreSQL",
  "NoSQL",
  "TypeScript",
  "MSSQL",
  "Sass",
];

const firstRow = techStack.slice(0, 11);
const secondRow = techStack.slice(11, 22);
const thirdRow = techStack.slice(22, 31);

export default function TechStack() {
  return (
    <CollapsibleSection id="tech-stack" header="Technologies" className="">
      <Marquee pauseOnHover className="mb-[-10px]">
        {firstRow.map((t) => (
          <Card
            key={t}
            className="py-1 mr-[-10px]  dark:border-white px-2 bg-transparent rounded-none shadow-sm hover:text-white hover:bg-[#101010] dark:hover:bg-white dark:hover:text-[#101010] hover:cursor-pointer transition-all duration-300 ease-in-out"
          >
            {t}
          </Card>
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="mb-[-10px]">
        {secondRow.map((t) => (
          <Card
            key={t}
            className="py-1 mr-[-10px] dark:border-white px-2 bg-transparent rounded-none shadow-sm hover:text-white hover:bg-[#101010] dark:hover:bg-white dark:hover:text-[#101010] hover:cursor-pointer transition-all duration-300 ease-in-out"
          >
            {t}
          </Card>
        ))}
      </Marquee>
      <Marquee pauseOnHover>
        {thirdRow.map((t) => (
          <Card
            key={t}
            className="py-1 mr-[-10px]  dark:border-white px-2 bg-transparent rounded-none shadow-sm hover:text-white hover:bg-[#101010] dark:hover:bg-white dark:hover:text-[#101010] hover:cursor-pointer transition-all duration-300 ease-in-out"
          >
            {t}
          </Card>
        ))}
      </Marquee>
    </CollapsibleSection>
  );
}
