"use client";
import React from "react";
import { ApolloProvider as ApolloProviderReact } from "@apollo/client";
import { client } from "@/graphql";

export default function ApolloProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ApolloProviderReact client={client}>{children}</ApolloProviderReact>;
}
