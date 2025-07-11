"use client";

import { usePathname } from "next/navigation";
import Nav from "@/app/ui/nav";
import Breadcrumb from "@/app/ui/breadcrumb";

export default function HeaderWrapper() {
  const pathname = usePathname();

  return (
    <header className="">
      {pathname === "/" ? (
        // 首页显示网站名称和主导航
        <>
          <div className="text-4xl md:text-6xl font-bold mt-5 mb-3">
            老司机的新赛道
          </div>
          <Nav />
        </>
      ) : (
        // 其他页面显示面包屑
        <Breadcrumb />
      )}
    </header>
  );
}
