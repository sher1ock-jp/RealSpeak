import Link from "next/link";

export function Header() {
  return (
    <header className="w-full border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">RealSpeak</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/dashboard" className="text-sm font-medium transition-colors hover:text-primary">
            ダッシュボード
          </Link>
          <Link href="/conversations" className="text-sm font-medium transition-colors hover:text-primary">
            会話
          </Link>
          <Link href="/settings" className="text-sm font-medium transition-colors hover:text-primary">
            設定
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link
            href="/(auth)/login"
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            ログイン
          </Link>
        </div>
      </div>
    </header>
  );
}
