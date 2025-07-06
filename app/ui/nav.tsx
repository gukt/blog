import Link from "next/link";

interface NavProps {
  className?: string;
}

export default function Nav({ className }: NavProps) {
  return (
    <nav className={className}>
      <ul className="flex items-center gap-6">
        <li>
          <Link href="/blog">文章</Link>
        </li>
        <li>
          <Link href="/projects">项目</Link>
        </li>
        <li>
          <Link href="/blog/tags">标签</Link>
        </li>
        <li>
          <Link href="/search">搜索</Link>
        </li>
        <li>
          <Link href="/about">关于</Link>
        </li>
        <li>
          <Link href="/links">友链</Link>
        </li>
      </ul>
    </nav>
  );
}
