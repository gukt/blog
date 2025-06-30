export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // 在此处创建任意的共享的布局或样式
  // 这是第一种方式，在 layout.tsx 中设置共享的布局或样式
  // return <div style={{ color: "green" }}>{children}</div>;

  // 引入了 Tailwind Typography 后
  // https://nextjs.org/docs/app/guides/mdx#using-tailwind-typography-plugin
  return (
    <div className="prose prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white">
      {children}
    </div>
  );
}
