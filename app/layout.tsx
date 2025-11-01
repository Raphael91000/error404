import './globals.css';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { BackToHomeButton } from '@/components/back-to-home-button';
import { LanguageProvider } from '@/components/language-provider';
import { LanguageToggle } from '@/components/language-toggle';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-plus-jakarta',
});

export const metadata: Metadata = {
  title: 'NeuroBots - Artificial Intelligence & Robotics',
  description: 'Explore the world of AI and robotics. Articles, projects, and resources for future-ready teams.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} font-sans antialiased bg-black text-white`}>
        <LanguageProvider>
          {children}
          <LanguageToggle />
          <BackToHomeButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
