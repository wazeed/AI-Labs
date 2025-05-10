// /Users/wazeed/Downloads/ai-labs-nextjs-app/src/components/footer.tsx
import Link from 'next/link';
import { Linkedin, Twitter, Github, Mail } from 'lucide-react'; // Added icons

export default function Footer() {
  return (
    <footer className="bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 py-10 sm:py-12 border-t border-neutral-200 dark:border-neutral-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="footer-column">
            <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-3 text-lg">
              <Link href="/" className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-800 to-neutral-500 dark:from-neutral-200 dark:to-neutral-400 hover:opacity-80 transition-opacity">
                AI Labs
              </Link>
            </h4>
            <p className="text-sm mb-1">Powering the future with AI innovations.</p>
            <a
              href="mailto:info@ailabs.com"
              className="text-sm hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors flex items-center group"
            >
              <Mail className="w-4 h-4 mr-2 opacity-70 group-hover:opacity-100" /> info@ailabs.com
            </a>
          </div>
          <div className="footer-column">
            <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-3 text-base">Quick Links</h4>
            <ul className="space-y-1.5 text-sm">
              <li><Link href="/" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">Home</Link></li>
              <li><Link href="/apps" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">Our Apps</Link></li>
              <li><Link href="/about" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">Blog</Link></li>
              <li><Link href="/careers" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-3 text-base">Legal</h4>
            <ul className="space-y-1.5 text-sm">
              <li><Link href="/privacy" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-3 text-base">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/ailabs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/ailabs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/ailabs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-neutral-500 dark:text-neutral-500 border-t border-neutral-200 dark:border-neutral-800 pt-6">
          <p>&copy; {new Date().getFullYear()} AI Labs. All rights reserved.</p>
          <p className="mt-1">Designed to innovate the future, responsibly.</p>
        </div>
      </div>
    </footer>
  );
}
