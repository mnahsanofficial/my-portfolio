import '../styles/globals.css';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const data = {
  title: 'Nazmul Ahsan | Software Engineer',
  description: 'Portfolio of Nazmul Ahsan, Full Stack Developer',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 antialiased transition-colors duration-300`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}