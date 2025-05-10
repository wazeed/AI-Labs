// /Users/wazeed/Downloads/ai-labs-nextjs-app/src/components/footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="footer-column">
            <h4 className="font-semibold text-foreground mb-2">AI Labs</h4>
            <p className="text-sm">Powering the future with AI innovations.</p>
            <p className="text-sm">
              <a
                href="mailto:info@ailabs.com"
                className="hover:text-primary"
              >
                info@ailabs.com
              </a>
            </p>
          </div>
          <div className="footer-column">
            <h4 className="font-semibold text-foreground mb-2">Quick Links</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/apps" className="hover:text-primary">
                  Our Apps
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-primary">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="font-semibold text-foreground mb-2">Legal</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="font-semibold text-foreground mb-2">Connect</h4>
            <div className="social-links text-sm space-x-2">
              <a
                href="https://linkedin.com/company/ailabs"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                LinkedIn
              </a>
              <span>|</span>
              <a
                href="https://twitter.com/ailabs"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                Twitter
              </a>
              <span>|</span>
              <a
                href="https://github.com/ailabs"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-sm border-t border-muted-foreground/10 pt-8">
          <p>&copy; {new Date().getFullYear()} AI Labs. All rights reserved.</p>
          <p className="mt-1">
            AI Labs is a fictional company for demonstration purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}
