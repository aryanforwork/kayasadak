import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Book a Free Trial Yoga Class at Home | KayaSadhak',
  description:
    'Schedule your free 1-on-1 home yoga trial session in Delhi NCR & Chandigarh Tricity. Certified female & male instructors, personalized assessment.',
  alternates: {
    canonical: 'https://www.kayasadhak.com/book-a-free-class',
  },
  openGraph: {
    title: 'Book a Free Trial Yoga Class at Home | KayaSadhak',
    description:
      'Schedule your free 1-on-1 home yoga trial session in Delhi NCR & Chandigarh Tricity. Certified female & male instructors, personalized assessment.',
    url: 'https://www.kayasadhak.com/book-a-free-class',
    siteName: 'KayaSadhak',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book a Free Trial Yoga Class at Home | KayaSadhak',
    description:
      'Schedule your free 1-on-1 home yoga trial session in Delhi NCR & Chandigarh Tricity. Certified female & male instructors, personalized assessment.',
  },
};

export default function BookFreeClassLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const reserveSchema = {
    '@context': 'https://schema.org',
    '@type': 'ReserveAction',
    name: 'Book a Free Trial Yoga Class',
    target: 'https://www.kayasadhak.com/book-a-free-class',
    result: {
      '@type': 'Reservation',
      name: 'Free 1-on-1 Home Yoga Assessment Session',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.kayasadhak.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Book Free Trial Class',
        item: 'https://www.kayasadhak.com/book-a-free-class',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reserveSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
