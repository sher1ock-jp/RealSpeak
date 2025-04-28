"use client";

import { useState } from "react";
import Link from "next/link";

export default function ConversationsPage() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [selectedDuration, setSelectedDuration] = useState<number | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const topics = [
    { id: "restaurant", name: "レストランでの注文" },
    { id: "travel", name: "旅行の計画" },
    { id: "business", name: "ビジネスミーティング" },
    { id: "shopping", name: "ショッピング" },
    { id: "smalltalk", name: "スモールトーク" },
    { id: "interview", name: "面接" },
  ];

  const durations = [
    { value: 1, label: "1分" },
    { value: 3, label: "3分" },
    { value: 5, label: "5分" },
  ];

  const handleGenerate = () => {
    if (!selectedTopic || !selectedDuration) return;
    
    setIsGenerating(true);
    // 実際の実装では、ここでAPIリクエストを行い、会話を生成します
    setTimeout(() => {
      setIsGenerating(false);
      // 生成完了後の処理
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">会話生成</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          {/* トピック選択 */}
          <div>
            <h2 className="text-xl font-semibold mb-4">トピックを選択</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {topics.map((topic) => (
                <button
                  key={topic.id}
                  className={`p-4 border rounded-lg text-left transition-colors ${
                    selectedTopic === topic.id
                      ? "border-primary bg-primary/5"
                      : "hover:bg-accent"
                  }`}
                  onClick={() => setSelectedTopic(topic.id)}
                >
                  {topic.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* 会話時間選択 */}
          <div>
            <h2 className="text-xl font-semibold mb-4">会話時間</h2>
            <div className="flex flex-wrap gap-3">
              {durations.map((duration) => (
                <button
                  key={duration.value}
                  className={`px-6 py-3 border rounded-lg transition-colors ${
                    selectedDuration === duration.value
                      ? "border-primary bg-primary/5"
                      : "hover:bg-accent"
                  }`}
                  onClick={() => setSelectedDuration(duration.value)}
                >
                  {duration.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* 生成ボタン */}
          <div>
            <button
              className={`w-full md:w-auto px-8 py-3 rounded-md bg-primary text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none`}
              disabled={!selectedTopic || !selectedDuration || isGenerating}
              onClick={handleGenerate}
            >
              {isGenerating ? "生成中..." : "会話を生成する"}
            </button>
          </div>
        </div>
        
        {/* サイドバー */}
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">最近の会話</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">まだ会話履歴がありません。</p>
          </div>
          
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">カスタム会話</h2>
            <p className="text-sm text-muted-foreground mb-4">
              特定のシチュエーションや興味のあるトピックについて会話を生成できます。
            </p>
            <Link
              href="/conversations/custom"
              className="inline-flex items-center text-sm font-medium text-primary hover:underline"
            >
              カスタム会話を作成 →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
