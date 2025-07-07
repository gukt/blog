"use client";

import Link from "next/link";
import FallingWords from "@/app/ui/falling-words";
import Footer from "@/app/ui/footer";
import Breadcrumb from "@/app/ui/breadcrumb";

export default function AboutPage() {
  return (
    <main className="flex-grow relative">
      <FallingWords />
    </main>
  );
}
