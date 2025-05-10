import { getPostBySlug, Post, posts as allPosts } from '@/lib/blogData'; // Import allPosts for generateStaticParams
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { ArrowLeft, CalendarDays, UserCircle, Tag, AlertTriangle } from 'lucide-react';

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
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author],
      tags: post.tags,
      images: post.imageUrl ? [{ url: post.imageUrl, width: 1200, height: 630, alt: post.title }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
      images: post.imageUrl ? [post.imageUrl] : [],
    },
  };
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-white dark:bg-black text-neutral-900 dark:text-neutral-100 flex flex-col justify-center items-center px-4 py-16">
        <div className="text-center bg-neutral-50 dark:bg-neutral-800/30 backdrop-blur-md border border-neutral-200/80 dark:border-neutral-700/60 p-10 sm:p-16 rounded-xl shadow-2xl max-w-lg w-full">
          <AlertTriangle className="mx-auto h-20 w-20 text-red-500 dark:text-red-400 mb-8" />
          <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">Post Not Found</h1>
          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 mb-10">
            Sorry, the blog post you are looking for does not exist or has been moved.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-md px-8 py-3.5 text-base font-semibold shadow-md transition-colors duration-300 bg-gradient-to-r from-neutral-900 to-neutral-700 hover:from-neutral-800 hover:to-neutral-600 text-white dark:from-neutral-100 dark:to-neutral-300 dark:text-black dark:hover:from-neutral-200 dark:hover:to-neutral-400 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-600"
          >
            <ArrowLeft className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-neutral-900 dark:text-neutral-100 py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 mb-6 sm:mb-8 group transition-colors duration-300"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
            Back to Blog
          </Link>
        </div>

        <article className="bg-white dark:bg-neutral-900/50 backdrop-blur-sm border border-neutral-200/80 dark:border-neutral-700/60 shadow-xl rounded-xl overflow-hidden max-w-3xl mx-auto">
          {post.imageUrl && (
            <div className="relative w-full h-64 sm:h-80 md:h-96">
              <Image
                src={post.imageUrl}
                alt={`Cover image for ${post.title}`}
                fill
                sizes="(max-width: 1024px) 100vw, 768px"
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          )}
          <div className="p-6 sm:p-8 md:p-10">
            <header className="mb-6 sm:mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neutral-700 via-black to-neutral-800 dark:from-neutral-300 dark:via-white dark:to-neutral-200 pb-1">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center text-sm text-neutral-500 dark:text-neutral-400 space-x-4 mb-2">
                <div className="flex items-center">
                  <UserCircle className="h-5 w-5 mr-1.5 text-neutral-500 dark:text-neutral-400" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <CalendarDays className="h-5 w-5 mr-1.5 text-neutral-500 dark:text-neutral-400" />
                  <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
              </div>
              {post.category && (
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  Category: <span className="font-semibold text-neutral-700 dark:text-neutral-300">{post.category}</span>
                </p>
              )}
            </header>

            <div
              className="prose prose-lg sm:prose-xl dark:prose-invert max-w-none 
                         prose-headings:text-neutral-800 dark:prose-headings:text-neutral-200 
                         prose-p:text-neutral-700 dark:prose-p:text-neutral-300
                         prose-a:text-neutral-700 dark:prose-a:text-neutral-300 hover:prose-a:text-black dark:hover:prose-a:text-white hover:prose-a:underline
                         prose-strong:text-neutral-800 dark:prose-strong:text-neutral-200
                         prose-blockquote:border-l-4 prose-blockquote:border-neutral-400 dark:prose-blockquote:border-neutral-600 prose-blockquote:text-neutral-600 dark:prose-blockquote:text-neutral-400 prose-blockquote:pl-4 prose-blockquote:italic
                         prose-code:bg-neutral-100 dark:prose-code:bg-neutral-800 prose-code:p-1 prose-code:rounded-md prose-code:text-sm prose-code:text-neutral-700 dark:prose-code:text-neutral-300
                         prose-li:marker:text-neutral-500 dark:prose-li:marker:text-neutral-400"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {post.tags && post.tags.length > 0 && (
              <footer className="mt-10 sm:mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-700">
                <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-3 flex items-center">
                  <Tag className="h-5 w-5 mr-2 text-neutral-500 dark:text-neutral-400" /> Tags:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1.5 text-xs sm:text-sm bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full font-medium border border-neutral-200 dark:border-neutral-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </footer>
            )}
          </div>
        </article>
      </div>
    </div>
  );
}
