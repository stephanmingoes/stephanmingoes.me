import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";

type PostData = {
  data: {
    post: {
      id: string;
      content: { html: string };
      title: string;
      publishedAt: string;
      views: number;
      coverImage: { url: string };
    };
  };
};

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await fetch("https://gql.hashnode.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query{
      post(id: "${params.slug}") {
        id
        title
        content {
          html
        }
        publishedAt
        views
        coverImage {
          url
        }
      }
    }`,
    }),
  });

  const blogData = (await data.json()) as PostData;

  return (
    <>
      <h1 className="text-2xl font-bold mb-8">{blogData.data.post.title}</h1>
      <Image
        src={blogData.data.post.coverImage.url}
        alt="blog header image"
        width={1000}
        height={400}
        className="mb-8 rounded-sm"
      />

      <article
        className="prose lg:prose-lg"
        dangerouslySetInnerHTML={{ __html: blogData.data.post.content.html }}
      ></article>
    </>
  );
}
