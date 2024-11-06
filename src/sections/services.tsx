import CollapsibleSection from "@/components/collapsible-section";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import iphone from "../../public/images/iphone.jpg";
import web from "../../public/images/web.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
const services = [
  {
    name: "Mobile Application Development",
    poster: iphone,
    description:
      "I specialize in creating high-performance, user-friendly mobile applications tailored to your business needs. With a focus on engaging user experiences and efficient functionality, my mobile apps are designed to provide a seamless experience for both iOS and Android users.",
    high_level_deliverables: [
      {
        name: "Cross-Platform Development",
        description:
          "Utilizing technologies like React Native and Expo, I build apps that work across both Android and iOS, reducing development time and costs.",
      },
      {
        name: "Customizable UI/UX",
        description:
          "I design interfaces that are intuitive and engaging, crafted specifically for your brand and users.",
      },
      {
        name: "Scalable & Secure Backend",
        description:
          "My mobile apps are powered by robust backend solutions, ensuring your app can grow with your business while keeping data secure.",
      },
      {
        name: "Fast Performance",
        description:
          "Optimized for speed and responsiveness to ensure a smooth user experience, even under high loads.",
      },
      {
        name: "Push Notifications & In-App Messaging",
        description:
          "Keep users engaged and informed with real-time notifications and updates.",
      },
    ],
    ideal_for: [
      "Businesses seeking mobile solutions to connect with customers directly.",
      "Entrepreneurs launching a startup app idea.",
      "Established brands looking to enhance customer engagement through mobile presence.",
    ],
    technologies_used: [
      "React Native",
      "Expo",
      "TypeScript",
      "Zustand for state management",
      "Tailwind CSS for styling",
      "Integration with backend technologies like Prisma, PostgreSQL, and Azure",
    ],
  },
  {
    name: "Web Application Development",
    poster: web,
    description:
      "My web application development service provides tailor-made solutions for businesses looking to establish a strong online presence. I build responsive, high-quality web applications that are reliable, easy to manage, and scalable as your business grows.",
    high_level_deliverables: [
      {
        name: "Custom Development",
        description:
          "I create web applications that meet your unique business needs, from e-commerce platforms to property management systems.",
      },
      {
        name: "Responsive Design",
        description:
          "Applications are optimized to look and function beautifully across all devices—desktops, tablets, and smartphones.",
      },
      {
        name: "Scalable Architecture",
        description:
          "With a strong foundation, my web applications are built to handle increasing traffic and business demands.",
      },
      {
        name: "User Management",
        description:
          "I implement robust user authentication and management, allowing for roles, permissions, and secure access to features.",
      },
      {
        name: "E-commerce Capabilities",
        description:
          "For businesses looking to sell online, I offer custom solutions that integrate secure payment gateways, inventory management, and order tracking.",
      },
    ],
    ideal_for: [
      "Restaurants, retail businesses, or service providers aiming to build an online store.",
      "Organizations looking to streamline internal processes or provide a service to customers through a web portal.",
      "Entrepreneurs needing a versatile, scalable solution for their online business ideas.",
    ],
    technologies_used: [
      "Frontend: React, Tailwind CSS",
      "Backend: Prisma, PostgreSQL, Entity Framework Core, Azure",
      "Security: Secure data handling practices to ensure data privacy and protection",
    ],
  },
  {
    name: "API Development",
    poster: web,
    description:
      "I offer API development services to help businesses build custom APIs that enable seamless data exchange between applications. Whether you need a RESTful API for your web application or a GraphQL API for your mobile app, I can create a solution that meets your specific requirements.",
    high_level_deliverables: [
      {
        name: "Custom API Development",
        description:
          "I create APIs that are tailored to your business needs, ensuring they provide the functionality required for your applications.",
      },
      {
        name: "RESTful & GraphQL APIs",
        description:
          "I have experience building both RESTful and GraphQL APIs, allowing me to choose the best approach based on your project requirements.",
      },
      {
        name: "API Documentation",
        description:
          "I provide clear and comprehensive documentation for your API, making it easy for developers to understand and integrate with your services.",
      },
      {
        name: "Third-Party Integrations",
        description:
          "I can integrate your API with third-party services, such as payment gateways, social media platforms, and more, to enhance your application's functionality.",
      },
      {
        name: "Scalable & Secure APIs",
        description:
          "My APIs are built with scalability and security in mind, ensuring they can handle increased traffic and protect sensitive data.",
      },
    ],
    ideal_for: [
      "Businesses looking to connect multiple applications or services through a centralized API.",
      "Startups needing a custom API to power their mobile or web applications.",
      "Organizations seeking to streamline internal processes through automated data exchange.",
    ],
    technologies_used: [
      "RESTful APIs: Express.js, ASP.NET Core",
      "GraphQL APIs: Apollo Server, Prisma",
      "API Documentation: Swagger, GraphQL Playground",
      "Security: JWT authentication, HTTPS, secure data handling practices",
    ],
  },
];

export default function Services() {
  return (
    <CollapsibleSection id="services" header="Services">
      <div className="grid grid-cols-2 gap-4">
        {services.map((service) => {
          const descriptionSlice = service.description.slice(0, 100);
          const shouldAppendEllipsis = service.description.length > 100;

          return (
            <Card
              key={service.name}
              className="flex flex-row  rounded-none bg-transparent dark:border-white shadow-sm"
            >
              <div className="flex-1">
                <Image
                  src={service.poster}
                  alt={service.name}
                  className="h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <CardHeader>
                  <CardTitle>{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {descriptionSlice}
                    {shouldAppendEllipsis ? "..." : null}{" "}
                  </p>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Link href="">
                    <Button className="rounded-none dark:border-white shadow-sm">
                      Read More
                    </Button>
                  </Link>
                </CardFooter>
              </div>
            </Card>
          );
        })}
      </div>
    </CollapsibleSection>
  );
}
