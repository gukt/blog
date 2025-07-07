import Breadcrumb from "@/app/ui/breadcrumb";
import Link from "next/link";

export default function TagsPage() {
  const tags = [
    {
      name: "Next.js",
      count: 10,
    },
    {
      name: "LangChain",
      count: 20,
    },
    {
      name: "LangGraph",
      count: 20,
    },
    {
      name: "AI Agent",
      count: 20,
    },
    {
      name: "人工智能",
      count: 20,
    },
    {
      name: "智能体",
      count: 20,
    },
    {
      name: "React",
      count: 15,
    },
    {
      name: "TypeScript",
      count: 12,
    },
    {
      name: "Node.js",
      count: 8,
    },
    {
      name: "Python",
      count: 25,
    },
    {
      name: "机器学习",
      count: 18,
    },
    {
      name: "深度学习",
      count: 16,
    },
    {
      name: "自然语言处理",
      count: 14,
    },
    {
      name: "计算机视觉",
      count: 12,
    },
    {
      name: "大语言模型",
      count: 22,
    },
    {
      name: "LLM",
      count: 22,
    },
    {
      name: "向量数据库",
      count: 9,
    },
    {
      name: "RAG",
      count: 11,
    },
    {
      name: "Prompt Engineering",
      count: 13,
    },
    {
      name: "提示工程",
      count: 13,
    },
    {
      name: "微调",
      count: 7,
    },
    {
      name: "Fine-tuning",
      count: 7,
    },
    {
      name: "Web3",
      count: 6,
    },
    {
      name: "区块链",
      count: 6,
    },
    {
      name: "云计算",
      count: 8,
    },
    {
      name: "Docker",
      count: 5,
    },
    {
      name: "Kubernetes",
      count: 4,
    },
    {
      name: "数据库",
      count: 10,
    },
    {
      name: "API 设计",
      count: 9,
    },
    {
      name: "系统架构",
      count: 11,
    },
    {
      name: "性能优化",
      count: 8,
    },
    {
      name: "前端开发",
      count: 12,
    },
    {
      name: "后端开发",
      count: 14,
    },
    {
      name: "全栈开发",
      count: 16,
    },
    {
      name: "开源项目",
      count: 7,
    },
    {
      name: "技术思考",
      count: 20,
    },
    {
      name: "学习笔记",
      count: 25,
    },
    {
      name: "项目实践",
      count: 18,
    },
    {
      name: "最佳实践",
      count: 15,
    },
    {
      name: "工具推荐",
      count: 12,
    },
    {
      name: "行业趋势",
      count: 9,
    },
  ];

  return (
    <div className="flex flex-wrap gap-4">
      {tags.map((tag) => (
        <Link
          key={tag.name}
          href={`/blog/tags/${tag.name}`}
          className="text-gray-600 hover:text-gray-900 hover:underline"
        >
          {tag.name} ({tag.count})
        </Link>
      ))}
    </div>
  );
}
