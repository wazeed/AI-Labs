export interface App {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  description: string; // Detailed description, can include HTML
  longDescription: string; // Can be more detailed, perhaps for a dedicated page section
  features?: string[]; // Key features
  useCases?: string[]; // Potential applications
  imageUrl?: string; // Path to a representative image
  iconUrl?: string; // Path to a smaller icon
  version?: string;
  lastUpdated?: string;
  developer?: string; // Could be "AI Labs" or a specific team/individual
  website?: string; // Link to a dedicated product page or more info
  category?: string; // e.g., 'Productivity', 'Analytics', 'Creative Tools'
  tags?: string[];
}

export const apps: App[] = [
  {
    id: '1',
    slug: 'insight-engine-pro',
    name: 'InsightEngine Pro',
    tagline: 'Unlock Data-Driven Decisions with AI',
    summary: 'Advanced AI analytics platform for deep business intelligence.',
    description: 'InsightEngine Pro by AI Labs leverages advanced machine learning to analyze complex datasets, providing deep insights and predictive analytics for businesses.',
    longDescription: 'InsightEngine Pro is a comprehensive analytics platform from AI Labs, designed to empower organizations to make data-driven decisions. It features natural language querying, automated report generation, and anomaly detection to help you understand trends, forecast outcomes, and optimize operations. Suitable for various industries including finance, marketing, and healthcare.',
    features: [
      'Advanced Machine Learning Models',
      'Natural Language Querying',
      'Predictive Analytics',
      'Automated Report Generation',
      'Anomaly Detection',
      'Scalable Cloud Architecture'
    ],
    useCases: [
      'Market Trend Analysis',
      'Financial Forecasting',
      'Customer Behavior Prediction',
      'Operational Efficiency Optimization'
    ],
    imageUrl: '/apps/placeholder-insightengine.jpg', // Replace with actual image
    iconUrl: '/icons/insight-engine-icon.svg', // Replace with actual icon
    version: '2.1.0',
    lastUpdated: 'April 20, 2025',
    developer: 'AI Labs',
    website: '/apps/insight-engine-pro', // Could link to a sub-page or external site
    category: 'Analytics',
    tags: ['ai', 'analytics', 'business intelligence', 'machine learning', 'data']
  },
  {
    id: '2',
    slug: 'connect-sphere-ai',
    name: 'ConnectSphere AI',
    tagline: 'Intelligent Collaboration for Modern Teams',
    summary: 'AI-powered communication and task management platform.',
    description: 'ConnectSphere AI, a product of AI Labs, redefines team collaboration with intelligent chat, automated meeting summaries, and smart task management.',
    longDescription: 'AI Labs presents ConnectSphere AI, a unified communications platform that uses artificial intelligence to streamline workflows and enhance productivity. Features include real-time translation, sentiment analysis in communications, and AI-assisted scheduling to ensure your team stays connected and efficient, no matter where they are.',
    features: [
      'Intelligent Chatbots',
      'Automated Meeting Summaries',
      'Smart Task Management',
      'Real-time Translation',
      'Sentiment Analysis',
      'AI-Assisted Scheduling'
    ],
    useCases: [
      'Remote Team Collaboration',
      'Project Management',
      'Customer Support Automation',
      'Cross-Departmental Communication'
    ],
    imageUrl: '/apps/placeholder-connectsphere.jpg', // Replace with actual image
    iconUrl: '/icons/connectsphere-icon.svg', // Replace with actual icon
    version: '1.5.2',
    lastUpdated: 'May 01, 2025',
    developer: 'AI Labs',
    website: '/apps/connect-sphere-ai',
    category: 'Productivity',
    tags: ['ai', 'collaboration', 'communication', 'productivity', 'teamwork']
  },
  {
    id: '3',
    slug: 'artisan-ai-studio',
    name: 'ArtisanAI Studio',
    tagline: 'Create with the Power of AI',
    summary: 'Suite of AI tools for creative content generation and editing.',
    description: 'ArtisanAI Studio from AI Labs empowers creators with a suite of AI tools for image generation, video editing, and graphic design.',
    longDescription: 'ArtisanAI Studio by AI Labs is a creative suite for the modern artist and designer. Generate unique images from text prompts, enhance video footage with AI-powered effects, and automate design tasks. Whether you\'re a professional designer or a hobbyist, ArtisanAI Studio provides the tools to bring your creative visions to life.',
    features: [
      'AI Image Generation (Text-to-Image)',
      'AI Video Enhancement & Editing',
      'Automated Graphic Design Elements',
      'Style Transfer',
      'Content-Aware Fill & Editing',
      'Music Generation (Basic)'
    ],
    useCases: [
      'Marketing Material Creation',
      'Social Media Content Generation',
      'Artistic Expression & Design',
      'Video Production Assistance'
    ],
    imageUrl: '/apps/placeholder-artisanai.jpg', // Replace with actual image
    iconUrl: '/icons/artisanai-icon.svg', // Replace with actual icon
    version: '1.0.0',
    lastUpdated: 'March 15, 2025',
    developer: 'AI Labs',
    website: '/apps/artisan-ai-studio',
    category: 'Creative Tools',
    tags: ['ai', 'creative', 'design', 'art', 'multimedia', 'generative ai']
  }
];

export const getAppBySlug = (slug: string): App | undefined => {
  return apps.find(app => app.slug === slug);
};
