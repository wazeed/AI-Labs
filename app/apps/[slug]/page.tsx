// Filepath: /Users/wazeed/Downloads/ai-labs-nextjs-app/app/apps/[slug]/page.tsx
import { getAppBySlug, App } from '@/lib/appData';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

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

export default function AppDetailPage({ params }: Props) {
  const app = getAppBySlug(params.slug);

  if (!app) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-3">{app.name}</h1>
        <p className="text-xl text-muted-foreground">{app.tagline}</p>
        {app.developer && <p className="text-sm text-muted-foreground mt-1">Developed by: {app.developer}</p>}
      </header>

      <div className="grid md:grid-cols-3 gap-8 lg:gap-12 items-start">
        <div className="md:col-span-1 relative aspect-[4/3]">
          {app.imageUrl && (
            <Image
              src={app.imageUrl}
              alt={app.name}
              fill
              style={{ objectFit: 'contain' }}
              className="rounded-lg shadow-lg bg-muted"
            />
          )}
        </div>

        <div className="md:col-span-2">
          <section id="description" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2">About {app.name}</h2>
            <div className="prose dark:prose-invert max-w-none text-muted-foreground space-y-4">
              <p>{app.description}</p>
              {app.longDescription && <p>{app.longDescription}</p>}
            </div>
          </section>

          {app.features && app.features.length > 0 && (
            <section id="features" className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Key Features</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {app.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </section>
          )}

          <section id="details" className="mb-8 bg-muted p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Details</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              {app.version && <div><strong className="text-foreground">Version:</strong> {app.version}</div>}
              {app.lastUpdated && <div><strong className="text-foreground">Last Updated:</strong> {app.lastUpdated}</div>}
              {app.category && <div><strong className="text-foreground">Category:</strong> {app.category}</div>}
            </div>
          </section>

          <div className="mt-10 text-center md:text-left">
            <Link href="/apps"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors">
              &larr; Back to All Apps
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
