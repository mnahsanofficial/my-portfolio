import { Inter, Playfair_Display } from 'next/font/google';
import { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
});

export const data = {
  title: 'Nazmul Ahsan | Full Stack Engineer - Angular, React, Python-Django',
  description: 'Full Stack Software Engineer with 5+ years experience in Angular, React, Next.js, and Python-Django. Open to remote roles in Software Engineering, Frontend, and QA.',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className={`${inter.variable} ${playfair.variable} antialiased`}>
      {children}
    </div>
  );
}
