"use client";
import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import Heading from "./ui/heading";
import { Button } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export default function CollapsibleSection({
  className,
  header,
  children,
  ...props
}: { header: string } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section className={cn("", className)} {...props}>
      <Accordion
        type="single"
        collapsible
        className=""
        defaultValue={props.id ?? ""}
      >
        <AccordionItem value={props.id ?? ""} className="border-none">
          <AccordionTrigger className="py-0">
            <Heading>{header}</Heading>
          </AccordionTrigger>
          <AccordionContent> {children}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
