import { MDXRemote } from "next-mdx-remote/rsc";

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
  console.log(blogData);

  return (
    <>
      <h1 className="text-xl font-bold">{blogData.data.post.title}</h1>

      <article
        className="prose lg:prose-lg"
        dangerouslySetInnerHTML={{ __html: blogData.data.post.content.html }}
      ></article>
    </>
  );
}
