import Link from "next/link";
import Image from "next/image";
import { Lightbulb, BarChartBig, Briefcase, ArrowRight, Send, ExternalLink } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-neutral-900 via-black to-neutral-800 dark:from-neutral-950 dark:via-black dark:to-neutral-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-neutral-100 dark:text-neutral-100">
            Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 via-neutral-50 to-neutral-300 dark:from-neutral-200 dark:via-neutral-100 dark:to-neutral-400">AI Labs</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 dark:text-neutral-400 mb-10 max-w-2xl mx-auto">
            Powering the future with AI Labs. We build cutting-edge AI solutions
            to solve complex problems and drive progress.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/apps">
              <button className="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700 dark:focus-visible:ring-neutral-300 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-12 px-8 w-full sm:w-auto
                                 bg-gradient-to-r from-neutral-900 to-neutral-700 text-white hover:from-neutral-800 hover:to-neutral-600
                                 dark:from-neutral-100 dark:to-neutral-300 dark:text-black dark:hover:from-neutral-50 dark:hover:to-neutral-200 group">
                Explore Our Apps <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Link>
            <Link href="/contact">
              <button className="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700 dark:focus-visible:ring-neutral-300 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-2 border-neutral-800 dark:border-neutral-200 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-800 hover:text-white dark:hover:bg-neutral-200 dark:hover:text-black h-12 px-8 w-full sm:w-auto group">
                Get In Touch <Send className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features/What We Do Section */}
      <section id="features" className="py-16 md:py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
              What We Do at AI Labs
            </h2>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
              We specialize in creating intelligent systems that learn, adapt, and
              deliver exceptional value.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Lightbulb, title: "AI-Powered Applications", description: "Developing bespoke AI applications tailored to your specific business needs, from automation to advanced analytics." },
              { icon: BarChartBig, title: "Data Science & ML", description: "Leveraging machine learning and data science to uncover insights, predict trends, and optimize performance." },
              { icon: Briefcase, title: "AI Consulting & Strategy", description: "Guiding businesses on their AI journey, from strategy formulation to implementation and beyond." }
            ].map((feature, index) => (
              <div key={index} className="bg-neutral-50 dark:bg-neutral-900/50 text-neutral-800 dark:text-neutral-200 p-6 md:p-8 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-lg hover:shadow-xl hover:border-neutral-400 dark:hover:border-neutral-600 transform hover:-translate-y-1 transition-all duration-300 ease-in-out flex flex-col items-center text-center group">
                <feature.icon className="w-12 h-12 text-neutral-700 dark:text-neutral-300 mb-6 transition-colors group-hover:text-neutral-900 dark:group-hover:text-neutral-100" />
                <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-neutral-100">{feature.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Apps Preview Section */}
      <section id="our-apps" className="py-16 md:py-24 bg-gradient-to-b from-neutral-100 to-neutral-50 dark:from-neutral-900 dark:to-neutral-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
              Discover Our Innovations
            </h2>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
              A glimpse into the powerful and intuitive applications built by AI Labs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { slug: "insight-engine-pro", name: "InsightEngine Pro", tagline: "Unlock actionable insights from your data with AI.", imgSrc: "/apps/placeholder-insightengine.jpg" },
              { slug: "connect-sphere-ai", name: "ConnectSphere AI", tagline: "AI-powered communication and collaboration hub.", imgSrc: "/apps/placeholder-connectsphere.jpg" },
              { slug: "artisan-ai-studio", name: "ArtisanAI Studio", tagline: "Create stunning visuals with AI-driven design tools.", imgSrc: "/apps/placeholder-artisanai.jpg" }
            ].map((app, index) => (
            <div key={index} className="bg-white dark:bg-neutral-800/60 text-neutral-900 dark:text-neutral-100 p-6 rounded-xl border border-neutral-200 dark:border-neutral-700/50 shadow-lg hover:shadow-xl hover:border-neutral-400 dark:hover:border-neutral-600 transform hover:-translate-y-1 transition-all duration-300 ease-in-out flex flex-col group">
              <div className="relative w-full h-48 mb-6 rounded-md overflow-hidden">
                <Image
                  src={app.imgSrc}
                  alt={app.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-neutral-100">{app.name}</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4 flex-grow">{app.tagline}</p>
              <Link href={`/apps/${app.slug}`} className="mt-auto self-start">
                <button className="inline-flex items-center justify-center text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 hover:underline group/link">
                  Learn More <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </button>
              </Link>
            </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/apps">
              <button className="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700 dark:focus-visible:ring-neutral-300 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-2 border-neutral-800 dark:border-neutral-200 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-800 hover:text-white dark:hover:bg-neutral-200 dark:hover:text-black h-12 px-8 group">
                View All Applications <ExternalLink className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-neutral-800 to-neutral-950 dark:from-neutral-900 dark:to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-white dark:text-neutral-100">
            Ready to Innovate with AI Labs?
          </h2>
          <p className="text-lg text-neutral-300 dark:text-neutral-400 mb-10 max-w-xl mx-auto">
            Let’s discuss how AI Labs can help your business leverage the power
            of artificial intelligence.
          </p>
          <Link href="/contact">
            <button className="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-12 px-8 
                               bg-gradient-to-r from-neutral-100 to-neutral-300 text-black hover:from-neutral-50 hover:to-neutral-200
                               dark:from-neutral-100 dark:to-neutral-300 dark:text-black dark:hover:from-neutral-50 dark:hover:to-neutral-200 group">
              Schedule a Consultation <Send className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
