"use client";

import Ideas from "@/app/ui/ideas";
import { FileTextIcon } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h2 className="mb-6">
        欢迎来到我的博客！这里是我分享<Link href="/about">技术学习</Link>
        、项目经验和生活感悟的地方。
        我是一名热爱技术的开发者，专注于前端开发和人工智能领域。目前正在深入学习
        Python 和各种 AI / LLM 技术。
        我是一个喜欢分享的人，喜欢记录一些自己的思考和感悟，也喜欢分享一些自己的技术文章。
      </h2>
      <section id="ideas" className="mt-2">
        <h2 className="sr-only">想法列表</h2>
        <Ideas
          id="ideas"
          icon={<FileTextIcon className="w-7 h-7 stroke-1" />}
        />
      </section>
    </main>
  );
}

// import Link from "next/link";
// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";

// // 博客文章类型
// type Post = {
//   slug: string;
//   title: string;
//   date: string;
//   description: string;
// };

// // 获取所有博客文章
// function getPosts(): Post[] {
//   const postsDirectory = path.join(process.cwd(), "content/posts");
//   const filenames = fs.readdirSync(postsDirectory);

//   const posts = filenames
//     .filter((filename) => filename.endsWith(".mdx"))
//     .map((filename) => {
//       const filePath = path.join(postsDirectory, filename);
//       const fileContent = fs.readFileSync(filePath, "utf8");
//       const { data } = matter(fileContent);

//       return {
//         slug: filename.replace(/\.mdx$/, ""),
//         title: data.title || "无标题",
//         date: data.date || "未知日期",
//         description: data.description || "无描述",
//       };
//     });

//   // 按日期排序
//   return posts.sort(
//     (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
//   );
// }

// export default function BlogPage() {
//   const posts = getPosts();

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8">博客文章</h1>
//       <ul className="space-y-6">
//         {posts.map((post) => (
//           <li key={post.slug} className="border-b pb-4">
//             <Link href={`/blog/${post.slug}`} className="block hover:underline">
//               <h2 className="text-2xl font-semibold">{post.title}</h2>
//             </Link>
//             <time className="text-gray-500">{post.date}</time>
//             <p className="mt-2">{post.description}</p>
//             <Link
//               href={`/blog/${post.slug}`}
//               className="text-blue-500 hover:underline mt-2 inline-block"
//             >
//               阅读更多 →
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
