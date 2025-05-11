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
  await params; // Await params
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

export default async function BlogPostPage({ params }: Props) { // Make the component async
  await params; // Await params
  const post = getPostBySlug(params.slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-white dark:bg-black text-neutral-900 dark:text-neutral-100 flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">Post Not Found</h1>
        <p className="text-neutral-600 dark:text-neutral-400 mb-8 text-lg text-center">Sorry, we couldn&apos;t find the blog post you&apos;re looking for.</p>
        <Link href="/blog"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-neutral-700 to-neutral-900 hover:from-neutral-600 hover:to-neutral-800 dark:from-neutral-300 dark:to-neutral-100 dark:text-black dark:hover:from-neutral-200 dark:hover:to-neutral-400 transition-all duration-300 group"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-neutral-900 dark:text-neutral-100">
      <div className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white dark:bg-neutral-900 h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-3xl mx-auto">
          <article className="prose prose-lg dark:prose-invert mx-auto prose-neutral prose-headings:font-bold prose-headings:text-transparent prose-headings:bg-clip-text prose-headings:bg-gradient-to-r prose-headings:from-neutral-700 prose-headings:to-black dark:prose-headings:from-neutral-300 dark:prose-headings:to-white prose-a:text-neutral-600 dark:prose-a:text-neutral-300 hover:prose-a:text-black dark:hover:prose-a:text-white prose-blockquote:border-neutral-400 dark:prose-blockquote:border-neutral-600 prose-code:bg-neutral-100 dark:prose-code:bg-neutral-800 prose-code:p-1 prose-code:rounded-md prose-code:text-sm prose-figure:mt-0 prose-figure:mb-0">
            <header className="mb-10 border-b border-neutral-200 dark:border-neutral-700 pb-8">
              <Link 
                href="/blog"
                className="inline-flex items-center text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-300 group mb-4"
              >
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform duration-150 group-hover:-translate-x-1" />
                Back to all posts
              </Link>
              <h1 className="block text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl leading-tight text-center mb-6">
                {post.title}
              </h1>
              <div className="flex flex-wrap justify-center items-center text-sm text-neutral-500 dark:text-neutral-400 space-x-4 mb-4">
                <div className="flex items-center">
                  <UserCircle className="h-5 w-5 mr-1.5" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <CalendarDays className="h-5 w-5 mr-1.5" />
                  <time dateTime={new Date(post.date).toISOString()}>{post.date}</time>
                </div>
                {post.category && (
                  <div className="flex items-center">
                    <Tag className="h-5 w-5 mr-1.5" /> 
                    <span>{post.category}</span>
                  </div>
                )}
              </div>
              {post.imageUrl && (
                <div className="mt-8 mb-10 aspect-video w-full overflow-hidden rounded-xl shadow-2xl">
                  <Image 
                    src={post.imageUrl}
                    alt={`Cover image for ${post.title}`}
                    width={1200}
                    height={675}
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                    priority // Prioritize loading of the main blog image
                  />
                </div>
              )}
            </header>
            
            <div className="text-lg sm:text-xl leading-relaxed" dangerouslySetInnerHTML={{ __html: post.content }} />

            {post.tags && post.tags.length > 0 && (
              <footer className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-700">
                <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Tags:</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs font-semibold text-neutral-700 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </footer>
            )}
          </article>
        </div>
      </div>
    </div>
  );
}
