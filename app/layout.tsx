import type { Metadata } from "next";
import "@/app/ui/globals.css";
import Footer from "@/app/ui/footer";
import HeaderWrapper from "@/app/ui/header-wrapper";

export const metadata: Metadata = {
  title: "老司机的新赛道",
  description: "个人博客，分享文章、想法和作品集",
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="text-[20px] md:text-[22px] lg:text-[24px] ">
        <div className="flex flex-col w-full lg:max-w-6xl min-h-screen ">
          <HeaderWrapper />
          <main className="flex-1 mt-4">{children}</main>
          <Footer className="mt-20" />
        </div>
      </body>
    </html>
  );
}
