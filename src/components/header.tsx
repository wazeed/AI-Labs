// /Users/wazeed/Downloads/ai-labs-nextjs-app/src/components/header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-muted shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          AI Labs
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/" className="hover:text-primary">Home</Link></li>
            <li><Link href="/about" className="hover:text-primary">About</Link></li>
            <li><Link href="/apps" className="hover:text-primary">Apps</Link></li>
            <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
            <li><Link href="/careers" className="hover:text-primary">Careers</Link></li>
            <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
