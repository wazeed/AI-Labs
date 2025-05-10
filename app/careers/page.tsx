import Link from 'next/link';
import { Metadata } from 'next';
import { Briefcase, Lightbulb, Users, TrendingUp, SearchX, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Careers | AI Labs',
  description: 'Join the team at AI Labs and help shape the future of AI.',
};

interface JobOpening {
  id: string;
  title: string;
  location: string;
  description: string; // Full description for the individual job page
  shortDescription: string; // Short summary for the careers list page
  department: string;
  employmentType: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
}

export default function CareersPage() {
  // Sample Job Openings - replace with actual data or fetch from an API
  const jobOpenings: JobOpening[] = [
    {
      id: 'senior-ai-researcher',
      title: 'Senior AI Researcher',
      location: 'Innovation City, CA (Remote Possible)',
      shortDescription: 'Lead cutting-edge research in deep learning and NLP to drive breakthrough AI solutions.',
      department: 'Research & Development',
      employmentType: 'Full-time',
      description: 'Full job description for Senior AI Researcher...',
    },
    {
      id: 'ml-engineer-nlp',
      title: 'Machine Learning Engineer - NLP',
      location: 'Tech Hub, USA (Hybrid)',
      shortDescription: 'Develop and deploy NLP models for our next-generation AI-powered applications.',
      department: 'Engineering',
      employmentType: 'Full-time',
      description: 'Full job description for Machine Learning Engineer - NLP...',
    },
    {
      id: 'ai-product-manager',
      title: 'AI Product Manager',
      location: 'Global (Remote)',
      shortDescription: 'Define and guide the product strategy for our innovative AI platforms and tools.',
      department: 'Product Management',
      employmentType: 'Full-time',
      description: 'Full job description for AI Product Manager...',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-neutral-900 dark:text-neutral-100">
      <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
        <header className="text-center mb-16 sm:mb-20">
          <Briefcase className="mx-auto h-16 w-16 text-neutral-500 dark:text-neutral-400 mb-6" />
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-neutral-600 via-black to-neutral-800 dark:from-neutral-400 dark:via-white dark:to-neutral-200 pb-2">
            Careers at AI Labs
          </h1>
          <p className="mt-6 text-xl sm:text-2xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Join AI Labs and be part of a team that&apos;s building the future of artificial intelligence.
          </p>
        </header>

        <section id="why-join" className="mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12 text-neutral-900 dark:text-neutral-100">
            Why Join AI Labs?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-neutral-50 dark:bg-neutral-800/30 backdrop-blur-md border border-neutral-200/80 dark:border-neutral-700/60 p-6 rounded-xl text-center shadow-lg dark:shadow-neutral-800/50 flex flex-col items-center">
              <Lightbulb className="h-12 w-12 text-neutral-500 dark:text-neutral-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-neutral-100">Innovate with Purpose</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                Work on cutting-edge AI projects that solve real-world problems and make a tangible impact.
              </p>
            </div>
            <div className="bg-neutral-50 dark:bg-neutral-800/30 backdrop-blur-md border border-neutral-200/80 dark:border-neutral-700/60 p-6 rounded-xl text-center shadow-lg dark:shadow-neutral-800/50 flex flex-col items-center">
              <Users className="h-12 w-12 text-neutral-500 dark:text-neutral-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-neutral-100">Collaborative Culture</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                Be part of a diverse and inclusive team that values collaboration, creativity, and continuous learning.
              </p>
            </div>
            <div className="bg-neutral-50 dark:bg-neutral-800/30 backdrop-blur-md border border-neutral-200/80 dark:border-neutral-700/60 p-6 rounded-xl text-center shadow-lg dark:shadow-neutral-800/50 flex flex-col items-center">
              <TrendingUp className="h-12 w-12 text-neutral-500 dark:text-neutral-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-neutral-100">Growth Opportunities</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                Grow your skills and career in the rapidly evolving field of artificial intelligence with AI Labs.
              </p>
            </div>
          </div>
        </section>

        <section id="open-positions" className="mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12 text-neutral-900 dark:text-neutral-100">Current Openings</h2>
          {jobOpenings.length > 0 ? (
            <div className="space-y-8 max-w-3xl mx-auto">
              {jobOpenings.map((job) => (
                <div key={job.id} className="bg-neutral-50 dark:bg-neutral-800/30 backdrop-blur-md border border-neutral-200/80 dark:border-neutral-700/60 p-6 rounded-xl shadow-lg hover:shadow-xl dark:shadow-neutral-800/50 transition-shadow duration-300 group">
                  <h3 className="text-2xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-neutral-700 to-black dark:from-neutral-300 dark:to-white group-hover:from-neutral-600 group-hover:to-neutral-900 dark:group-hover:from-neutral-200 dark:group-hover:to-neutral-100 transition-all">{job.title}</h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">
                    <span className="font-medium text-neutral-700 dark:text-neutral-300">Location:</span> {job.location}
                  </p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">
                    <span className="font-medium text-neutral-700 dark:text-neutral-300">Department:</span> {job.department} | <span className="font-medium text-neutral-700 dark:text-neutral-300">Type:</span> {job.employmentType}
                  </p>
                  <p className="text-neutral-600 dark:text-neutral-300 my-3 text-sm">{job.shortDescription}</p>
                  <Link 
                    href={`/careers/${job.id}`} // Assuming a dynamic route like /careers/[jobId]
                    className="inline-flex items-center text-sm font-semibold text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors duration-300 group/link">
                    View Details & Apply <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-10 sm:py-12 bg-neutral-50 dark:bg-neutral-800/30 backdrop-blur-md border border-neutral-200/80 dark:border-neutral-700/60 rounded-xl shadow-lg max-w-2xl mx-auto">
              <SearchX className="mx-auto h-16 w-16 text-neutral-400 dark:text-neutral-500 mb-6" />
              <p className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-3">
                No Open Positions Currently
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6 text-sm">
                We are always looking for talented individuals. Feel free to send us your resume.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium shadow-sm transition-colors duration-300 bg-gradient-to-r from-neutral-800 to-neutral-600 hover:from-neutral-700 hover:to-neutral-500 text-white dark:from-neutral-200 dark:to-neutral-400 dark:text-black dark:hover:from-neutral-300 dark:hover:to-neutral-500 group"
              >
                Contact Us <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          )}
        </section>

        <section id="not-see-role" className="text-center py-12 sm:py-16 bg-neutral-100 dark:bg-neutral-800/50 backdrop-blur-sm border border-neutral-200/80 dark:border-neutral-700/60 rounded-xl shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">Don&apos;t See Your Role?</h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6 max-w-xl mx-auto text-sm sm:text-base">
            We are always on the lookout for passionate and talented individuals. If you believe your skills can contribute to AI Labs, we&apos;d love to hear from you.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium shadow-md transition-colors duration-300 bg-gradient-to-r from-neutral-900 to-neutral-700 hover:from-neutral-800 hover:to-neutral-600 text-white dark:from-neutral-100 dark:to-neutral-300 dark:text-black dark:hover:from-neutral-200 dark:hover:to-neutral-400 group"
          >
            Send Us Your Resume <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </section>
      </div>
    </div>
  );
}
