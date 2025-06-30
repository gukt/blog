import Welcome from "@/content/welcome.mdx";

function CustomH1({ children }: { children: React.ReactNode }) {
  return <h1 style={{ color: "blue", fontSize: "100px" }}>{children}</h1>;
}

// 我们可以自定义本地样式，然后将其传递给 MDX 组件，以实现局部样式的自定义
// https://nextjs.org/docs/app/guides/mdx#local-styles-and-components
const overrideComponents = {
  h1: CustomH1,
};

export default function Page() {
  return <Welcome components={overrideComponents} />;
}
