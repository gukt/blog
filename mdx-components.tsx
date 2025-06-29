import type { MDXComponents } from "mdx/types";

// https://nextjs.org/docs/app/guides/mdx#using-custom-styles-and-components
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // 可以自定义 markdown 元素的样式
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold my-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold mt-6 mb-2">{children}</h2>
    ),
    // 其他自定义组件
    ...components,
  };
}
