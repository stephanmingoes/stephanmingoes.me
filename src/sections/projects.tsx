import React from "react";
import Heading from "../components/ui/heading";
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
} from "react-icons/si";
import Link from "next/link";
type IconType = typeof BiLogoTypescript | React.SVGProps<SVGSVGElement>;
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

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
];

const projects: Project[] = [
  {
    name: "My Website",
    description: `This website was created to showcase my portfolio, projects, and expertise in web development.`,
    skills: [
      "NextJS",
      "TypeScript",
      "Resend",
      "ShadCn",
      "TailwindCSS",
      "Vercel",
    ],
    githubUrl: "https://github.com/stephanmingoes/stephanmingoes.me",
    websiteUrl: "https://www.stephanmingoes.me/",
  },

  {
    name: "Budget Tracker",
    description: `The budget tracking application enables users to manage their
          finances. It allows you to monitor income, expenses, and budgets
          seamlessly within a single interface.`,
    skills: [
      "NextJS",
      "TypeScript",
      "CockroachDB",
      "TailwindCSS",
      "ShadCn",
      "ClerkDev",
      "ReactQuery",
      "Vercel",
    ],
    githubUrl: "https://github.com/stephanmingoes/budget_tracker",
    websiteUrl: "https://budget-trackerr.vercel.app/",
  },
  {
    name: "Show Dev",
    description: `Simple Blog Website for developers to share, showcase, and promote their work, gain inspiration, and find opportunities to collaborate and grow..`,
    skills: ["NextJS", "TypeScript", "Firebase", "ChakraUI", "Vercel"],
    githubUrl: "https://github.com/stephanmingoes/show_dev",
    websiteUrl: "https://show-dev.vercel.app/",
  },
];

export default function Projects() {
  return (
    <div>
      <Heading>Projects</Heading>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </div>
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
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      ></line>
      <line
        x1="192"
        y1="40"
        x2="40"
        y2="192"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
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
          <stop stop-color="#17CCFC" />
          <stop offset="0.5" stop-color="#5D31FF" />
          <stop offset="1" stop-color="#F35AFF" />
        </linearGradient>
      </defs>
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
      <HoverCardContent className="w-80">
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
}: Project) {
  return (
    <Card className="relative">
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
          <Button variant="outline">
            <FiGithub />
          </Button>
        </Link>

        <Link href={websiteUrl} target="_blank">
          <Button>
            <FiExternalLink />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
