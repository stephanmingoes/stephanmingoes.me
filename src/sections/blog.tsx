"use client";
import Heading from "@/components/ui/heading";
import React from "react";
import { useQuery } from "@apollo/client";
import { getBlogs } from "@/graphql/queries";
import { AiFillEye, AiOutlineRead } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

type Post = {
  _id: string;
  title: string;
  readTime: number;

  views: number;
  dateAdded: string;
  slug: string;
};

type Publication = {
  posts: Post[];
};

type User = {
  publication: Publication;
};

type Data = {
  user: User;
};

export default function Blog() {
  const { loading, error, data } = useQuery<Data>(getBlogs);
  if (loading)
    return (
      <section id="blog" className="mb-8">
        <Heading>Blogs</Heading>{" "}
        <div className="mb-4">
          <Skeleton className="h-[20px] w-full md:w-3/4 mb-2 rounded-sm" />
          <Skeleton className="h-[17px] w-3/4 md:w-2/6" />
        </div>
        <div className="mb-4">
          <Skeleton className="h-[20px] w-full md:w-3/4 mb-2 rounded-sm" />
          <Skeleton className="h-[17px] w-3/4 md:w-2/6" />
        </div>
        <div className="mb-4">
          <Skeleton className="h-[20px] w-full md:w-3/4 mb-2 rounded-sm" />
          <Skeleton className="h-[17px] w-3/4 md:w-2/6" />
        </div>
      </section>
    );
  if (error)
    return (
      <section id="blog" className="mb-8">
        <Heading>Blogs</Heading>{" "}
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>Error fetching blogs.</AlertDescription>
        </Alert>
      </section>
    );
  if (!data)
    return (
      <section id="blog" className="mb-8">
        <Heading>Blogs</Heading>{" "}
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>Error fetching blogs.</AlertDescription>
        </Alert>
      </section>
    );

  return (
    <section id="blog" className="mb-8">
      <Heading>Blogs</Heading>

      {data.user.publication.posts.map((post) => (
        <>
          <div
            className="grid-cols-1 grid w-full gap-[16px] mb-4"
            key={post._id}
          >
            <div className="w-full">
              <Link
                key={post._id}
                href={`https://blog.stephanmingoes.me/${post.slug}`}
              >
                <h2 className="font-bold text-xl mb-1 hover:underline">
                  {post.title}
                </h2>
              </Link>

              <div className="flex flex-col space-y-1 md:space-y-0 md:flex-row md:items-center md:space-x-3 text-base text-muted-foreground">
                <p className="">{new Date(post.dateAdded).toDateString()}</p>

                <p className=" flex flex-row space-x-1 items-center">
                  <span>
                    <AiOutlineRead />
                  </span>{" "}
                  <span>{post.readTime} minute read</span>
                </p>

                <p className=" flex flex-row space-x-1 items-center">
                  <span>
                    <AiFillEye />
                  </span>
                  <span>{post.views}</span>
                </p>
              </div>
            </div>
          </div>
        </>
      ))}
    </section>
  );
}
