"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

// 定义路径标题映射
const pathTitleMap: Record<string, string> = {
  "/": "首页",
  "/blog": "博客",
  "/about": "关于",
  "/links": "友链",
  "/projects": "项目",
};

export default function Breadcrumb() {
  // 获取当前路径
  const pathname = usePathname();

  // 如果是首页，不显示面包屑
  if (pathname === "/") return null;

  // 分割路径
  const pathSegments = pathname.split("/").filter(Boolean);

  // 构建面包屑数据
  const breadcrumbs = pathSegments.map((segment, index) => {
    // 构建当前层级的完整路径
    const path = `/${pathSegments.slice(0, index + 1).join("/")}`;

    // 获取标题（如果是动态路由，则使用 segment 值）
    let title = pathTitleMap[path];

    // 如果在映射中找不到标题，可能是动态路由
    if (!title) {
      // 检查是否是动态路由 (如 [slug])
      if (segment.match(/^[a-z0-9-]+$/)) {
        // 将连字符转换为空格并首字母大写
        title = segment
          .replace(/-/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase());
      } else {
        title = segment;
      }
    }

    return { path, title };
  });

  // 添加首页作为第一个面包屑
  breadcrumbs.unshift({ path: "/", title: "首页" });

  return (
    <nav aria-label="面包屑导航" className="py-2">
      <ol className="flex items-center space-x-1 text-2xl">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.path} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="mx-1 h-4 w-4 text-gray-500" />
            )}
            {index === breadcrumbs.length - 1 ? (
              <span className="text-gray-600">{breadcrumb.title}</span>
            ) : (
              <Link
                href={breadcrumb.path}
                className="text-blue-600 hover:underline"
              >
                {breadcrumb.title}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
