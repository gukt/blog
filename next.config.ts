import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

const nextConfig: NextConfig = {
  // 配置页面扩展名，包含 markdown 和 MDX 文件
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],

  // 其他 Next.js 配置
};

const withMDX = createMDX({
  // // 添加 markdown 插件
  // options: {
  //   remarkPlugins: [remarkGfm],
  //   rehypePlugins: [],
  // },
});

// 合并 MDX 配置和 Next.js 配置
export default withMDX(nextConfig);