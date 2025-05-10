// Filepath: /Users/wazeed/Downloads/ai-labs-nextjs-app/app/apps/[slug]/page.tsx
import { getAppBySlug, App, apps as allApps } from '@/lib/appData'; // Added allApps
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { ArrowLeft, CheckCircle, Info, ExternalLink } from 'lucide-react'; // Added icons

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const app = getAppBySlug(params.slug);
  if (!app) {
    return {
      title: 'App Not Found',
      description: 'The app you are looking for does not exist.',
    };
  }
  return {
    title: `${app.name} | AI Labs Apps`,
    description: app.tagline,
  };
}

export async function generateStaticParams() {
  return allApps.map((app) => ({
    slug: app.slug,
  }));
}

export default function AppDetailPage({ params }: Props) {
  const app = getAppBySlug(params.slug);

  if (!app) {
    notFound();
  }

  return (
    <div className="bg-white dark:bg-black text-neutral-900 dark:text-neutral-100 min-h-screen">
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
        {/* App Header Section */}
        <header className="mb-10 sm:mb-12 text-center border-b border-neutral-200 dark:border-neutral-800 pb-8 sm:pb-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-3 bg-clip-text text-transparent bg-gradient-to-r from-neutral-800 to-neutral-500 dark:from-neutral-200 dark:to-neutral-400">{app.name}</h1>
          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">{app.tagline}</p>
          {app.developer && <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-2">Developed by: {app.developer}</p>}
        </header>

        <div className="grid md:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Left Column: Image and Details */}
          <div className="md:col-span-2 space-y-8">
            <div className="relative aspect-video sm:aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800 group">
              {app.imageUrl && (
                <Image
                  src={app.imageUrl}
                  alt={app.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}
               <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>

            <section id="details" className="bg-neutral-50 dark:bg-neutral-900/50 p-6 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-800">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-neutral-800 dark:text-neutral-100 flex items-center">
                <Info className="w-6 h-6 mr-3 text-neutral-600 dark:text-neutral-400" />
                App Details
              </h2>
              <div className="grid grid-cols-1 gap-3 text-sm text-neutral-700 dark:text-neutral-300">
                {app.version && <div><strong className="font-medium text-neutral-800 dark:text-neutral-200">Version:</strong> {app.version}</div>}
                {app.lastUpdated && <div><strong className="font-medium text-neutral-800 dark:text-neutral-200">Last Updated:</strong> {app.lastUpdated}</div>}
                {app.category && <div><strong className="font-medium text-neutral-800 dark:text-neutral-200">Category:</strong> {app.category}</div>}
                {app.website && (
                  <div>
                    <strong className="font-medium text-neutral-800 dark:text-neutral-200">Website:</strong>
                    <a href={app.website} target="_blank" rel="noopener noreferrer" className="ml-1 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:underline inline-flex items-center group/link">
                      Visit Site <ExternalLink className="w-3.5 h-3.5 ml-1.5 opacity-70 group-hover/link:opacity-100" />
                    </a>
                  </div>
                )}
              </div>
            </section>
          </div>

          {/* Right Column: Description and Features */}
          <div className="md:col-span-3">
            <section id="description" className="mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-5 text-neutral-800 dark:text-neutral-100 border-b border-neutral-200 dark:border-neutral-700 pb-3">
                About {app.name}
              </h2>
              <div className="prose prose-neutral dark:prose-invert max-w-none text-neutral-600 dark:text-neutral-400 space-y-4 text-base">
                <p>{app.description}</p>
                {app.longDescription && <p>{app.longDescription}</p>}
              </div>
            </section>

            {app.features && app.features.length > 0 && (
              <section id="features" className="mb-8 sm:mb-10">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-5 text-neutral-800 dark:text-neutral-100 border-b border-neutral-200 dark:border-neutral-700 pb-3">
                  Key Features
                </h2>
                <ul className="space-y-3">
                  {app.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-neutral-700 dark:text-neutral-300">
                      <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-neutral-500 dark:text-neutral-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>

        {/* Back to Apps Link */}
        <div className="mt-12 sm:mt-16 text-center">
          <Link href="/apps">
            <button className="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700 dark:focus-visible:ring-neutral-300 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-2 border-neutral-800 dark:border-neutral-200 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-800 hover:text-white dark:hover:bg-neutral-200 dark:hover:text-black h-11 px-8 group">
              <ArrowLeft className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" />
              Back to All Apps
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
