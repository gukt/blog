import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // 配置页面扩展名，包含 markdown 和 MDX 文件
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  // 其他 Next.js 配置
};

const withMDX = createMDX({
  // 默认情况下，next/mdx 仅编译扩展名为 .mdx 的文件。
  // 要使用 webpack 处理 .md 文件，请更新 extension 选项
  // https://nextjs.org/docs/app/guides/mdx#configure-nextconfigmjs
  // 注意：Turbopack 目前不支持 extension 选项，因此不支持 .md 文件。
  // extension: /\.(md|mdx)$/,
  // Add markdown plugins here, as desired
  // // 添加 markdown 插件
  options: {
    // 支持 Github 风格的 Markdown 语法
    // https://nextjs.org/docs/app/guides/mdx#remark-and-rehype-plugins
    remarkPlugins: [['remark-gfm']],
    rehypePlugins: [],
  },
});

// 合并 MDX 配置和 Next.js 配置
export default withMDX(nextConfig);