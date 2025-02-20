import type { Metadata } from 'next';
import './globals.css';
import { DMSans, PlayflairDisplay } from '@/lib/fonts';
import ReactQueryProvider from '@/providers/QueryClientProvider';
import { Toaster } from '@/components/ui/sonner';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${DMSans.variable} ${PlayflairDisplay.variable} font-sans text-body antialiased transition-colors duration-500`}
      >
        <ReactQueryProvider>{children}</ReactQueryProvider>
        <Toaster richColors />
      </body>
    </html>
  );
}
