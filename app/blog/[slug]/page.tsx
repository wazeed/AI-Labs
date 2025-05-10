import { getPostBySlug, Post } from '@/lib/blogData';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return {
      title: 'Post Not Found | AI Labs Blog',
      description: 'The blog post you are looking for could not be found.',
    };
  }
  return {
    title: `${post.title} | AI Labs Blog`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: 'article',
      publishedTime: post.date, // Assuming date is in ISO format for better OG compatibility
      authors: [post.author],
      tags: post.tags,
      images: post.imageUrl ? [{ url: post.imageUrl }] : [],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Sorry, the blog post you are looking for does not exist or has been moved.
        </p>
        <Link href="/blog" className="text-primary hover:underline">
          &larr; Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <article className="prose prose-lg dark:prose-invert max-w-3xl mx-auto">
        <header className="mb-8">
          <Link href="/blog" className="text-sm text-primary hover:underline mb-2 block">
            &larr; Back to Blog
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
            {post.title}
          </h1>
          <p className="text-muted-foreground text-base">
            By {post.author} on {post.date}
          </p>
          {post.category && (
            <p className="text-sm text-muted-foreground mt-1">
              Category: <span className="font-semibold text-primary">{post.category}</span>
            </p>
          )}
          {post.imageUrl && (
            <div className="mt-6 mb-8 overflow-hidden rounded-lg shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.imageUrl}
                alt={`Cover image for ${post.title}`}
                className="w-full h-auto object-cover"
              />
            </div>
          )}
        </header>

        {/* Render HTML content from blogData.ts */}
        <div dangerouslySetInnerHTML={{ __html: post.content }} />

        {post.tags && post.tags.length > 0 && (
          <footer className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold mb-2">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 text-sm bg-muted text-muted-foreground rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </footer>
        )}
      </article>
    </div>
  );
}

// It might be beneficial to also create a function to generate static paths
// if the number of posts isn't excessively large:
// export async function generateStaticParams() {
//   const { posts } = await import('@/lib/blogData'); // ensure posts is directly available or fetched
//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// }
