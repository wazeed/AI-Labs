import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-background to-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Welcome to <span className="text-primary">AI Labs</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Powering the future with AI Labs. We build cutting-edge AI solutions
            to solve complex problems and drive progress.
          </p>
          <div className="space-x-4">
            <Link href="/apps">
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8">
                Explore Our Apps
              </button>
            </Link>
            <Link href="/contact">
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-11 px-8 border-primary text-primary hover:bg-primary/10">
                Get In Touch
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features/What We Do Section */}
      <section id="features" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              What We Do at AI Labs
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              We specialize in creating intelligent systems that learn, adapt, and
              deliver exceptional value.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-muted p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="text-primary text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold mb-3">
                AI-Powered Applications
              </h3>
              <p className="text-muted-foreground">
                Developing bespoke AI applications tailored to your specific
                business needs, from automation to advanced analytics.
              </p>
            </div>
            <div className="bg-muted p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="text-primary text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3">Data Science & ML</h3>
              <p className="text-muted-foreground">
                Leveraging machine learning and data science to uncover insights,
                predict trends, and optimize performance.
              </p>
            </div>
            <div className="bg-muted p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="text-primary text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-3">
                AI Consulting & Strategy
              </h3>
              <p className="text-muted-foreground">
                Guiding businesses on their AI journey, from strategy formulation
                to implementation and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Apps Preview Section */}
      <section id="our-apps" className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Discover Our Innovations
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              A glimpse into the powerful and intuitive applications built by AI
              Labs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow flex flex-col">
              <div className="relative w-full h-40 mb-4 rounded overflow-hidden">
                <Image
                  src="/apps/placeholder-insightengine.jpg"
                  alt="InsightEngine Pro"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">
                InsightEngine Pro
              </h3>
              <p className="text-muted-foreground text-sm mb-4 flex-grow">
                Unlock actionable insights from your data with AI.
              </p>
              <Link href="/apps/insight-engine-pro" className="mt-auto">
                <button className="inline-flex items-center justify-center text-sm font-medium text-primary hover:text-primary/90 p-0">
                  Learn More &rarr;
                </button>
              </Link>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow flex flex-col">
              <div className="relative w-full h-40 mb-4 rounded overflow-hidden">
                <Image
                  src="/apps/placeholder-connectsphere.jpg"
                  alt="ConnectSphere AI"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">
                ConnectSphere AI
              </h3>
              <p className="text-muted-foreground text-sm mb-4 flex-grow">
                AI-powered communication and collaboration hub.
              </p>
              <Link href="/apps/connect-sphere-ai" className="mt-auto">
                <button className="inline-flex items-center justify-center text-sm font-medium text-primary hover:text-primary/90 p-0">
                  Learn More &rarr;
                </button>
              </Link>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow flex flex-col">
              <div className="relative w-full h-40 mb-4 rounded overflow-hidden">
                <Image
                  src="/apps/placeholder-artisanai.jpg"
                  alt="ArtisanAI Studio"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">
                ArtisanAI Studio
              </h3>
              <p className="text-muted-foreground text-sm mb-4 flex-grow">
                Create stunning visuals with AI-driven design tools.
              </p>
              <Link href="/apps/artisan-ai-studio" className="mt-auto">
                <button className="inline-flex items-center justify-center text-sm font-medium text-primary hover:text-primary/90 p-0">
                  Learn More &rarr;
                </button>
              </Link>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/apps">
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-11 px-8 border-primary text-primary hover:bg-primary/10">
                View All Applications
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Ready to Innovate with AI Labs?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Let’s discuss how AI Labs can help your business leverage the power
            of artificial intelligence.
          </p>
          <Link href="/contact">
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8">
              Schedule a Consultation
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
