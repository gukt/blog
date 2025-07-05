"use client";

import Link from "next/link";
import FallingWords from "@/app/ui/falling-words";
import Footer from "@/app/ui/footer";
import Breadcrumb from "@/app/ui/breadcrumb";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Breadcrumb navigation */}
      <Breadcrumb />

      {/* Main content */}
      <main className="flex-grow relative">
        <FallingWords />
      </main>

      <Footer />
    </div>
  );
}
