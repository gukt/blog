import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

// 博客文章类型
type Post = {
  slug: string;
  title: string;
  date: string;
  description: string;
};

// 获取所有博客文章
function getPosts(): Post[] {
  const postsDirectory = path.join(process.cwd(), "content/posts");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames
    .filter((filename) => filename.endsWith(".mdx"))
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContent);

      return {
        slug: filename.replace(/\.mdx$/, ""),
        title: data.title || "无标题",
        date: data.date || "未知日期",
        description: data.description || "无描述",
      };
    });

  // 按日期排序
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export default function BlogPage() {
  const posts = getPosts();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">博客文章</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug} className="border-b pb-4">
            <Link href={`/blog/${post.slug}`} className="block hover:underline">
              <h2 className="text-2xl font-semibold">{post.title}</h2>
            </Link>
            <time className="text-gray-500">{post.date}</time>
            <p className="mt-2">{post.description}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="text-blue-500 hover:underline mt-2 inline-block"
            >
              阅读更多 →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
