"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// 定义路径标题映射
const pathTitleMap: Record<string, string> = {
  "/": "老司机的新赛道",
  "/blog": "博客",
  "/blog/tags": "标签",
  "/search": "搜索",
  "/about": "关于我",
  "/links": "友情链接",
  "/projects": "我的项目",
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
      // 尝试解码 URL 编码的 segment
      const decodedSegment = decodeURIComponent(segment);

      // 检查是否是动态路由 (如 [slug])
      if (segment.match(/^[a-z0-9-]+$/)) {
        // 将连字符转换为空格并首字母大写
        title = decodedSegment
          .replace(/-/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase());
      } else {
        title = decodedSegment;
      }
    }

    return { path, title };
  });

  // 添加首页作为第一个面包屑
  breadcrumbs.unshift({ path: "/", title: "老司机的新赛道" });

  return (
    <nav aria-label="导航栏" className="py-6 breadcrumb">
      <ol className="flex items-center space-x-1">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.path}>
            {/* 最后一项不显示链接，仅显示文字 */}
            {index === breadcrumbs.length - 1 ? (
              <span>{breadcrumb.title}</span>
            ) : (
              <Link href={breadcrumb.path}>{breadcrumb.title}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
