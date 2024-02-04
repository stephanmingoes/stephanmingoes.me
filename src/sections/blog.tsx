import Heading from "@/components/ui/heading";
import React from "react";
import { RxExternalLink } from "react-icons/rx";
import Link from "next/link";

import { Card } from "@/components/ui/card";
type PostNode = {
  cursor: string;
  node: {
    title: string;
    slug: string;
    views: number;
  };
};

type PageInfo = {
  hasNextPage: boolean;
};

type Posts = {
  pageInfo: PageInfo;
  edges: PostNode[];
};

type Publication = {
  posts: Posts;
};

type Data = {
  publication: Publication;
};

type BlogListType = {
  data: Data;
};

export default async function Blog() {
  const data = await fetch("https://gql.hashnode.com/", {
    next: { revalidate: 60 },
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query {
  publication(host: "blog.stephanmingoes.me") {
    posts(first: 5) {
      pageInfo {
        hasNextPage
      }
      edges {
        cursor
        node {
          title
          slug
          views
        }
      }
    }
  }
}`,
    }),
  });
  const blogData = (await data.json()) as BlogListType;

  return (
    <>
      <section id="blog" className="mb-8">
        <Heading>Blogs</Heading>{" "}
        {blogData.data.publication.posts.edges.map((post) => {
          return (
            <Link href={"/blog/" + post.node.slug} key={post.node.slug}>
              <Card className="flex flex-row justify-between rounded-sm shadow-sm px-4 py-4">
                <div className="flex flex-col">
                  <h1 className="text-xl font-semibold">{post.node.title}</h1>
                  <p className="text-muted-foreground">
                    {post.node.views} views
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <span className="text-lg text-muted-foreground">
                    <RxExternalLink />
                  </span>
                </div>
              </Card>
            </Link>
          );
        })}
        <div className="flex flex-row justify-end items-center mt-4">
          <Link
            href={"https://blog.stephanmingoes.me/"}
            className="text-muted-foreground flex flex-row justify-center items-center space-x-1 hover:underline underline-offset-1"
          >
            {" "}
            View More{" "}
            <span className="text-sm ">
              <RxExternalLink />
            </span>{" "}
          </Link>
        </div>
      </section>
    </>
  );
}
