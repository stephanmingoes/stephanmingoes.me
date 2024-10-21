import CollapsibleSection from "@/components/collapsible-section";
import { Card, CardHeader } from "@/components/ui/card";
import React from "react";

type Experience = {
  company: string;
  position: string;
  location: string;
  period: string;
  description: string[];
};

const experiences: Experience[] = [
  {
    company: "RMP and Associates",
    position: "Software Engineer",
    location: "Kingston, Jamaica",
    period: "Aug 2023 - Present",
    description: [
      "Led the design and implementation of a dynamic user interface and seamless user experience for an appointment scheduling application, utilizing React Native and Expo for optimal performance and responsiveness.",
      "Developed a microservice endpoint and integrated it with an API gateway using C# and .Net, streamlining communication with the user-facing service layer.",
    ],
  },
  {
    company: "Microsoft",
    position: "Software Engineer Intern",
    location: "Redmond, WA",
    period: "May 2024 - Aug 2024",
    description: [
      "Developed the user interface and experience for Azure maintenance exclusion features using React, TypeScript, and Redux, enabling millions of customers to tailor and exclude specific downtimes.",
      "Leveraged React Testing Library to ensure comprehensive unit test coverage and adhered to clean code principles, delivering a high-quality, scalable, and maintainable solution.",
    ],
  },
  {
    company: "RMP and Associates",
    position: "Software Engineer Intern",
    location: "Kingston, Jamaica",
    period: "Dec 2023 - May 2024",
    description: [
      "Migrated a client-facing government application from Flutter to React Native, enabling thousands of users to efficiently access, update, and manage financial records with enhanced performance and user experience.",
      "Transitioned two widely-used Jamaican news applications from Flutter to React Native, enhancing user experience by providing smoother navigation, faster load times, and improved performance.",
    ],
  },
  {
    company: "Particular Presence Technologies",
    position: "Software Developer",
    location: "Remote",
    period: "Aug 2022 - Jul 2023",
    description: [
      "Developed a sophisticated file data processing system with the primary responsibility of analyzing, formatting, and securely storing cleansed data into a database.",
      "Innovated and integrated new functionalities into ongoing projects, utilizing diverse front-end technologies and APIs.",
      "Successfully troubleshooted and rectified technical glitches and defects within these features, culminating in a more seamless and user-friendly experience.",
      "Worked closely with interdisciplinary teams to gather project requisites and proficiently translate them into precise technical specifications.",
      "Maintained a commitment to code excellence by conducting routine peer reviews and skillfully incorporating feedback, thereby ensuring the delivery of high-quality code and adherence to industry best practices.",
      "Actively participated in collaborative team meetings, contributing valuable insights and strategies for advancing product enhancements.",
    ],
  },
  {
    company: "Particular Presence Technologies",
    position: "Software Developer Intern",
    location: "Remote",
    period: "Jun 2022 - Aug 2022",
    description: [
      "Developed and put into action a concept for handling payments, giving users the capability to effortlessly initiate financial transactions using credit cards.",
      "Architected and implemented user interfaces and functionalities for a profit-generating product, empowering administrators with the ability to seamlessly access customer metrics and easily trigger financial operations.",
      "Employed efficient serverless technology to process user requests, dynamically generate essential metrics, and securely store data within a database.",
      "Leveraged cloud-based API technology to establish seamless data exchange between different parts of the system.",
    ],
  },
];

export default function Experience() {
  return (
    <CollapsibleSection id="experience" header="Experience">
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card
            key={index}
            className=" bg-transparent border-none p-0 shadow-none"
          >
            <CardHeader className="p-0 space-y-1 mb-6">
              <h3 className="text-lg font-bold">{exp.position}</h3>
              <p className="text-base">
                {exp.company} • {exp.period}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                {exp.location}
              </p>
            </CardHeader>

            <ul className="list-none space-y-2">
              {exp.description.map((desc, idx) => (
                <li key={idx} className="text-muted-foreground">
                  {desc}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </CollapsibleSection>
  );
}
