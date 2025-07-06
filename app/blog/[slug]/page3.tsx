import Breadcrumb from "@/app/ui/breadcrumb";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <div>
      <Breadcrumb />
      <div>Blog: {slug}</div>
    </div>
  );
}
