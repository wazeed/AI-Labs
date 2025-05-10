import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | AI Labs',
  description: 'Learn more about AI Labs and our mission to power the future with AI.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
          About AI Labs
        </h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Innovating at the Forefront of Artificial Intelligence
        </p>
      </header>

      <section id="mission" className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center">
          At AI Labs, our mission is to harness the transformative power of artificial intelligence
          to create solutions that drive progress, enhance human capabilities, and solve complex global challenges.
          We are dedicated to ethical innovation and collaborative research.
        </p>
      </section>

      <section id="story" className="mb-16 bg-muted p-8 md:p-12 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
          Founded by a passionate group of AI researchers and engineers, AI Labs was born from the vision that
          AI could be a pivotal force for good. We believe in the synergy of human intellect and machine intelligence,
          unlocking new possibilities. Our team at AI Labs is committed to pushing the boundaries of AI research and
          development, creating products and services that are not only technologically advanced but also accessible and beneficial to society.
        </p>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          From developing cutting-edge machine learning models to building intuitive AI-powered applications,
          our journey is one of continuous learning, innovation, and a commitment to excellence.
        </p>
      </section>

      <section id="values" className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-foreground">Innovation</h3>
            <p className="text-muted-foreground">
              We foster a culture of curiosity and continuous learning, constantly exploring new frontiers in AI.
            </p>
          </div>
          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-foreground">Integrity</h3>
            <p className="text-muted-foreground">
              We operate with transparency and ethical responsibility in all our AI development and deployments.
            </p>
          </div>
          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-foreground">Impact</h3>
            <p className="text-muted-foreground">
              We are driven to create AI solutions that deliver tangible value and positive change in the world.
            </p>
          </div>
        </div>
      </section>

      <section id="team" className="mb-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Our team is composed of experts in AI research, machine learning, software development, and ethical AI practices.
          We are united by a common goal: to advance the field of artificial intelligence while ensuring its benefits are
          widely and equitably shared.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team member cards would go here */}
        </div>
      </section>

      <section id="join-us" className="text-center py-12 bg-primary text-primary-foreground rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Work With Us</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Interested in leveraging AI for your business or joining our team of innovators at AI Labs?
        </p>
        <div className="space-x-4">
          <Link href="/contact" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow hover:bg-primary/90">
            Contact Us
          </Link>
          <Link href="/careers" className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-base font-medium shadow-sm hover:bg-accent hover:text-accent-foreground">
            View Careers
          </Link>
        </div>
      </section>
    </div>
  );
}
