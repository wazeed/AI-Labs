import Link from 'next/link';
import { Metadata } from 'next';
import { Users, Target, BookOpen, Zap, Lightbulb, Briefcase, Send } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | AI Labs',
  description: 'Learn more about AI Labs and our mission to power the future with AI.',
};

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-black text-neutral-900 dark:text-neutral-100">
      <div className="container mx-auto px-4 py-16 sm:py-20 md:py-24">
        {/* Header Section */}
        <header className="text-center mb-16 sm:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight pb-2 bg-clip-text text-transparent bg-gradient-to-r from-neutral-800 to-neutral-500 dark:from-neutral-200 dark:to-neutral-400">
            About AI Labs
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Innovating at the Forefront of Artificial Intelligence to Build a Brighter Future.
          </p>
        </header>

        {/* Our Mission Section */}
        <section id="mission" className="mb-16 sm:mb-20 text-center">
          <Target className="mx-auto h-12 w-12 sm:h-14 sm:w-14 text-neutral-700 dark:text-neutral-300 mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-neutral-900 dark:text-neutral-100">Our Mission</h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            At AI Labs, our mission is to harness the transformative power of artificial intelligence
            to create solutions that drive progress, enhance human capabilities, and solve complex global challenges.
            We are dedicated to ethical innovation and collaborative research, striving to make AI a force for universal good.
          </p>
        </section>

        {/* Our Story Section */}
        <section id="story" className="mb-16 sm:mb-20 bg-neutral-50 dark:bg-neutral-900/50 p-6 sm:p-10 md:p-12 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-800">
          <BookOpen className="mx-auto h-12 w-12 sm:h-14 sm:w-14 text-neutral-700 dark:text-neutral-300 mb-8" />
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-10 text-neutral-900 dark:text-neutral-100">Our Story</h2>
          <div className="prose prose-base sm:prose-lg dark:prose-invert max-w-4xl mx-auto text-neutral-700 dark:text-neutral-300">
            <p>
              Founded by a passionate group of AI researchers and engineers, AI Labs was born from the vision that
              AI could be a pivotal force for good. We believe in the synergy of human intellect and machine intelligence,
              unlocking new possibilities previously confined to the realm of imagination.
            </p>
            <p>
              Our team at AI Labs is committed to pushing the boundaries of AI research and
              development, creating products and services that are not only technologically advanced but also accessible and beneficial to society.
              From developing cutting-edge machine learning models to building intuitive AI-powered applications,
              our journey is one of continuous learning, innovation, and an unwavering commitment to excellence and ethical practices.
            </p>
          </div>
        </section>

        {/* Our Core Values Section */}
        <section id="values" className="mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-14 text-neutral-900 dark:text-neutral-100">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Lightbulb,
                title: 'Innovation',
                description: 'We foster a culture of curiosity and continuous learning, constantly exploring new frontiers in AI to deliver groundbreaking solutions.',
              },
              {
                icon: Users,
                title: 'Integrity',
                description: 'We operate with transparency and uphold the highest ethical standards in all our AI development and deployments.',
              },
              {
                icon: Zap,
                title: 'Impact',
                description: 'We are driven to create AI solutions that deliver tangible value, positive societal change, and empower individuals and organizations.',
              },
            ].map((value) => (
              <div key={value.title} className="bg-neutral-100 dark:bg-neutral-800/60 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl border border-neutral-200 dark:border-neutral-700/50 transform hover:-translate-y-1 transition-all duration-300 ease-in-out group">
                <value.icon className="h-10 w-10 text-neutral-600 dark:text-neutral-400 mb-4 transition-colors group-hover:text-neutral-800 dark:group-hover:text-neutral-200" />
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-neutral-800 dark:text-neutral-100">{value.title}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Meet Our Team Section (Placeholder) */}
        <section id="team" className="mb-16 sm:mb-20 text-center">
          <Users className="mx-auto h-12 w-12 sm:h-14 sm:w-14 text-neutral-700 dark:text-neutral-300 mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-neutral-900 dark:text-neutral-100">Meet Our Team</h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 mb-10 max-w-3xl mx-auto">
            Our team is composed of leading experts in AI research, machine learning, software development, and ethical AI practices.
            We are united by a common goal: to advance the field of artificial intelligence while ensuring its benefits are
            widely and equitably shared across the globe.
          </p>
          {/* Placeholder for team member cards - design to be black/white themed if implemented */}
          <div className="text-neutral-500 dark:text-neutral-500 italic">(Team member profiles coming soon)</div>
        </section>

        {/* Call to Action Section */}
        <section id="join-us" className="text-center py-12 sm:py-16 bg-gradient-to-r from-neutral-800 to-neutral-950 dark:from-neutral-900 dark:to-black text-white rounded-xl shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-neutral-100">Ready to Shape the Future with AI?</h2>
          <p className="text-lg sm:text-xl mb-8 sm:mb-10 max-w-3xl mx-auto text-neutral-300 dark:text-neutral-400">
            Whether you're looking to leverage AI for your business, collaborate on research, or join our team of innovators at AI Labs, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 focus-visible:ring-offset-2 ring-offset-black disabled:pointer-events-none disabled:opacity-50 h-11 px-8 w-full sm:w-auto
                         bg-gradient-to-r from-neutral-100 to-neutral-300 text-black hover:from-neutral-50 hover:to-neutral-200 group"
            >
              Contact Us <Send className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/careers"
              className="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 focus-visible:ring-offset-2 ring-offset-black disabled:pointer-events-none disabled:opacity-50 border-2 border-neutral-200 text-neutral-200 hover:bg-neutral-200 hover:text-black h-11 px-8 w-full sm:w-auto group"
            >
              View Careers <Briefcase className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
