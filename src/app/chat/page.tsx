"use client";
import Heading from "@/components/ui/heading";
import React from "react";
import { InlineWidget } from "react-calendly";
export default function Page() {
  return (
    <div className="">
      <Heading>Let&apos;s talk</Heading>
      <InlineWidget url="https://calendly.com/stephanmingoes" />
    </div>
  );
}
