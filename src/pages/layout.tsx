import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const data = {
  title: 'Nazmul Ahsan | Full Stack Engineer - Angular, React, Python-Django',
  description: 'Full Stack Software Engineer with 5+ years experience in Angular, React, Next.js, and Python-Django. Open to remote roles in Software Engineering, Frontend, and QA.',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}