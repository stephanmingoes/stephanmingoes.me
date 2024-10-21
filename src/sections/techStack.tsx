/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Card } from "@/components/ui/card";
import CollapsibleSection from "@/components/collapsible-section";
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

export default function TechStack() {
  return (
    <CollapsibleSection id="tech-stack" header="Technologies" className="">
      <div className="flex flex-row gap-1 items-start flex-wrap">
        {techStack.map((t) => (
          <Card
            key={t}
            className="py-1 dark:border-white px-2 bg-transparent rounded-none shadow-sm hover:text-white hover:bg-[#101010] dark:hover:bg-white dark:hover:text-[#101010] hover:cursor-pointer transition-all duration-300 ease-in-out"
          >
            {t}
          </Card>
        ))}
      </div>
    </CollapsibleSection>
  );
}
