import { ExternalLinkIcon, FileTextIcon } from "lucide-react";

export default function ProjectsPage() {
  const projects = [
    {
      name: "智能代码助手",
      description:
        "基于大模型的代码生成和重构工具，支持多种编程语言，提供智能代码补全和优化建议。",
      link: "https://code-assistant.vercel.app",
      icon: <FileTextIcon className="w-7 h-7 stroke-1" />,
      suffixIcon: <ExternalLinkIcon className="w-4 h-4 stroke-1" />,
    },
    {
      name: "AI 翻译助手",
      description:
        "智能翻译工具，支持多语言互译，具备上下文理解和专业术语识别能力。",
      link: "https://ai-translator.vercel.app",
      icon: <FileTextIcon className="w-7 h-7 stroke-1" />,
    },
    {
      name: "创意写作工坊",
      description:
        "AI 驱动的创意写作平台，提供故事构思、角色设定和情节发展建议。",
      link: "https://creative-writer.vercel.app",
      icon: <FileTextIcon className="w-7 h-7 stroke-1" />,
    },
    {
      name: "智能数据分析师",
      description:
        "自动分析数据并生成可视化报告，支持自然语言查询和智能洞察发现。",
      link: "https://data-analyst.vercel.app",
      icon: <FileTextIcon className="w-7 h-7 stroke-1" />,
    },
    {
      name: "AI 学习导师",
      description: "个性化学习助手，根据学习进度和偏好推荐学习路径和练习题目。",
      link: "https://ai-tutor.vercel.app",
      icon: <FileTextIcon className="w-7 h-7 stroke-1" />,
    },
    {
      name: "智能客服机器人",
      description:
        "基于大模型的客服系统，支持多轮对话和情感识别，提供人性化服务体验。",
      link: "https://ai-customer-service.vercel.app",
      icon: <FileTextIcon className="w-7 h-7 stroke-1" />,
    },
  ];
  return (
    <>
      <h2 className="mb-6">
        多年来，我一直在做各种各样的小项目，有开源的，有实验的，也有 just for
        fun
        的，下面就是我筛选出来我觉得还不错的项目合集，也是我在技术领域中尝试和探索的最好见证。
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
              {project.icon}
              {project.name}
              {project.suffixIcon}
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
