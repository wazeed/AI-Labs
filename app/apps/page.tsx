import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import { apps } from '@/lib/appData'; // Assuming appData is updated

export const metadata: Metadata = {
  title: 'Our Apps | AI Labs',
  description: 'Explore innovative applications developed by AI Labs.',
};

export default function AppsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
          AI Labs Applications
        </h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Discover the cutting-edge AI-powered tools from AI Labs.
        </p>
      </header>

      {apps && apps.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app) => (
            <Link href={`/apps/${app.slug}`} key={app.id} className="block group">
              <div className="bg-muted rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                <div className="relative w-full h-48">
                  <Image
                    src={app.imageUrl || "/apps/placeholder-app.jpg"} // Ensure placeholder exists or use a default
                    alt={app.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-2xl font-semibold mb-2 text-foreground group-hover:text-primary">{app.name}</h2>
                  <p className="text-muted-foreground text-sm mb-3">{app.tagline}</p>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-grow">{app.description.substring(0, 100)}...</p>
                  <span className="text-primary font-medium group-hover:underline mt-auto">
                    Learn More &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground">
            We are currently developing new and exciting applications. Stay tuned!
          </p>
          <p className="mt-4 text-muted-foreground">
            For more information about our work at AI Labs, please <Link href="/contact" className="text-primary hover:underline">contact us</Link>.
          </p>
        </div>
      )}

      <section className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Explore More</h2>
        <p className="text-muted-foreground mb-8">
          The field of AI is constantly evolving, and so are our applications. 
          Stay tuned for more innovative solutions from AI Labs.
          For more information about our work at AI Labs, please <Link href="/contact" className="text-primary hover:underline">contact us</Link>.
        </p>
      </section>
    </div>
  );
}
