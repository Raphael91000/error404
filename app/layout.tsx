import './globals.css';
import type { Metadata } from 'next';
import { BackToHomeButton } from '@/components/back-to-home-button';
import { LanguageProvider } from '@/components/language-provider';
import { LanguageToggle } from '@/components/language-toggle';

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
      <body className="font-sans antialiased bg-black text-white">
        <LanguageProvider>
          {children}
          <LanguageToggle />
          <BackToHomeButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
