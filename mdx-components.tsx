import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

// 定义全局 MDX 组件，该文件必须位于项目根目录（与 app 目录同级）
// 我们可以用它来自定义样式。
// 该文件必须导出一个函数，可以作为默认导出，也可以命名为 useMDXComponents。
// 在定义 MDX 组件时，export 函数接受单个参数 components，此参数是 MDXComponent 的一个实例。
//
// NOTE：该组件依赖 @next/mdx，且要在 App Router 中使用，否则无法工作。
// https://nextjs.org/docs/app/guides/mdx#add-an-mdx-componentstsx-file
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // 可以自定义 markdown 元素的样式
    // 这里的 key 要与 HTML 标签名一致，对其进行样式覆盖；值是要渲染的替代组件。
    // 这里设置的样式是全局的，它会影响 App 中所有 MDX 文件的渲染。
    // 除此以外，还可以为特定页面应用局部样式，以及在共享的布局中定义共享的布局或样式。
    // https://nextjs.org/docs/app/guides/mdx#using-custom-styles-and-components
    // https://nextjs.org/docs/app/api-reference/file-conventions/mdx-components#params
    h1: ({ children }) => (
      <h1 className="text-3xl text-red-500 font-bold my-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold mt-6 mb-2">{children}</h2>
    ),
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        {...(props as ImageProps)}
      />
    ),
    // 其他自定义组件
    ...components,
  };
}
