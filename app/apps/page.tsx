import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import { apps } from '@/lib/appData';
import { ArrowRight, Layers, Brain, SearchCode } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Apps | AI Labs',
  description: 'Explore innovative AI-powered applications developed by AI Labs.',
};

export default function AppsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-neutral-900 dark:text-neutral-100">
      <div className="container mx-auto px-4 py-16 sm:py-20 md:py-24">
        {/* Header Section */}
        <header className="text-center mb-16 sm:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight pb-2 bg-clip-text text-transparent bg-gradient-to-r from-neutral-800 to-neutral-500 dark:from-neutral-200 dark:to-neutral-400">
            AI Labs Applications
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Discover our suite of cutting-edge AI-powered tools designed to innovate and inspire.
          </p>
        </header>

        {/* Apps Grid Section */}
        {apps && apps.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {apps.map((app) => (
              <Link href={`/apps/${app.slug}`} key={app.id} className="block group">
                <div className="bg-neutral-50 dark:bg-neutral-900/50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl border border-neutral-200 dark:border-neutral-800 transition-all duration-300 h-full flex flex-col transform hover:-translate-y-1">
                  <div className="relative w-full h-56 sm:h-64">
                    <Image
                      src={app.imageUrl || "/apps/placeholder-app.jpg"}
                      alt={app.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 p-2">
                       <h2 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-md group-hover:text-neutral-200 transition-colors duration-300">{app.name}</h2>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-neutral-500 dark:text-neutral-400 text-xs font-medium mb-2 uppercase tracking-wider">{app.category || 'AI Solution'}</p>
                    <p className="text-neutral-700 dark:text-neutral-300 text-sm mb-4 line-clamp-3 flex-grow min-h-[50px] sm:min-h-[60px]">{app.tagline}</p>
                    <div className="mt-auto pt-4 border-t border-neutral-200 dark:border-neutral-700/50">
                      <span className="inline-flex items-center text-neutral-700 dark:text-neutral-300 font-semibold group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors duration-300 group/link">
                        Learn More <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          // No Apps Placeholder Section
          <div className="text-center py-12 sm:py-16 bg-neutral-100 dark:bg-neutral-800/50 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-700/50">
            <Layers className="mx-auto h-16 w-16 text-neutral-500 dark:text-neutral-400 mb-6" />
            <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Coming Soon!</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-md mx-auto mb-6">
              We are currently developing new and exciting applications. Our AI experts are hard at work!
            </p>
            <Link href="/contact">
              <button className="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700 dark:focus-visible:ring-neutral-300 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8
                                 bg-gradient-to-r from-neutral-900 to-neutral-700 text-white hover:from-neutral-800 hover:to-neutral-600
                                 dark:from-neutral-100 dark:to-neutral-300 dark:text-black dark:hover:from-neutral-50 dark:hover:to-neutral-200 group">
                Contact Us for Updates <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Link>
          </div>
        )}

        {/* Pioneering AI Solutions Section */}
        <section className="mt-20 sm:mt-24 text-center py-12 sm:py-16 bg-gradient-to-r from-neutral-800 to-neutral-950 dark:from-neutral-900 dark:to-black rounded-xl shadow-2xl">
          <Brain className="mx-auto h-12 w-12 sm:h-16 sm:w-16 text-neutral-300 dark:text-neutral-400 mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white dark:text-neutral-100 mb-6">Pioneering AI Solutions</h2>
          <p className="text-lg sm:text-xl text-neutral-300 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
            The field of AI is constantly evolving, and so are our applications.
            AI Labs is committed to staying at the forefront of innovation, delivering tools that redefine possibilities.
          </p>
          <Link href="/about">
            <button className="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 focus-visible:ring-offset-2 ring-offset-black disabled:pointer-events-none disabled:opacity-50 border-2 border-neutral-200 text-neutral-200 hover:bg-neutral-200 hover:text-black h-11 px-8 group">
              Learn About Our Vision <SearchCode className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
}
