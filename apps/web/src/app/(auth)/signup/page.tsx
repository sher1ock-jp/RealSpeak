import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">アカウント作成</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            RealSpeakで英会話学習を始めましょう
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                お名前
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                メールアドレス
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium">
                パスワード
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password-confirm" className="block text-sm font-medium">
                パスワード（確認）
              </label>
              <div className="mt-1">
                <input
                  id="password-confirm"
                  name="password-confirm"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <label htmlFor="terms" className="ml-2 block text-sm">
                <span>
                  <Link href="/terms" className="font-medium text-primary hover:text-primary/90">
                    利用規約
                  </Link>
                  と
                  <Link href="/privacy" className="font-medium text-primary hover:text-primary/90">
                    プライバシーポリシー
                  </Link>
                  に同意します
                </span>
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="w-full inline-flex justify-center rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                アカウント作成
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-background px-2 text-muted-foreground">または</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3">
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Googleで登録
              </button>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          すでにアカウントをお持ちですか？{" "}
          <Link href="/(auth)/login" className="font-medium text-primary hover:text-primary/90">
            ログイン
          </Link>
        </p>
      </div>
    </div>
  );
}
