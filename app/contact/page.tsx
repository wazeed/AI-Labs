'use client';

import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Github, Loader2, CheckCircle2, AlertTriangle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  status: 'idle' | 'submitting' | 'success' | 'error';
  message: string | null;
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

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setFormStatus({ status: 'error', message: 'All fields are required.' });
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setFormStatus({ status: 'error', message: 'Please enter a valid email address.' });
      return;
    }

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
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setFormStatus({ status: 'error', message: result.error || 'Something went wrong. Please try again later.' });
      }
    } catch (error) {
      setFormStatus({ status: 'error', message: 'Failed to connect to the server. Please check your connection and try again.' });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-neutral-900 dark:text-neutral-100">
      <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
        <header className="text-center mb-16 sm:mb-20">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-neutral-600 via-black to-neutral-800 dark:from-neutral-400 dark:via-white dark:to-neutral-200 pb-2">
            Get in Touch
          </h1>
          <p className="mt-6 text-xl sm:text-2xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            We&apos;re here to help and answer any question you might have. We look forward to hearing from you!
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-start">
          <section id="contact-details" className="bg-neutral-50 dark:bg-neutral-800/30 backdrop-blur-md border border-neutral-200/80 dark:border-neutral-700/60 p-8 sm:p-10 rounded-xl shadow-lg dark:shadow-neutral-800/50">
            <h2 className="text-3xl font-bold mb-8 text-neutral-900 dark:text-neutral-100">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="h-8 w-8 text-neutral-500 dark:text-neutral-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200">Email Us</h3>
                  <a href="mailto:info@ailabs.com" className="text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors duration-300 text-lg">
                    info@ailabs.com
                  </a>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">For general inquiries and support.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="h-8 w-8 text-neutral-500 dark:text-neutral-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200">Call Us</h3>
                  <p className="text-neutral-700 dark:text-neutral-300 text-lg">+1 (555) 123-4567</p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">Mon-Fri, 9 AM - 5 PM PST</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="h-8 w-8 text-neutral-500 dark:text-neutral-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200">Visit Us</h3>
                  <p className="text-neutral-700 dark:text-neutral-300 text-lg">
                    123 AI Avenue, Innovation City, CA 90210, USA
                  </p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">(Visits by appointment only)</p>
                </div>
              </div>
            </div>
            <div className="mt-10 pt-8 border-t border-neutral-200 dark:border-neutral-700">
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://linkedin.com/company/ailabs" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors duration-300">
                  <Linkedin className="h-7 w-7" />
                </a>
                <a href="https://twitter.com/ailabs" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors duration-300">
                  <Twitter className="h-7 w-7" />
                </a>
                <a href="https://github.com/ailabs" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors duration-300">
                  <Github className="h-7 w-7" />
                </a>
              </div>
            </div>
          </section>

          <section id="contact-form" className="bg-neutral-50 dark:bg-neutral-800/30 backdrop-blur-md border border-neutral-200/80 dark:border-neutral-700/60 p-8 sm:p-10 rounded-xl shadow-lg dark:shadow-neutral-800/50">
            <h2 className="text-3xl font-bold mb-8 text-neutral-900 dark:text-neutral-100">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">Full Name</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  className="w-full px-4 py-2.5 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700/50 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-neutral-500 dark:focus:ring-neutral-400 focus:border-neutral-500 dark:focus:border-neutral-400 outline-none transition-colors duration-300 placeholder-neutral-400 dark:placeholder-neutral-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  className="w-full px-4 py-2.5 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700/50 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-neutral-500 dark:focus:ring-neutral-400 focus:border-neutral-500 dark:focus:border-neutral-400 outline-none transition-colors duration-300 placeholder-neutral-400 dark:placeholder-neutral-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700/50 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-neutral-500 dark:focus:ring-neutral-400 focus:border-neutral-500 dark:focus:border-neutral-400 outline-none transition-colors duration-300 placeholder-neutral-400 dark:placeholder-neutral-500"
                  placeholder="Regarding..."
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700/50 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-neutral-500 dark:focus:ring-neutral-400 focus:border-neutral-500 dark:focus:border-neutral-400 outline-none transition-colors duration-300 placeholder-neutral-400 dark:placeholder-neutral-500"
                  placeholder="Your message..."
                />
              </div>
              <div>
                <button 
                  type="submit" 
                  disabled={formStatus.status === 'submitting'}
                  className="w-full inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-semibold shadow-md transition-colors duration-300 bg-gradient-to-r from-neutral-900 to-neutral-700 hover:from-neutral-800 hover:to-neutral-600 text-white dark:from-neutral-100 dark:to-neutral-300 dark:text-black dark:hover:from-neutral-200 dark:hover:to-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-500 dark:focus:ring-neutral-300 focus:ring-offset-2 dark:focus:ring-offset-black disabled:opacity-70 disabled:cursor-not-allowed group"
                >
                  {formStatus.status === 'submitting' ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Send Message <Send className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </div>
              {formStatus.message && (
                <div className={`mt-4 p-4 rounded-md text-sm ${formStatus.status === 'success' ? 'bg-green-500/10 dark:bg-green-500/20 border border-green-500/30 text-green-700 dark:text-green-300' : formStatus.status === 'error' ? 'bg-red-500/10 dark:bg-red-500/20 border border-red-500/30 text-red-700 dark:text-red-300' : 'bg-neutral-100 dark:bg-neutral-700/50 border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300'}`}>
                  <div className="flex items-center">
                    {formStatus.status === 'success' && <CheckCircle2 className="h-5 w-5 mr-2 text-green-500" />}
                    {formStatus.status === 'error' && <AlertTriangle className="h-5 w-5 mr-2 text-red-500" />}
                    {formStatus.message}
                  </div>
                </div>
              )}
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
