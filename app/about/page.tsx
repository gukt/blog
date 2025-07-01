"use client";

import Link from "next/link";
import FallingWords from "./FallingWords";

export default function FallingWordsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="p-4">
        <nav>
          <Link href="/">首页</Link>
          <Link href="/about">关于</Link>
        </nav>
      </header>

      {/* Main content */}
      <main className="flex-grow relative">
        <FallingWords />
      </main>
    </div>
  );
}
