import Breadcrumb from "@/app/ui/breadcrumb";
import Ideas from "@/app/ui/ideas";
import { FileTextIcon } from "lucide-react";

export default async function TagPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const count = 10;

  return (
    <>
      <Breadcrumb />
      <h2 className="mb-6">
        找到 {count} 篇标签为“{decodedSlug}”的文章：
      </h2>
      <section id="ideas" className="mt-10">
        <h2 className="sr-only">想法列表</h2>
        <Ideas
          id="ideas"
          icon={<FileTextIcon className="w-7 h-7 stroke-1" />}
        />
      </section>
    </>
  );
}
