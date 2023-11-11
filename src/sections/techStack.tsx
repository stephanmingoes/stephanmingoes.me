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
      <Heading>Skills</Heading>
      <div className="flex flex-row gap-1 items-start flex-wrap">
        {techStack.map((t) => (
          <Card key={t} className="py-1 px-2 rounded-sm shadow-sm">
            {t}
          </Card>
        ))}
      </div>
    </section>
  );
}
