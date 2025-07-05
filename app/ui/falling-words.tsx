"use client";

import { useEffect, useRef } from "react";
import Matter from "matter-js";

// 技术栈单词列表 - 涵盖全栈开发、AI/ML、云原生等主流技术
const techWords = [
  // 前端技术栈
  "React",
  "Next.js",
  "Vue.js",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Vite",
  "ESLint",

  // 后端技术栈
  "Node.js",
  "Express",
  "Python",
  "FastAPI",
  "Flask",
  "Java",
  "Spring Boot",
  "Go",
  "C#",

  // 数据库和存储
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Redis",
  "Elasticsearch",
  "SQLite",

  // 云原生和容器化
  "Docker",
  "Jenkins",
  "GitLab CI",
  "GitHub Actions",

  // 云服务提供商
  "AWS",
  "Azure",
  "阿里云",
  "腾讯云",
  "Vercel",
  "Netlify",

  // AI/ML 技术栈
  "LangChain",
  "LlamaIndex",
  "Hugging Face",
  "Transformers",

  // 消息队列和流处理
  "Kafka",
  "Redis Streams",
  "Apache Flink",
  "Apache Spark",
  "Storm",

  // API 和通信
  "GraphQL",
  "REST API",
  "gRPC",
  "WebSockets",
  "Swagger",

  // 版本控制和协作
  "Git",

  // 监控和日志
  "ELK Stack",
  "Splunk",
  "Datadog",
  "Sentry",
  "Logstash",
  "Fluentd",

  // 安全和认证
  "OAuth 2.0",
  "JWT",

  // 微服务和架构
  "Microservices",
  "Event Sourcing",
  "DDD",
  "Service Mesh",
  "Serverless",

  // 移动开发
  "React Native",
  "Flutter",
  "Swift",
  "Kotlin",

  // 其他工具和框架
  "Nginx",
  "Apache",
];

export default function FallingWords() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const renderRef = useRef<Matter.Render | null>(null);
  const mouseConstraintRef = useRef<Matter.MouseConstraint | null>(null);

  useEffect(() => {
    if (!sceneRef.current) return;

    // 获取 header 和 footer 的高度，用于计算掉落范围
    const headerHeight = 80; // 假设 header 高度为 80px

    // 创建 Matter.js 引擎和渲染器
    const {
      Engine,
      Render,
      Runner,
      Bodies,
      Composite,
      Common,
      Mouse,
      MouseConstraint,
      Events,
    } = Matter;

    // 创建引擎
    const engine = Engine.create();
    engineRef.current = engine;

    // 获取容器尺寸
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight - headerHeight - 100; // 减去 header 和预留 footer 空间

    // 创建渲染器
    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: containerWidth,
        height: containerHeight,
        wireframes: false,
        background: "transparent",
      },
    });
    renderRef.current = render;

    // 创建边界
    const ground = Bodies.rectangle(
      containerWidth / 2,
      containerHeight + 50,
      containerWidth * 2,
      100,
      { isStatic: true, render: { visible: false } }
    );

    const leftWall = Bodies.rectangle(
      -50,
      containerHeight / 2,
      100,
      containerHeight * 2,
      { isStatic: true, render: { visible: false } }
    );

    const rightWall = Bodies.rectangle(
      containerWidth + 50,
      containerHeight / 2,
      100,
      containerHeight * 2,
      { isStatic: true, render: { visible: false } }
    );

    // 添加边界到世界
    Composite.add(engine.world, [ground, leftWall, rightWall]);

    // 所有单词初始都在顶部中心点
    const centerX = containerWidth / 2;
    const startY = 0;
    const words = techWords.map((word) => {
      return Bodies.rectangle(centerX, startY, word.length * 10 + 40, 40, {
        restitution: 0.6,
        friction: 0.1,
        render: {
          fillStyle: getRandomColor(),
          sprite: {
            texture: createTextTexture(word),
            xScale: 1,
            yScale: 1,
          },
        },
      });
    });

    // 添加单词到世界
    Composite.add(engine.world, words);

    // 鼠标拖拽
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });
    mouseConstraintRef.current = mouseConstraint;
    Composite.add(engine.world, mouseConstraint);

    // 悬停时显示小手
    let hovering = false;
    Events.on(render, "afterRender", () => {
      if (!mouseConstraint.mouse.element) return;
      const mousePos = mouse.position;
      // 检查鼠标是否在任何单词上
      const found = words.some((body) => {
        return Matter.Bounds.contains(body.bounds, mousePos);
      });
      if (found && !hovering) {
        render.canvas.style.cursor = "pointer";
        hovering = true;
      } else if (!found && hovering) {
        render.canvas.style.cursor = "default";
        hovering = false;
      }
    });

    // 运行引擎和渲染器
    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);

    // 清理函数
    return () => {
      if (renderRef.current) {
        Render.stop(renderRef.current);
        renderRef.current.canvas.remove();
        renderRef.current = null;
      }
      if (engineRef.current) {
        Engine.clear(engineRef.current);
        engineRef.current = null;
      }
      if (mouseConstraintRef.current) {
        Composite.remove(engine.world, mouseConstraintRef.current);
        mouseConstraintRef.current = null;
      }
    };
  }, []);

  // 创建文字纹理
  function createTextTexture(text: string): string {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    if (!context) return "";

    // 设置画布大小
    canvas.width = text.length * 10 + 40;
    canvas.height = 40;

    // 绘制背景（透明）
    context.fillStyle = "rgba(255, 255, 255, 0)";
    context.fillRect(0, 0, canvas.width, canvas.height);

    // 绘制文字
    context.fillStyle = "#000";
    context.font = "bold 20px Arial";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(text, canvas.width / 2, canvas.height / 2);

    // 返回 data URL
    return canvas.toDataURL();
  }

  // 生成随机颜色
  function getRandomColor(): string {
    const colors = [
      "#FF6B6B",
      "#4ECDC4",
      "#45B7D1",
      "#FFA5A5",
      "#A5FFD6",
      "#FFC145",
      "#FFAD5A",
      "#91A6FF",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  return <div ref={sceneRef} className="absolute inset-0" />;
}
