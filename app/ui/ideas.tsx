import Link from "next/link";

interface IdeasProps {
  id?: string;
  className?: string;
  icon?: React.ReactNode;
}

export default function Ideas({ id, className, icon }: IdeasProps) {
  const ideas = [
    {
      title: "Prompt Engineering 实战指南",
      slug: "prompt-engineering-guide",
      date: "2018-09-09",
    },
    {
      title: "构建智能化的开发工作流",
      slug: "build-intelligent-development-workflow",
      date: "2018-08-02",
    },
    {
      title: "AI 驱动的代码生成：从概念到实践",
      slug: "ai-driven-code-generation",
      date: "2018-08-02",
    },
    {
      title: "每个网页都会排放二氧化碳",
      slug: "every-webpage-emits-carbon",
      date: "2018-01-02",
    },
  ];
  return (
    <table id={id} className={`min-w-5xl max-w-6xl ${className ?? ""}`}>
      <thead>
        <tr className="border-b border-gray-200">
          <th className="text-left py-2 pr-4 font-semibold">想法</th>
          <th className="text-left py-2 font-semibold">发布</th>
        </tr>
      </thead>
      <tbody>
        {ideas.map((idea) => (
          <tr key={idea.slug}>
            <td className="leading-relaxed py-1">
              {icon ? (
                <div className="flex items-center gap-2">
                  {icon}
                  <Link href={`/blog/${idea.slug}`}>{idea.title}</Link>
                </div>
              ) : (
                <Link href={`/blog/${idea.slug}`}>{idea.title}</Link>
              )}
            </td>
            <td>
              <time dateTime={idea.date}>
                {new Date(idea.date).toLocaleDateString("zh-CN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
