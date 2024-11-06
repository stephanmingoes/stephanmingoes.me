import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../components/ui/button";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { BiLogoTypescript } from "react-icons/bi";
import {
  SiTailwindcss,
  SiCockroachlabs,
  SiFirebase,
  SiReactquery,
  SiChakraui,
  SiVercel,
  SiNextdotjs,
  SiPrisma,
  SiTrpc,
  SiExpress,
} from "react-icons/si";
import Link from "next/link";
import Image, { StaticImageData } from "next/legacy/image";
import qwizlab from "../../public/images/qwizlab.png";
import budgettracker from "../../public/images/budget-tracker.png";
type IconType = typeof BiLogoTypescript | React.ElementType;
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import CollapsibleSection from "@/components/collapsible-section";
import { Globe } from "lucide-react";

type SkillType = {
  icon: IconType;
  className?: string;
  url: string;
  name: string;
  description: string;
};
type Project = {
  name: string;
  description: string;
  skills: string[];
  githubUrl: string;
  websiteUrl: string;
  imagePath: string | StaticImageData;
};
const technologies: SkillType[] = [
  {
    icon: SiNextdotjs,
    url: "https://nextjs.org/",
    className: "mt-3",
    name: "NextJS",
    description: "React framework for building server-rendered applications.",
  },
  {
    icon: SiExpress,
    url: "https://expressjs.com/",
    className: "",
    name: "ExpressJS",
    description:
      "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
  },
  {
    icon: BiLogoTypescript,
    url: "https://www.typescriptlang.org/",
    name: "TypeScript",
    className: "text-blue-500",
    description: "A superset of JavaScript that adds static types.",
  },
  {
    icon: SiCockroachlabs,
    url: "https://www.cockroachlabs.com/",
    name: "CockroachDB",
    className: "text-blue-700",
    description: "Distributed SQL database for global cloud services.",
  },
  {
    icon: SiFirebase,
    url: "https://firebase.google.com/",
    name: "Firebase",
    className: "text-yellow-300",
    description:
      "Platform for building and scaling web and mobile applications.",
  },
  {
    icon: SiChakraui,
    url: "https://chakra-ui.com/",
    name: "ChakraUI",
    className: "text-green-300",
    description:
      "A simple, modular and accessible component library for React.",
  },
  {
    icon: SiTailwindcss,
    url: "https://tailwindcss.com/",
    name: "TailwindCSS",
    className: "text-sky-300",
    description:
      "A utility-first CSS framework for building responsive designs.",
  },
  {
    icon: ShadCnIcon,
    url: "https://ui.shadcn.com/",
    name: "ShadCn",
    className: "",
    description:
      "Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",
  },
  {
    icon: ClerkDevIcon,
    url: "https://www.clerk.dev",
    name: "ClerkDev",
    className: "",
    description:
      "Clerk helps developers build user management. We provide streamlined user experiences for your users to sign up, sign in, and manage their profile.",
  },
  {
    icon: SiReactquery,
    url: "https://tanstack.com/query/v3/",
    name: "ReactQuery",
    className: "text-orange-600",
    description:
      "Powerful asynchronous state management for TS/JS, React, Solid, Vue and Svelte",
  },
  {
    icon: SiVercel,
    url: "https://vercel.com/",
    name: "Vercel",
    className: "",
    description:
      "Vercel's frontend cloud gives developers frameworks, workflows, and infrastructure to build a faster, more personalized web.",
  },
  {
    icon: SiPrisma,
    url: "https://prisma.io/",
    name: "Prisma",
    className: "text-slate-950",
    description:
      "Open source Node.js and TypeScript ORM with an intuitive data model, automated migrations, type-safety, and auto-completion.",
  },
  {
    icon: SiTrpc,
    url: "https://trpc.io",
    name: "TRPC",
    className: "text-white p-1 bg-sky-500 rounded-lg h-fit",
    description:
      "tRPC allows you to easily build & consume fully typesafe APIs without schemas or code generation.",
  },
  {
    icon: ResendIcon,
    url: "https://resend.com/",
    name: "Resend",
    className: "bg-black py-2 px-2 rounded-sm h-fit",
    description: "Resend serves as an API for Sending Emails.",
  },
];

const projects: Project[] = [
  {
    name: "QwizLab",
    description: `Powered by artificial intelligence, transforms your notes into personalized quizzes. Allows you to create, share, and discover quizzes on any topic.
    `,
    skills: [
      "NextJS",
      "TypeScript",
      "CockroachDB",
      "Prisma",
      "ChakraUI",
      "Vercel",
      "ExpressJS",
    ],
    githubUrl: "https://github.com/tashynw/qwizlab-app",
    websiteUrl: "https://qwizlab.com/",
    imagePath: qwizlab,
  },

  {
    name: "Budget Tracker",
    description: `This application enables users to manage their
          finances. It allows you to monitor income, expenses, and budgets
          seamlessly within a single interface.`,
    skills: [
      "NextJS",
      "TypeScript",
      "CockroachDB",
      "TailwindCSS",
      "Prisma",
      "ShadCn",
      "ClerkDev",
      "ReactQuery",
      "Vercel",
    ],
    githubUrl: "https://github.com/stephanmingoes/budget_tracker",
    websiteUrl: "https://budget-trackerr.vercel.app/",
    imagePath: budgettracker,
  },
];

export default function Projects() {
  return (
    <CollapsibleSection id="personal-projects" header="Personal Projects">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 ">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </CollapsibleSection>
  );
}

function ShadCnIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className="h-6 w-6"
    >
      <rect width="256" height="256" fill="none"></rect>
      <line
        x1="208"
        y1="128"
        x2="128"
        y2="208"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></line>
      <line
        x1="192"
        y1="40"
        x2="40"
        y2="192"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></line>
    </svg>
  );
}
function ClerkDevIcon() {
  return (
    <svg
      width="77"
      height="24"
      viewBox="0 0 77 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M35.1481 16.7381C34.7521 17.1486 34.2765 17.4741 33.7505 17.6947C33.2245 17.9154 32.659 18.0265 32.0886 18.0213C31.6069 18.0359 31.1273 17.9517 30.6794 17.7739C30.2315 17.5961 29.8247 17.3285 29.4841 16.9875C28.8654 16.3421 28.5093 15.4206 28.5093 14.3221C28.5093 12.1231 29.941 10.619 32.0886 10.619C32.6646 10.6109 33.2353 10.7301 33.7599 10.968C34.2845 11.206 34.7501 11.5568 35.1234 11.9955L36.9816 10.3525C35.7707 8.8827 33.8059 8.12305 31.9401 8.12305C28.2885 8.12305 25.6992 10.64 25.6992 14.343C25.6992 16.1745 26.3427 17.7167 27.4279 18.8057C28.5131 19.8947 30.0591 20.5344 31.843 20.5344C34.16 20.5344 36.0087 19.5939 37.0463 18.4116L35.1481 16.7381Z"
        fill="#1F0256"
      />
      <path
        d="M38.7266 3.42773H41.4929V20.3398H38.7266V3.42773Z"
        fill="#1F0256"
      />
      <path
        d="M54.8179 15.2828C54.8635 14.9145 54.8889 14.5439 54.894 14.1728C54.894 10.6659 52.5979 8.12611 49.0472 8.12611C48.2641 8.11071 47.4861 8.25581 46.7612 8.55246C46.0363 8.84911 45.3797 9.29104 44.832 9.85102C43.7944 10.94 43.1719 12.4822 43.1719 14.3213C43.1719 18.07 45.8144 20.5374 49.3176 20.5374C51.6688 20.5374 53.3614 19.5855 54.3762 18.2947L52.5637 16.6897L52.4742 16.6136C52.1146 17.0634 51.6561 17.4243 51.1344 17.6683C50.6127 17.9123 50.0419 18.0328 49.4661 18.0205C47.6879 18.0205 46.4046 16.9829 46.0391 15.2828H54.8179ZM46.0848 13.0628C46.2083 12.5269 46.4613 12.0295 46.8216 11.614C47.1214 11.2874 47.4883 11.0293 47.897 10.8574C48.3058 10.6856 48.7468 10.604 49.19 10.6183C50.7702 10.6183 51.7602 11.6064 52.101 13.0628H46.0848Z"
        fill="#1F0256"
      />
      <path
        d="M63.445 8.08984V11.1741C63.1251 11.1494 62.8034 11.1246 62.6073 11.1246C60.513 11.1246 59.325 12.6287 59.325 14.603V20.3394H56.5625V8.2612H59.325V10.0908H59.3498C60.2884 8.80761 61.6344 8.09366 63.1004 8.09366L63.445 8.08984Z"
        fill="#1F0256"
      />
      <path
        d="M69.8866 15.2812L67.8894 17.5031V20.3398H65.125V3.42773H67.8894V13.8019L72.8224 8.29975H76.1046L71.7638 13.1603L76.1808 20.3398H73.0718L69.938 15.2812H69.8866Z"
        fill="#1F0256"
      />
      <path
        d="M19.116 3.1608L16.2354 6.04135C16.1449 6.13177 16.0266 6.18918 15.8996 6.20437C15.7725 6.21956 15.6441 6.19165 15.5348 6.12513C14.4017 5.44155 13.0949 5.10063 11.7722 5.14354C10.4495 5.18645 9.16759 5.61134 8.08114 6.36692C7.41295 6.83202 6.83276 7.41221 6.36765 8.0804C5.61297 9.16751 5.18848 10.4495 5.14524 11.7722C5.10201 13.0949 5.44187 14.4019 6.12395 15.536C6.19 15.6451 6.21764 15.7731 6.20246 15.8998C6.18728 16.0264 6.13015 16.1443 6.04018 16.2347L3.15962 19.1152C3.10162 19.1736 3.03168 19.2188 2.95459 19.2476C2.87751 19.2765 2.79511 19.2883 2.71302 19.2824C2.63093 19.2764 2.5511 19.2528 2.479 19.2131C2.40689 19.1734 2.34422 19.1186 2.29527 19.0524C0.736704 16.9101 -0.0687588 14.3121 0.0046021 11.6639C0.077963 9.01568 1.02602 6.46625 2.70079 4.41354C3.21208 3.78549 3.78622 3.21134 4.41428 2.70006C6.46683 1.02574 9.01589 0.0779624 11.6637 0.00460332C14.3115 -0.0687557 16.9091 0.736432 19.0512 2.29453C19.1179 2.34332 19.1731 2.40598 19.2131 2.47818C19.2532 2.55038 19.2771 2.6304 19.2833 2.71274C19.2895 2.79508 19.2777 2.87778 19.2488 2.95513C19.2199 3.03248 19.1746 3.10265 19.116 3.1608Z"
        fill="url(#paint0_linear_26568_214324)"
      />
      <path
        d="M19.1135 20.8289L16.2329 17.9483C16.1424 17.8579 16.0241 17.8005 15.8971 17.7853C15.7701 17.7701 15.6416 17.798 15.5323 17.8645C14.4639 18.509 13.2398 18.8497 11.9921 18.8497C10.7443 18.8497 9.52022 18.509 8.45181 17.8645C8.34252 17.798 8.21406 17.7701 8.08701 17.7853C7.95997 17.8005 7.84171 17.8579 7.75119 17.9483L4.87063 20.8289C4.81022 20.8869 4.76333 20.9576 4.73329 21.0358C4.70324 21.114 4.69078 21.1979 4.69678 21.2815C4.70277 21.3651 4.72708 21.4463 4.76799 21.5194C4.80889 21.5926 4.86538 21.6558 4.93346 21.7046C6.98391 23.1965 9.45442 24.0001 11.9902 24.0001C14.5259 24.0001 16.9964 23.1965 19.0469 21.7046C19.1152 21.6561 19.172 21.5931 19.2133 21.5201C19.2545 21.4471 19.2792 21.366 19.2856 21.2824C19.2919 21.1988 19.2798 21.1148 19.2501 21.0365C19.2203 20.9581 19.1737 20.8872 19.1135 20.8289V20.8289Z"
        fill="#1F0256"
      />
      <path
        d="M11.9973 15.4223C13.8899 15.4223 15.4243 13.888 15.4243 11.9953C15.4243 10.1027 13.8899 8.56836 11.9973 8.56836C10.1046 8.56836 8.57031 10.1027 8.57031 11.9953C8.57031 13.888 10.1046 15.4223 11.9973 15.4223Z"
        fill="#1F0256"
      />
      <defs>
        <linearGradient
          id="paint0_linear_26568_214324"
          x1="16.4087"
          y1="-1.75881"
          x2="-7.88473"
          y2="22.5365"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#17CCFC" />
          <stop offset="0.5" stopColor="#5D31FF" />
          <stop offset="1" stopColor="#F35AFF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function ResendIcon() {
  return (
    <svg
      width="60"
      viewBox="0 0 65 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.820068 15V1.00001H7.02007C7.88674 1.00001 8.6734 1.20001 9.38007 1.60001C10.0867 1.98668 10.6401 2.51334 11.0401 3.18001C11.4534 3.84668 11.6601 4.60668 11.6601 5.46001C11.6601 6.30001 11.4534 7.06668 11.0401 7.76001C10.6401 8.44001 10.0867 8.98001 9.38007 9.38001C8.6734 9.78001 7.88674 9.98001 7.02007 9.98001H3.72007V15H0.820068ZM8.76007 15L5.20007 8.68001L8.28007 8.18001L12.2401 15.02L8.76007 15ZM3.72007 7.54001H6.88007C7.24007 7.54001 7.5534 7.46001 7.82007 7.30001C8.10007 7.12668 8.3134 6.89334 8.46007 6.60001C8.60673 6.29335 8.68007 5.95335 8.68007 5.58001C8.68007 5.18001 8.5934 4.83335 8.42007 4.54001C8.24674 4.24668 7.9934 4.02001 7.66007 3.86001C7.32674 3.68668 6.94007 3.60001 6.50007 3.60001H3.72007V7.54001Z"
        fill="white"
      ></path>
      <path
        d="M18.0534 15.2C16.9067 15.2 15.9 14.9667 15.0333 14.5C14.18 14.0333 13.5134 13.3933 13.0333 12.58C12.5667 11.7667 12.3333 10.8333 12.3333 9.78001C12.3333 8.95335 12.4667 8.20001 12.7333 7.52001C13 6.84001 13.3733 6.25335 13.8533 5.76001C14.3333 5.25335 14.9 4.86668 15.5534 4.60001C16.22 4.32001 16.94 4.18001 17.7134 4.18001C18.4334 4.18001 19.1 4.31335 19.7134 4.58001C20.3267 4.84668 20.8534 5.22001 21.2934 5.70001C21.7467 6.16668 22.0934 6.72668 22.3334 7.38001C22.5734 8.02001 22.68 8.71335 22.6534 9.46001L22.6334 10.34H14.1334L13.6733 8.60001H20.2934L19.9734 8.96001V8.52001C19.9467 8.16001 19.8267 7.84001 19.6133 7.56001C19.4134 7.26668 19.1534 7.04001 18.8334 6.88001C18.5134 6.70668 18.1533 6.62001 17.7533 6.62001C17.1667 6.62001 16.6667 6.73335 16.2533 6.96001C15.8533 7.18668 15.5467 7.52001 15.3333 7.96001C15.12 8.40001 15.0133 8.93335 15.0133 9.56001C15.0133 10.2 15.1467 10.7533 15.4134 11.22C15.6934 11.6867 16.08 12.0533 16.5734 12.32C17.08 12.5733 17.6733 12.7 18.3533 12.7C18.82 12.7 19.2467 12.6267 19.6334 12.48C20.02 12.3333 20.4333 12.08 20.8734 11.72L22.2334 13.62C21.8467 13.9667 21.42 14.26 20.9534 14.5C20.4867 14.7267 20.0067 14.9 19.5133 15.02C19.02 15.14 18.5334 15.2 18.0534 15.2Z"
        fill="white"
      ></path>
      <path
        d="M27.3121 15.2C26.3254 15.2 25.4454 15.04 24.6721 14.72C23.9121 14.3867 23.2988 13.9333 22.8321 13.36L24.6121 11.84C25.0121 12.28 25.4654 12.6 25.9721 12.8C26.4788 12.9867 26.9854 13.08 27.4921 13.08C27.6921 13.08 27.8721 13.06 28.0321 13.02C28.2054 12.9667 28.3521 12.9 28.4721 12.82C28.5921 12.7267 28.6788 12.62 28.7321 12.5C28.7988 12.3667 28.8321 12.2267 28.8321 12.08C28.8321 11.7867 28.7121 11.56 28.4721 11.4C28.3388 11.32 28.1321 11.2333 27.8521 11.14C27.5721 11.0333 27.2121 10.92 26.7721 10.8C26.0921 10.6267 25.5121 10.4267 25.0321 10.2C24.5654 9.96001 24.1921 9.69335 23.9121 9.40001C23.6721 9.12001 23.4854 8.82001 23.3521 8.50001C23.2321 8.16668 23.1721 7.80001 23.1721 7.40001C23.1721 6.92001 23.2788 6.48668 23.4921 6.10001C23.7054 5.70001 23.9988 5.36001 24.3721 5.08001C24.7588 4.80001 25.1988 4.58668 25.6921 4.44001C26.1854 4.28001 26.7054 4.20001 27.2521 4.20001C27.7988 4.20001 28.3321 4.26668 28.8521 4.40001C29.3721 4.53335 29.8521 4.72668 30.2921 4.98001C30.7454 5.22001 31.1388 5.50668 31.4721 5.84001L29.9521 7.52001C29.7121 7.29334 29.4388 7.08668 29.1321 6.90001C28.8388 6.71335 28.5321 6.56668 28.2121 6.46001C27.8921 6.35335 27.6054 6.30001 27.3521 6.30001C27.1254 6.30001 26.9188 6.32001 26.7321 6.36001C26.5588 6.40001 26.4121 6.46668 26.2921 6.56001C26.1721 6.64001 26.0788 6.74001 26.0121 6.86001C25.9588 6.98001 25.9321 7.11334 25.9321 7.26001C25.9321 7.40668 25.9654 7.54668 26.0321 7.68001C26.1121 7.81335 26.2188 7.92668 26.3521 8.02001C26.4988 8.10001 26.7121 8.19335 26.9921 8.30001C27.2854 8.40668 27.6788 8.52668 28.1721 8.66001C28.8121 8.83335 29.3521 9.02668 29.7921 9.24001C30.2454 9.45335 30.6054 9.70001 30.8721 9.98001C31.0988 10.22 31.2654 10.4933 31.3721 10.8C31.4788 11.1067 31.5321 11.4467 31.5321 11.82C31.5321 12.4733 31.3454 13.0533 30.9721 13.56C30.6121 14.0667 30.1121 14.4667 29.4721 14.76C28.8321 15.0533 28.1121 15.2 27.3121 15.2Z"
        fill="white"
      ></path>
      <path
        d="M37.5768 15.2C36.4301 15.2 35.4235 14.9667 34.5568 14.5C33.7035 14.0333 33.0368 13.3933 32.5568 12.58C32.0901 11.7667 31.8568 10.8333 31.8568 9.78001C31.8568 8.95335 31.9901 8.20001 32.2568 7.52001C32.5235 6.84001 32.8968 6.25335 33.3768 5.76001C33.8568 5.25335 34.4235 4.86668 35.0768 4.60001C35.7435 4.32001 36.4635 4.18001 37.2368 4.18001C37.9568 4.18001 38.6235 4.31335 39.2368 4.58001C39.8501 4.84668 40.3768 5.22001 40.8168 5.70001C41.2701 6.16668 41.6168 6.72668 41.8568 7.38001C42.0968 8.02001 42.2035 8.71335 42.1768 9.46001L42.1568 10.34H33.6568L33.1968 8.60001H39.8168L39.4968 8.96001V8.52001C39.4701 8.16001 39.3501 7.84001 39.1368 7.56001C38.9368 7.26668 38.6768 7.04001 38.3568 6.88001C38.0368 6.70668 37.6768 6.62001 37.2768 6.62001C36.6901 6.62001 36.1901 6.73335 35.7768 6.96001C35.3768 7.18668 35.0701 7.52001 34.8568 7.96001C34.6435 8.40001 34.5368 8.93335 34.5368 9.56001C34.5368 10.2 34.6701 10.7533 34.9368 11.22C35.2168 11.6867 35.6035 12.0533 36.0968 12.32C36.6035 12.5733 37.1968 12.7 37.8768 12.7C38.3435 12.7 38.7701 12.6267 39.1568 12.48C39.5435 12.3333 39.9568 12.08 40.3968 11.72L41.7568 13.62C41.3701 13.9667 40.9435 14.26 40.4768 14.5C40.0101 14.7267 39.5301 14.9 39.0368 15.02C38.5435 15.14 38.0568 15.2 37.5768 15.2Z"
        fill="white"
      ></path>
      <path
        d="M43.2755 15V4.42001H45.9955L46.0755 6.58001L45.5155 6.82001C45.6622 6.34001 45.9222 5.90668 46.2955 5.52001C46.6822 5.12001 47.1422 4.80001 47.6755 4.56001C48.2089 4.32001 48.7689 4.20001 49.3555 4.20001C50.1555 4.20001 50.8222 4.36001 51.3555 4.68001C51.9022 5.00001 52.3089 5.48668 52.5755 6.14001C52.8555 6.78001 52.9955 7.57335 52.9955 8.52001V15H50.1555V8.74001C50.1555 8.26001 50.0889 7.86001 49.9555 7.54001C49.8222 7.22001 49.6155 6.98668 49.3355 6.84001C49.0689 6.69334 48.7355 6.62668 48.3355 6.64001C48.0155 6.64001 47.7155 6.69335 47.4355 6.80001C47.1689 6.89334 46.9355 7.03335 46.7355 7.22001C46.5489 7.40668 46.3955 7.62001 46.2755 7.86001C46.1689 8.10001 46.1155 8.36001 46.1155 8.64001V15H44.7155C44.4089 15 44.1355 15 43.8955 15C43.6555 15 43.4489 15 43.2755 15Z"
        fill="white"
      ></path>
      <path
        d="M58.8569 15.2C57.9236 15.2 57.0903 14.9667 56.3569 14.5C55.6369 14.02 55.0636 13.3733 54.6369 12.56C54.2236 11.7333 54.0169 10.78 54.0169 9.70001C54.0169 8.64668 54.2236 7.70668 54.6369 6.88001C55.0636 6.04001 55.6369 5.38668 56.3569 4.92001C57.0903 4.44001 57.9236 4.20001 58.8569 4.20001C59.3503 4.20001 59.8236 4.28001 60.2769 4.44001C60.7436 4.58668 61.1569 4.79335 61.5169 5.06001C61.8903 5.32668 62.1903 5.62668 62.4169 5.96001C62.6436 6.28001 62.7703 6.61335 62.7969 6.96001L62.0769 7.10001V0.200012H64.9369V15H62.2369L62.1169 12.56L62.6769 12.62C62.6503 12.9533 62.5303 13.2733 62.3169 13.58C62.1036 13.8867 61.8169 14.1667 61.4569 14.42C61.1103 14.66 60.7103 14.8533 60.2569 15C59.8169 15.1333 59.3503 15.2 58.8569 15.2ZM59.4969 12.84C60.0303 12.84 60.4969 12.7067 60.8969 12.44C61.2969 12.1733 61.6103 11.8067 61.8369 11.34C62.0636 10.8733 62.1769 10.3267 62.1769 9.70001C62.1769 9.08668 62.0636 8.54668 61.8369 8.08001C61.6103 7.61335 61.2969 7.24668 60.8969 6.98001C60.4969 6.71335 60.0303 6.58001 59.4969 6.58001C58.9636 6.58001 58.4969 6.71335 58.0969 6.98001C57.7103 7.24668 57.4036 7.61335 57.1769 8.08001C56.9636 8.54668 56.8569 9.08668 56.8569 9.70001C56.8569 10.3267 56.9636 10.8733 57.1769 11.34C57.4036 11.8067 57.7103 12.1733 58.0969 12.44C58.4969 12.7067 58.9636 12.84 59.4969 12.84Z"
        fill="white"
      ></path>
    </svg>
  );
}

function SkillCard({
  icon: Icon,
  description,
  name,
  url,
  className,
}: SkillType) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <span className={`${className}  mr-2`}>{<Icon />}</span>
      </HoverCardTrigger>
      <HoverCardContent className="dark:bg-[#101010] dark:border-white rounded-none w-80">
        <div className="flex justify-between space-x-4">
          <span className={`${className} text-5xl`}>{<Icon />}</span>

          <div className="space-y-1">
            <h4 className="text-sm font-semibold">{name}</h4>
            <p className="text-sm">{description}</p>
            <div className="flex items-center pt-2">
              <Link className="text-muted-foreground text-sm" href={url}>
                {url}
              </Link>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

function ProjectCard({
  name,
  description,
  skills,
  githubUrl,
  websiteUrl,
  imagePath,
}: Project) {
  return (
    <Card className="relative dark:border-white  bg-transparent rounded-none  shadow-sm hover:cursor-pointer">
      <Image
        src={imagePath}
        alt={name}
        className="w-full mb-5"
        layout="responsive"
      />
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent className="mb-16">
        <p className="text-muted-foreground mb-3">{description}</p>
        <div className="flex flex-row flex-wrap space-y-4 text-3xl items-center">
          {technologies
            .filter((skill) => skills.includes(skill.name))
            .map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between space-x-5 absolute bottom-0">
        <Link href={githubUrl} target="_blank">
          <Button
            variant="outline"
            className="rounded-none dark:border-white  shadow-sm"
          >
            <FiGithub />
          </Button>
        </Link>

        <Link href={websiteUrl} target="_blank">
          <Button className="rounded-none dark:border-white   shadow-sm">
            <Globe />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
