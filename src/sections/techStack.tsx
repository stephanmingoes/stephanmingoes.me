/* eslint-disable @next/next/no-img-element */
import React from "react";
import Heading from "../components/ui/heading";
const techStack = [
  "JavaScript",
  "TypeScript",
  "Java",
  "GraphQL",
  "MSSQL",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "DynamoDB",
  "HTML",
  "CSS",
  "Sass",
  "NestJS",
  "ExpressJS",
  "React",
  "NextJS",
  "Vue",
  "Redux",
  "NoSQL",
  "Git",
  "Serverless Microservice",
  "OOP",
  "AWS",
  "Cloud Computing",
  "Jest/Vitest",
  "Unit Testing",
  "Lambda",
  "S3",
  "Tailwind CSS",
  "Node.js",
];

export default function TechStack() {
  return (
    <div className="mb-4">
      <Heading>Skills</Heading>
      <div className="flex flex-row  items-start flex-wrap">
        {techStack.map((t) => (
          <div
            key={t}
            className="h-fit rounded-lg border bg-card text-card-foreground shadow  mr-1 mb-1 py-1 px-2 border-gray-200"
          >
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}
