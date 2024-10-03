/* eslint-disable @next/next/no-img-element */
import React from "react";
import Heading from "../components/ui/heading";
import { Card } from "@/components/ui/card";
const techStack = [
  "Serverless Microservice",
  "Cloud Computing",
  "Unit Testing",
  "Tailwind CSS",
  "Jest/Vitest",
  "JavaScript",
  "TypeScript",
  "C#/.NET",
  "PostgreSQL",
  "ExpressJS",
  "DynamoDB",
  "GraphQL",
  "MongoDB",
  "Node.js",
  "NestJS",
  "Lambda",
  "NextJS",
  "MSSQL",
  "MySQL",
  "Redux",
  "React",
  "NoSQL",
  "HTML",
  "Sass",
  "AWS",
  "Git",
  "OOP",
  "Vue",
  "CSS",
  "S3",
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="mb-8">
      <Heading>Technologies</Heading>
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
    </section>
  );
}
