import CollapsibleSection from "@/components/collapsible-section";
import { Card, CardHeader } from "@/components/ui/card";
import React from "react";
import rmp from "../../public/images/rmp.jpg";
import ms from "../../public/images/microsoft_logo.jpg";
import ppt from "../../public/images/ppt.jpg";
import Image, { StaticImageData } from "next/image";

type Experience = {
  company: string;
  position: string;
  location: string;
  period: string;
  description: string;
  image: StaticImageData;
};
const experiences: Experience[] = [
  {
    company: "RMP and Associates",
    position: "Software Engineer",
    location: "Kingston, Jamaica",
    period: "Aug 2023 - Present",
    description:
      "Led the design and implementation of a dynamic user interface and seamless user experience for an appointment scheduling application, utilizing React Native and Expo for optimal performance and responsiveness. Developed a microservice endpoint and integrated it with an API gateway using C# and .Net, streamlining communication with the user-facing service layer.",
    image: rmp,
  },
  {
    company: "Microsoft",
    position: "Software Engineer Intern",
    location: "Redmond, WA",
    period: "May 2024 - Aug 2024",
    description:
      "Developed the user interface and experience for Azure maintenance exclusion features using React, TypeScript, and Redux, enabling millions of customers to tailor and exclude specific downtimes. Leveraged React Testing Library to ensure comprehensive unit test coverage and adhered to clean code principles, delivering a high-quality, scalable, and maintainable solution.",
    image: ms,
  },
  {
    company: "RMP and Associates",
    position: "Software Engineer Intern",
    location: "Kingston, Jamaica",
    period: "Dec 2023 - May 2024",
    description:
      "Migrated a client-facing government application from Flutter to React Native, enabling thousands of users to efficiently access, update, and manage financial records with enhanced performance and user experience. Transitioned two widely-used Jamaican news applications from Flutter to React Native, enhancing user experience by providing smoother navigation, faster load times, and improved performance.",
    image: rmp,
  },
  {
    company: "Particular Presence Technologies",
    position: "Software Developer",
    location: "Remote",
    period: "Aug 2022 - Jul 2023",
    description:
      "Built a file data processing system to analyze, format, and securely store cleansed data. Enhanced ongoing projects with new features, utilizing various front-end technologies and APIs. Collaborated with teams to translate requirements into technical specifications, ensuring high-quality code through peer reviews and adherence to best practices.",
    image: ppt,
  },
  {
    company: "Particular Presence Technologies",
    position: "Software Developer Intern",
    location: "Remote",
    period: "Jun 2022 - Aug 2022",
    description:
      "Designed a payment handling concept for initiating credit card transactions and implemented interfaces to access customer metrics. Leveraged serverless tech to process requests, generate metrics, and securely store data, enabling efficient data exchange through cloud-based APIs.",
    image: ppt,
  },
];

export default function Experience() {
  return (
    <CollapsibleSection id="experience" header="Experience">
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card
            key={index}
            className=" bg-transparent space-y-3 md:space-y-0 md:space-x-4 flex flex-col md:flex-row items-start border-none p-0 shadow-none"
          >
            <Image
              src={exp.image}
              alt={exp.company}
              width={50}
              className="rounded-[1px]"
            />
            <div>
              <CardHeader className="p-0  mb-1">
                <div className="flex flex-col leading-tight">
                  <h3 className="text-lg font-bold">{exp.company}</h3>
                  <p className="text-base">{exp.position}</p>

                  <p className="text-muted-foreground opacity-80 text-xs">
                    {exp.period}
                  </p>
                </div>
              </CardHeader>

              <p className="text-muted-foreground text-sm">{exp.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </CollapsibleSection>
  );
}
