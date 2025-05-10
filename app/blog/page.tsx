import Link from 'next/link';
import { posts } from '@/lib/blogData';
import { Metadata } from 'next';
import Image from 'next/image'; // Import Next Image
import { ArrowRight, CalendarDays, UserCircle, Rss } from 'lucide-react'; // Added icons

export const metadata: Metadata = {
  title: 'Blog | AI Labs',
  description: 'Insights, news, and articles from the team at AI Labs.',
};

export default function BlogPage() {
  const displayPosts = posts.slice(0, 9); // Show up to 9 posts

  return (
    <div className="min-h-screen bg-white dark:bg-black text-neutral-900 dark:text-neutral-100">
      <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
        <header className="text-center mb-16 sm:mb-20">
          <Rss className="mx-auto h-16 w-16 text-neutral-500 dark:text-neutral-400 mb-6" />
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-neutral-600 via-black to-neutral-800 dark:from-neutral-400 dark:via-white dark:to-neutral-200 pb-2">
            AI Labs Blog
          </h1>
          <p className="mt-6 text-xl sm:text-2xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Your source for AI insights, company news, and technology trends from the forefront of innovation at AI Labs.
          </p>
        </header>

        {displayPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {displayPosts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.id} className="block group">
                <div className="bg-white dark:bg-neutral-800/30 backdrop-blur-md border border-neutral-200/80 dark:border-neutral-700/60 rounded-xl overflow-hidden shadow-lg hover:shadow-xl dark:shadow-neutral-800/50 transition-all duration-300 h-full flex flex-col transform hover:-translate-y-1">
                  {post.imageUrl && (
                    <div className="relative w-full h-56 sm:h-60 overflow-hidden">
                      <Image 
                        src={post.imageUrl} 
                        alt={post.title} 
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: 'cover' }}
                        className="transition-transform duration-500 group-hover:scale-105" // Slightly reduced scale
                      />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-grow">
                    <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-neutral-900 dark:text-neutral-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-neutral-700 group-hover:to-black dark:group-hover:from-neutral-300 dark:group-hover:to-white transition-colors duration-300">{post.title}</h2>
                    <div className="flex items-center text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mb-3 space-x-3">
                      <div className="flex items-center">
                        <UserCircle className="h-4 w-4 mr-1.5" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <CalendarDays className="h-4 w-4 mr-1.5" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <p className="text-neutral-700 dark:text-neutral-300 text-sm sm:text-base mb-4 line-clamp-3 flex-grow min-h-[60px]">{post.summary}</p>
                    <div className="mt-auto pt-4 border-t border-neutral-200 dark:border-neutral-700">
                      <span className="inline-flex items-center text-neutral-700 dark:text-neutral-300 font-semibold group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                        Read More <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 sm:py-16 bg-neutral-50 dark:bg-neutral-800/30 backdrop-blur-md border border-neutral-200/80 dark:border-neutral-700/60 rounded-xl shadow-lg">
            <Rss className="mx-auto h-16 w-16 text-neutral-500 dark:text-neutral-400 mb-6" />
            <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4">No Blog Posts Yet</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-md mx-auto mb-6">
              We&apos;re busy crafting insightful articles. Check back soon for updates from AI Labs!
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium shadow-md transition-colors duration-300 bg-gradient-to-r from-neutral-900 to-neutral-700 hover:from-neutral-800 hover:to-neutral-600 text-white dark:from-neutral-100 dark:to-neutral-300 dark:text-black dark:hover:from-neutral-200 dark:hover:to-neutral-400 group"
            >
              Contact Us <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        )}
        {/* Consider adding pagination or a "Load More" button if you have many posts */}
      </div>
    </div>
  );
}
