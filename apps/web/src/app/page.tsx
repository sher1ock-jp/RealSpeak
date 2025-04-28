import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">RealSpeak</h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          実際の英会話環境をより忠実に再現し、ユーザーの興味に合わせたコンテキストで英会話学習を提供するWebサービス
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/conversations"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            会話を始める
          </Link>
          <Link
            href="/dashboard"
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            ダッシュボードへ
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">主な機能</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-3">コンテキスト認識型会話生成</h3>
            <p className="text-muted-foreground">
              ユーザーの現在位置情報や画像アップロードから状況や環境を把握し、リアルな会話を生成します。
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-3">リアルな多人数会話</h3>
            <p className="text-muted-foreground">
              複数人による自然な会話を再現し、割り込みや同時発話などの実際の会話環境を体験できます。
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-3">パーソナライズされた学習</h3>
            <p className="text-muted-foreground">
              ユーザーの興味や過去の会話履歴を参考にした、より深みのある会話を生成します。
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">今すぐ始めましょう</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          RealSpeakで、より実践的な英会話学習を体験しましょう。
        </p>
        <Link
          href="/(auth)/signup"
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          無料で登録する
        </Link>
      </section>
    </div>
  );
}
