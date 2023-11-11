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
            <Link href={post.node.slug} key={post.node.slug}>
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
  // const { loading, error, data } = useQuery(getBlogs);
  // if (loading)
  //   return (
  //     <section id="blog" className="mb-8">
  //      {" "}
  //       <div className="mb-4">
  //         <Skeleton className="h-[20px] w-full md:w-3/4 mb-2 rounded-sm" />
  //         <Skeleton className="h-[17px] w-3/4 md:w-2/6" />
  //       </div>
  //       <div className="mb-4">
  //         <Skeleton className="h-[20px] w-full md:w-3/4 mb-2 rounded-sm" />
  //         <Skeleton className="h-[17px] w-3/4 md:w-2/6" />
  //       </div>
  //       <div className="mb-4">
  //         <Skeleton className="h-[20px] w-full md:w-3/4 mb-2 rounded-sm" />
  //         <Skeleton className="h-[17px] w-3/4 md:w-2/6" />
  //       </div>
  //     </section>
  //   );
  // if (error)
  //   return (
  //     <section id="blog" className="mb-8">
  //       <Heading>Blogs</Heading>{" "}
  //       <Alert variant="destructive">
  //         <AlertTitle>Error</AlertTitle>
  //         <AlertDescription>Error fetching blogs.</AlertDescription>
  //       </Alert>
  //     </section>
  //   );
  // if (!data)
  //   return (
  //     <section id="blog" className="mb-8">
  //       <Heading>Blogs</Heading>{" "}
  //       <Alert variant="destructive">
  //         <AlertTitle>Error</AlertTitle>
  //         <AlertDescription>Error fetching blogs.</AlertDescription>
  //       </Alert>
  //     </section>
  //   );
  // return (
  //   <section id="blog" className="mb-8">
  //     <Heading>Blogs</Heading>
  //     {data.user.publication.posts.map((post) => (
  //       <>
  //         <div
  //           className="grid-cols-1 grid w-full gap-[16px] mb-4"
  //           key={post._id}
  //         >
  //           <div className="w-full">
  //             <Link
  //               key={post._id}
  //               href={`https://blog.stephanmingoes.me/${post.slug}`}
  //             >
  //               <h2 className="font-bold text-xl mb-1 hover:underline">
  //                 {post.title}
  //               </h2>
  //             </Link>
  //             <div className="flex flex-col space-y-1 md:space-y-0 md:flex-row md:items-center md:space-x-3 text-base text-muted-foreground">
  //               <p className="">{new Date(post.dateAdded).toDateString()}</p>
  //               <p className=" flex flex-row space-x-1 items-center">
  //                 <span>
  //                   <AiOutlineRead />
  //                 </span>{" "}
  //                 <span>{post.readTime} minute read</span>
  //               </p>
  //               <p className=" flex flex-row space-x-1 items-center">
  //                 <span>
  //                   <AiFillEye />
  //                 </span>
  //                 <span>{post.views}</span>
  //               </p>
  //             </div>
  //           </div>
  //         </div>
  //       </>
  //     ))}
  //   </section>
  // );
}
