import { Sparkles } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center gap-2 mb-2 mt-6">
      <Sparkles className="w-10 h-10" />
      <h1 className="text-5xl font-bold">老司机的新赛道</h1>
    </header>
  );
}
