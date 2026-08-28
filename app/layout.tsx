import type { Metadata } from 'next';
import './globals.css';
import { TopUtilityBar } from '@/components/TopUtilityBar';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Home Yoga, YTT & Panchkarma in Delhi NCR | KayaSadhak',
  description:
    'Personal home yoga teachers in Delhi NCR, certified 200/300/500-Hr YTT courses, and authentic home Panchkarma therapies. Founded by Nivil Chaudhary. Book today.',
  metadataBase: new URL('https://www.kayasadhak.com'),
  alternates: {
    canonical: 'https://www.kayasadhak.com',
  },
  openGraph: {
    title: 'Home Yoga, YTT & Panchkarma in Delhi NCR | KayaSadhak',
    description:
      'Personal home yoga teachers in Delhi NCR, certified 200/300/500-Hr YTT courses, and authentic home Panchkarma therapies. Founded by Nivil Chaudhary.',
    url: 'https://www.kayasadhak.com',
    siteName: 'KayaSadhak',
    locale: 'en_IN',
    type: 'website',
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
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          rel="preload"
          as="image"
          type="image/webp"
          href="/images/hero_home_yoga_ncr.webp"
        />
        <link
          rel="dns-prefetch"
          href="https://cdnjs.cloudflare.com"
        />
        <link
          rel="preconnect"
          href="https://cdnjs.cloudflare.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F3EEE2] text-[#26241F] antialiased">
        <TopUtilityBar />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
