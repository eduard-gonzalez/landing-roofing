import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { SITE_CONFIG } from '@/utils/constants';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.name,
    template: '%s | ${SITE_CONFIG.name}',
  },
  description: SITE_CONFIG.description,
  keywords: ['Roofing', 'Toronto', 'Luxury', 'Premium', 'Construction'],
  authors: [{ name: 'LuxTorontoRoof' }],
  creator: 'LuxTorontoRoof',
  metadataBase: new URL('https://luxtorontoroof.com'),
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

interface LayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
