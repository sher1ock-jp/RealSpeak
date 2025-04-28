"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [name, setName] = useState("ユーザー");
  const [email, setEmail] = useState("user@example.com");
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [accent, setAccent] = useState("american");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 実際の実装では、ここでAPIリクエストを行い、設定を保存します
    alert("設定が保存されました");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">設定</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* サイドバー */}
        <div className="md:col-span-1">
          <nav className="space-y-1">
            <a
              href="#profile"
              className="block px-3 py-2 rounded-md bg-primary/5 text-primary font-medium"
            >
              プロフィール
            </a>
            <a
              href="#preferences"
              className="block px-3 py-2 rounded-md hover:bg-accent transition-colors"
            >
              学習設定
            </a>
            <a
              href="#notifications"
              className="block px-3 py-2 rounded-md hover:bg-accent transition-colors"
            >
              通知設定
            </a>
            <a
              href="#account"
              className="block px-3 py-2 rounded-md hover:bg-accent transition-colors"
            >
              アカウント
            </a>
          </nav>
        </div>
        
        {/* メインコンテンツ */}
        <div className="md:col-span-3">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* プロフィール設定 */}
            <section id="profile" className="space-y-6">
              <h2 className="text-xl font-semibold">プロフィール設定</h2>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    名前
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    メールアドレス
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                </div>
              </div>
            </section>
            
            {/* 学習設定 */}
            <section id="preferences" className="space-y-6">
              <h2 className="text-xl font-semibold">学習設定</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    アクセント
                  </label>
                  <select
                    value={accent}
                    onChange={(e) => setAccent(e.target.value)}
                    className="block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="american">アメリカ英語</option>
                    <option value="british">イギリス英語</option>
                    <option value="australian">オーストラリア英語</option>
                    <option value="canadian">カナダ英語</option>
                  </select>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">ダークモード</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={darkMode}
                      onChange={() => setDarkMode(!darkMode)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>
            </section>
            
            {/* 通知設定 */}
            <section id="notifications" className="space-y-6">
              <h2 className="text-xl font-semibold">通知設定</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">メール通知</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={notifications}
                      onChange={() => setNotifications(!notifications)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>
            </section>
            
            <div className="pt-4">
              <button
                type="submit"
                className="inline-flex justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                設定を保存
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
