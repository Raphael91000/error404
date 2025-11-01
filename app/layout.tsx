import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
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
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  );
}
