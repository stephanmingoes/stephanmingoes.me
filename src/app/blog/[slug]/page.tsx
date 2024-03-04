import { Metadata } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Image from "next/image";

type PostData = {
  data: {
    post: {
      id: string;
      content: { html: string };
      title: string;
      publishedAt: string;
      views: number;
      seo: {
        title: string;
        description: string;
      };
      coverImage: { url: string };
    };
  };
};
async function getBlog(id: string): Promise<PostData> {
  const data = await fetch("https://gql.hashnode.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query{
      post(id: "${id}") {
        id
        title
        content {
          html
        }
        seo {
      title
      description
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

  return blogData;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const blogData = await getBlog(params.slug);

  return {
    title: blogData.data.post.seo.title,
    description: blogData.data.post.seo.description,
    openGraph: {
      title: blogData.data.post.seo.title,
      description: blogData.data.post.seo.description,
      images: { url: blogData.data.post.coverImage.url },
      type: "article",
    },
  };
}
export default async function Page({ params }: { params: { slug: string } }) {
  const blogData = await getBlog(params.slug);

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
