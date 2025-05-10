'use client';

import { useState, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  status: 'idle' | 'submitting' | 'success' | 'error';
  message: string | null; // Correctly typed
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<FormStatus>({
    status: 'idle',
    message: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus({ status: 'submitting', message: null });

    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setFormStatus({ status: 'error', message: 'All fields are required.' });
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setFormStatus({ status: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    // Send data to the API
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setFormStatus({ status: 'success', message: result.message || 'Thank you! Your message has been sent successfully.' });
        setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
      } else {
        setFormStatus({ status: 'error', message: result.error || 'Something went wrong. Please try again later.' });
      }
    } catch (error) {
      setFormStatus({ status: 'error', message: 'Failed to connect to the server. Please check your connection and try again.' });
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
          Contact AI Labs
        </h1>
        <p className="mt-4 text-xl text-muted-foreground">
          We&apos;d love to hear from you! Whether you have a question about our services,
          <br />
          want to discuss a potential project, or just want to say hello.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        <section id="contact-details" className="bg-muted p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Our Information</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-foreground">Email Us</h3>
              <a href="mailto:info@ailabs.com" className="text-primary hover:underline">
                info@ailabs.com
              </a>
              <p className="text-sm text-muted-foreground">For general inquiries and support.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Visit Us</h3>
              <p className="text-muted-foreground">
                123 AI Avenue, Innovation City, CA 90210, USA
                <br />
                (Visits by appointment only)
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Call Us</h3>
              <p className="text-muted-foreground">
                +1 (555) 123-4567
                <br />
                (Mon-Fri, 9 AM - 5 PM PST)
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Follow Us</h3>
              <div className="flex space-x-3 mt-2">
                <a href="https://linkedin.com/company/ailabs" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">LinkedIn</a>
                <a href="https://twitter.com/ailabs" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Twitter</a>
                <a href="https://github.com/ailabs" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GitHub</a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact-form" className="bg-card p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Full Name</label>
              <input 
                type="text" 
                name="name" 
                id="name" 
                value={formData.name}
                onChange={handleChange}
                required 
                className="w-full px-3 py-2 border border-input rounded-md focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email Address</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                value={formData.email}
                onChange={handleChange}
                required 
                className="w-full px-3 py-2 border border-input rounded-md focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">Subject</label>
              <input 
                type="text" 
                name="subject" 
                id="subject" 
                value={formData.subject}
                onChange={handleChange}
                required 
                className="w-full px-3 py-2 border border-input rounded-md focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message</label>
              <textarea 
                name="message" 
                id="message" 
                rows={4} 
                value={formData.message}
                onChange={handleChange}
                required 
                className="w-full px-3 py-2 border border-input rounded-md focus:ring-primary focus:border-primary"
              ></textarea>
            </div>
            <div>
              <button 
                type="submit" 
                disabled={formStatus.status === 'submitting'}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-semibold disabled:opacity-50"
              >
                {formStatus.status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
            </div>
            {formStatus.message && (
              <div className={`mt-4 text-sm p-3 rounded-md ${formStatus.status === 'success' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200' : 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200'}`}>
                {formStatus.message}
              </div>
            )}
          </form>
        </section>
      </div>
    </div>
  );
}
