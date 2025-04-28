export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">ダッシュボード</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 最近の会話 */}
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">最近の会話</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">まだ会話履歴がありません。</p>
            <a 
              href="/conversations" 
              className="inline-flex items-center text-sm font-medium text-primary hover:underline"
            >
              会話を始める →
            </a>
          </div>
        </div>
        
        {/* 学習進捗 */}
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">学習進捗</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium mb-1">総会話時間</p>
              <p className="text-2xl font-bold">0分</p>
            </div>
            <div>
              <p className="text-sm font-medium mb-1">学習した表現</p>
              <p className="text-2xl font-bold">0</p>
            </div>
          </div>
        </div>
        
        {/* おすすめのトピック */}
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">おすすめのトピック</h2>
          <ul className="space-y-2">
            <li>
              <a 
                href="/conversations?topic=restaurant" 
                className="block p-3 border rounded hover:bg-accent transition-colors"
              >
                レストランでの注文
              </a>
            </li>
            <li>
              <a 
                href="/conversations?topic=travel" 
                className="block p-3 border rounded hover:bg-accent transition-colors"
              >
                旅行の計画
              </a>
            </li>
            <li>
              <a 
                href="/conversations?topic=business" 
                className="block p-3 border rounded hover:bg-accent transition-colors"
              >
                ビジネスミーティング
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
