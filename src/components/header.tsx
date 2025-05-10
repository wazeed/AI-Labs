// /Users/wazeed/Downloads/ai-labs-nextjs-app/src/components/header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-neutral-100 dark:bg-neutral-900 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-800 to-neutral-500 dark:from-neutral-200 dark:to-neutral-400">
          AI Labs
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/" className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">Home</Link></li>
            <li><Link href="/about" className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">About</Link></li>
            <li><Link href="/apps" className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">Apps</Link></li>
            <li><Link href="/blog" className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">Blog</Link></li>
            <li><Link href="/careers" className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">Careers</Link></li>
            <li><Link href="/contact" className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
