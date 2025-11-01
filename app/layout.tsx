import './globals.css';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { BackToHomeButton } from '@/components/back-to-home-button';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-plus-jakarta',
});

export const metadata: Metadata = {
  title: 'NeuroBots - Intelligence Artificielle & Robotique',
  description: 'Explorez l\'univers de l\'IA et de la robotique. Articles, projets et ressources pour les passionnés de tech.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${plusJakartaSans.variable} font-sans antialiased bg-black text-white`}>
        {children}
        <BackToHomeButton />
      </body>
    </html>
  );
}
