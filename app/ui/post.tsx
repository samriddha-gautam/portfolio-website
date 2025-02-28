export function Post({ post }: { post: { id: number; title: string } }) {
    return <li className="border p-2 my-2 rounded shadow">{post.title}</li>;
  }
  