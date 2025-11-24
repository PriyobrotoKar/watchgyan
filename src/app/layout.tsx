import type { Metadata } from "next";
import "./globals.css";
import { DMSans, PlayflairDisplay } from "@/lib/fonts";
import ReactQueryProvider from "@/providers/QueryClientProvider";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: {
    default: "WatchGyan - Your Ultimate Watch Destination",
    template: "%s | WatchGyan",
  },
  description:
    "WatchGyan by Pankaj Savant is your go-to destination for expert watch reviews, in-depth guides, and horology insights. Whether you're a collector or a beginner, WatchGyan helps you make informed choices and deepen your passion for timepieces.",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${DMSans.variable} ${PlayflairDisplay.variable} font-sans text-body lining-nums antialiased transition-colors duration-500`}
      >
        <Toaster richColors />
        <ReactQueryProvider>{children}</ReactQueryProvider>
        <Analytics />
      </body>
    </html>
  );
}
