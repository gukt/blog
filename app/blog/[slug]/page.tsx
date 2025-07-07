import { notFound } from "next/navigation";
import { Metadata } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Breadcrumb from "@/app/ui/breadcrumb";
import Footer from "@/app/ui/footer";

// 获取所有可用的博客文章路径
export function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "content/posts");
  const filenames = fs.readdirSync(postsDirectory);

  return filenames
    .filter((filename) => filename.endsWith(".mdx"))
    .map((filename) => ({
      slug: filename.replace(/\.mdx$/, ""),
    }));
}

// 防止访问不存在的文章
export const dynamicParams = false;

// 生成元数据
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "content/posts", `${slug}.mdx`);

  try {
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContent);

    return {
      title: data.title,
      description: data.description,
      authors: data.author ? [{ name: data.author }] : undefined,
    };
  } catch (error) {
    return {
      title: "文章未找到",
    };
  }
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  try {
    // 动态导入 MDX 文件
    const { default: Post } = await import(`@/content/posts/${slug}.mdx`);

    return (
      <main>
        <article className="prose lg:prose-lg py-2 max-w-6xl">
          <Post />
        </article>
      </main>
    );
  } catch (error) {
    notFound();
  }
}
