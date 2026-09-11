import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.kayasadhak.com';
  const lastModified = new Date();

  const routes: { path: string; priority: number; changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' }[] = [
    { path: '', priority: 1.0, changeFrequency: 'daily' },
    // Core Services Hub
    { path: '/services/yoga-at-home', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/services/personal-fitness-trainer', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/services/corporate-yoga', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/services/senior-citizen-yoga', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/services/kids-yoga', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/services/prenatal-postnatal-yoga', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/services/panchkarma', priority: 0.8, changeFrequency: 'weekly' },
    // Studio
    { path: '/studio-noida-sector-45', priority: 0.9, changeFrequency: 'weekly' },
    // Yoga Teacher Training Hub
    { path: '/yoga-teacher-training/200-hour-ttc', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/yoga-teacher-training/300-hour-ttc', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/yoga-teacher-training/500-hour-ttc', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/yoga-teacher-training/prenatal-ttc', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/yoga-teacher-training/locations/rishikesh', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/yoga-teacher-training/locations/dharamshala', priority: 0.8, changeFrequency: 'weekly' },
    // Therapeutic Conditions Hub
    { path: '/yoga-for-conditions/back-pain', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/yoga-for-conditions/pcod-pcos', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/yoga-for-conditions/thyroid', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/yoga-for-conditions/weight-loss', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/yoga-for-conditions/anxiety-insomnia', priority: 0.8, changeFrequency: 'weekly' },
    // Localities Hub
    { path: '/yoga-teacher-at-home/delhi/south-delhi', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/yoga-teacher-at-home/delhi/east-delhi', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/yoga-teacher-at-home/delhi/north-delhi', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/yoga-teacher-at-home/delhi/west-delhi', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/yoga-teacher-at-home/noida', priority: 0.8, changeFrequency: 'weekly' },
    // Core Brand Pages
    { path: '/pricing', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/book-a-free-class', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/about-us', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/contact-us', priority: 0.7, changeFrequency: 'monthly' },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
