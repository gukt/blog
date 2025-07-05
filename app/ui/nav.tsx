import Link from "next/link";

export default function Nav() {
  return (
    <nav className="mb-8">
      <ul className="flex gap-6">
        <li>
          <Link href="/blog" className="hover:text-blue-600 transition-colors">
            文章
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className="hover:text-blue-600 transition-colors"
          >
            项目
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-blue-600 transition-colors">
            关于
          </Link>
        </li>
        <li>
          <Link
            href="/friends"
            className="hover:text-blue-600 transition-colors"
          >
            友链
          </Link>
        </li>
      </ul>
    </nav>
  );
}
