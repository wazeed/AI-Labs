import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers | AI Labs',
  description: 'Join the team at AI Labs and help shape the future of AI.',
};

interface JobOpening {
  id: string;
  title: string;
  location: string;
  description: string;
  shortDescription: string;
}

export default function CareersPage() {
  const jobOpenings: JobOpening[] = [
    // Example:
    // {
    //   id: '1',
    //   title: 'Senior AI Engineer',
    //   location: 'Tech City, CA (Remote Possible)',
    //   description: 'Lead the development of our next-generation AI platforms. Strong experience in machine learning, NLP, and Python required.',
    //   shortDescription: 'Lead development of next-gen AI platforms.',
    // },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
          Careers at AI Labs
        </h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Join AI Labs and be part of a team that&apos;s building the future of artificial intelligence.
        </p>
      </header>

      <section id="why-join" className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Why Join AI Labs?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-muted p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-3 text-foreground">Innovate with Purpose</h3>
            <p className="text-muted-foreground">
              Work on cutting-edge AI projects that solve real-world problems and make a tangible impact.
            </p>
          </div>
          <div className="bg-muted p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-3 text-foreground">Collaborative Culture</h3>
            <p className="text-muted-foreground">
              Be part of a diverse and inclusive team that values collaboration, creativity, and continuous learning.
            </p>
          </div>
          <div className="bg-muted p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-3 text-foreground">Growth Opportunities</h3>
            <p className="text-muted-foreground">
              Grow your skills and career in the rapidly evolving field of artificial intelligence with AI Labs.
            </p>
          </div>
        </div>
      </section>

      <section id="open-positions" className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Current Openings</h2>
        {jobOpenings.length > 0 ? (
          <div className="space-y-8 max-w-3xl mx-auto">
            {jobOpenings.map((job: JobOpening) => ( // Explicitly type 'job'
              <div key={job.id} className="bg-muted p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-semibold text-primary mb-2">{job.title}</h3>
                <p className="text-muted-foreground mb-1"><span className="font-medium text-foreground">Location:</span> {job.location}</p>
                <p className="text-muted-foreground mb-4">{job.shortDescription}</p>
                <Link href={`/careers/${job.id}`} className="text-primary hover:underline font-medium">
                  View Details & Apply &rarr;
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10 bg-muted rounded-lg">
            <p className="text-xl text-muted-foreground mb-4">
              We don&apos;t have any open positions at the moment.
            </p>
            <p className="text-muted-foreground">
              However, we are always looking for talented individuals to join AI Labs.
              <br />
              Feel free to <Link href="/contact" className="text-primary hover:underline">send us your resume</Link> and tell us why you&apos;d be a great fit for AI Labs.
            </p>
          </div>
        )}
      </section>

      <section id="not-see-role" className="text-center py-12 bg-card border border-border rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Don&apos;t See Your Role?</h2>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          We are always looking for talented individuals to join AI Labs.
          Feel free to <Link href="/contact" className="text-primary hover:underline">send us your resume</Link> and tell us why you&apos;d be a great fit for AI Labs.
        </p>
      </section>
    </div>
  );
}
