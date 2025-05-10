import Link from 'next/link';
import { posts } from '@/lib/blogData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | AI Labs',
  description: 'Insights, news, and articles from the team at AI Labs.',
};

export default function BlogPage() {
  const displayPosts = posts.slice(0, 6); // Show a limited number of posts initially

  return (
    <div className="container mx-auto px-4 py-16">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
          AI Labs Blog
        </h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Your source for AI insights, company news, and technology trends from AI Labs.
        </p>
      </header>

      {displayPosts.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.id} className="block group">
              <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                {post.imageUrl && (
                  <div className="mb-4 overflow-hidden rounded-md">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={post.imageUrl} 
                      alt={post.title} 
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <h2 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">{post.title}</h2>
                <p className="text-muted-foreground text-sm mb-3">By {post.author} on {post.date}</p>
                <p className="text-muted-foreground mb-4 flex-grow">{post.summary}</p>
                <div className="mt-auto">
                  <span className="text-primary font-semibold group-hover:underline">
                    Read More &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold mb-4">No Blog Posts Yet</h2>
          <p className="text-muted-foreground">
            Check back soon for updates from AI Labs!
          </p>
        </div>
      )}
      {/* Add pagination or a link to all posts if there are more than 6 */}
    </div>
  );
}
