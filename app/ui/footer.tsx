import SocialLinks from "./social-links";
import Link from "next/link";

type FooterProps = {
  className?: string;
};

export default function Footer({ className }: FooterProps) {
  return (
    <footer
      className={`flex flex-col md:flex-row justify-between max-w-xl text-sm md:text-base my-5 ${className}`}
    >
      {/* Left */}
      <div>
        <p>老司机的新赛道</p>
        <p>每个网页都会排放二氧化碳，所以本站尽量极简。</p>
        <SocialLinks />
        <a
          href="https://beian.miit.gov.cn/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 block"
        >
          沪ICP备2024012345号-1
        </a>
        <p className="mt-2">Copyright © 2024 - 2025</p>
      </div>
      {/* Right */}
      <ul className="flex flex-row md:flex-col gap-2">
        <li>
          <Link href="/projects/">项目列表</Link>
        </li>
        <li>
          <Link href="/blog/" title="文章列表">
            文章列表
          </Link>
        </li>
        <li>
          <a href="/sitemap.xml" title="站点地图">
            站点地图
          </a>
        </li>
      </ul>
    </footer>
  );
}
