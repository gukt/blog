// app/links/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "友情链接 | 我的博客",
  description: "我的博客友情链接页面，展示我喜欢的网站和合作伙伴",
};

// 友情链接数据
const links = [
  {
    name: "Next.js 官网",
    url: "https://nextjs.org",
    description: "React 框架，用于构建现代 Web 应用",
  },
  {
    name: "React 官网",
    url: "https://react.dev",
    description: "用于构建用户界面的 JavaScript 库",
  },
  {
    name: "Tailwind CSS",
    url: "https://tailwindcss.com",
    description: "无需离开 HTML 即可快速构建现代网站的 CSS 框架",
  },
  {
    name: "Vercel",
    url: "https://vercel.com",
    description: "为前端团队打造的平台，提供最佳的开发体验",
  },
  {
    name: "MDX",
    url: "https://mdxjs.com",
    description: "Markdown 的超集，支持 JSX",
  },
  {
    name: "TypeScript",
    url: "https://www.typescriptlang.org",
    description: "JavaScript 的超集，添加了类型系统",
  },
];

export default function LinksPage() {
  return (
    <>
      <h2 className="mb-6">以下是我喜欢的网站和合作伙伴，希望对你有帮助。</h2>
      <ul>
        {links.map((link) => (
          <li key={link.name} className="list-disc ml-4">
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.name}
            </a>{" "}
            - {link.description}
          </li>
        ))}
      </ul>
    </>
  );
}
