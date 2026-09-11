import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MobileBottomDock } from '@/components/MobileBottomDock';

export const metadata: Metadata = {
  title: 'Personal Home Yoga, YTT & Fitness in Delhi NCR | KayaSadhak',
  description:
    'Book certified 1-on-1 yoga teachers & fitness trainers at home in Delhi NCR & Chandigarh Tricity. Certified YTT courses & home Panchkarma. Free trial session.',
  metadataBase: new URL('https://www.kayasadhak.com'),
  alternates: {
    canonical: 'https://www.kayasadhak.com',
  },
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'Home Yoga, YTT & Personal Fitness in Delhi NCR & Chandigarh Tricity | KayaSadhak',
    description:
      'Personal home yoga teachers, fitness trainers, certified YTT courses, and authentic home Panchkarma in Delhi NCR & Chandigarh Tricity. Founded by Nivil Chaudhary.',
    url: 'https://www.kayasadhak.com',
    siteName: 'KayaSadhak',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/hero_home_yoga_ncr.webp',
        width: 1200,
        height: 630,
        alt: 'KayaSadhak Home Yoga, YTT & Personal Fitness',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Yoga, YTT & Personal Fitness in Delhi NCR & Chandigarh Tricity | KayaSadhak',
    description:
      'Personal home yoga teachers, fitness trainers, certified YTT courses, and authentic home Panchkarma in Delhi NCR & Chandigarh Tricity. Founded by Nivil Chaudhary.',
    site: '@kayasadhak',
    creator: '@kayasadhak',
    images: ['/images/hero_home_yoga_ncr.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.kayasadhak.com/#organization',
    name: 'KayaSadhak',
    description:
      'Personal home yoga instruction, personal fitness training, certified YTT courses, and authentic Ayurvedic Panchakarma across Delhi NCR & Chandigarh Tricity.',
    url: 'https://www.kayasadhak.com',
    logo: 'https://www.kayasadhak.com/images/logo.png',
    founder: {
      '@type': 'Person',
      name: 'Nivil Chaudhary',
      jobTitle: 'Founder & Lead Yoga Instructor',
      description: 'Fully qualified yoga instructor with 12+ years of clinical and home yoga teaching experience.',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-8273264561',
        contactType: 'customer service',
        email: 'contact@kayasadhak.com',
        availableLanguage: ['English', 'Hindi'],
      },
    ],
    sameAs: [
      'https://instagram.com/kayasadhak',
      'https://facebook.com/kayasadhak',
      'https://twitter.com/kayasadhak',
      'https://youtube.com/@kayasadhak',
    ],
    areaServed: [
      { '@type': 'City', name: 'Delhi' },
      { '@type': 'City', name: 'Noida' },
      { '@type': 'City', name: 'Greater Noida' },
      { '@type': 'City', name: 'Ghaziabad' },
      { '@type': 'City', name: 'Faridabad' },
      { '@type': 'City', name: 'Gurugram' },
      { '@type': 'City', name: 'Chandigarh' },
      { '@type': 'City', name: 'Mohali' },
      { '@type': 'City', name: 'Panchkula' },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F3EEE2] text-[#26241F] antialiased">
        <Navbar />
        <main className="flex-grow pb-20 md:pb-0">{children}</main>
        <Footer />
        <MobileBottomDock />
      </body>
    </html>
  );
}
