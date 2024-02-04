import { MDXRemote } from "next-mdx-remote/rsc";

type PostData = {
  data: {
    post: {
      _id: string;
      content: string;
      title: string;
      dateAdded: string;
      views: number;
    };
  };
};

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await fetch("https://api.hashnode.com/", {
    next: { revalidate: 60 },
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query {
  
  post(slug: "authentication-using-nextjs-client-and-nestjs-server", hostname: "stephanmingoes") {
      
    _id
    content
    title
    dateAdded

    views
    
  }
  
}
`,
    }),
  });
  const blogData = (await data.json()) as PostData;

  return (
    <article>
      <h1 className="text-3xl font-bold">{blogData.data.post.title}</h1>

      <article
        className="prose lg:prose-xl"
        dangerouslySetInnerHTML={{ __html: blogData.data.post.content }}
      ></article>
    </article>
  );
}
