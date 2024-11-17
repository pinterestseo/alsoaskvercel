import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { cn } from '@/lib/utils';
import { generateWebsiteStructuredData } from '@/lib/seo';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://peoplealsoask.netlify.app'),
  title: {
    default: 'People Also Ask - Your Questions Answered',
    template: '%s | People Also Ask'
  },
  description: 'Find comprehensive answers to your most pressing questions. Expert insights and detailed explanations on various topics.',
  keywords: ['questions', 'answers', 'knowledge', 'expert insights', 'explanations'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://peoplealsoask.netlify.app',
    title: 'People Also Ask - Your Questions Answered',
    description: 'Find comprehensive answers to your most pressing questions. Expert insights and detailed explanations on various topics.',
    siteName: 'People Also Ask'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'People Also Ask - Your Questions Answered',
    description: 'Find comprehensive answers to your most pressing questions. Expert insights and detailed explanations on various topics.'
  },
  verification: {
    google: 'd23by8QOGnw_inlpGsIXqIwZsrUANYSt3523AiLHN7w',
    other: {
      'msvalidate.01': 'FED4E424C265702D43135DD8C7338545'
    }
  },
  alternates: {
    canonical: 'https://peoplealsoask.netlify.app'
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
    }
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const websiteStructuredData = generateWebsiteStructuredData();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData)
          }}
        />
      </head>
      <body className={cn(inter.className, "min-h-screen bg-background antialiased flex flex-col")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navigation />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}