import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} RealSpeak. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
              About
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              プライバシーポリシー
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              利用規約
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
