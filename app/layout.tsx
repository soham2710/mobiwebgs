import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/theme-provider';

// Use Inter font with tech-focused subset
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'MobiWebGS - App Development, Blockchain, AI/ML Solutions',
  description: 'Leading provider of app development, blockchain, cryptocurrency, and AI/ML solutions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.className}>
      <body className="bg-gradient-dark min-h-screen tech-grid">
        <ThemeProvider 
          attribute="class" 
          defaultTheme="dark" 
          enableSystem
        >
          <div className="relative z-10">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
          
          {/* Technology grid overlay for subtle tech feel */}
          <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute inset-0 bg-gradient-dark"></div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}