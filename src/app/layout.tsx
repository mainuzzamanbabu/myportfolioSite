import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mainuzzaman | Full-Stack Software Engineer | 5+ Years | React & Django Expert",
  description: "Full-Stack Developer with 5+ years experience building production web applications. Specializing in React, Next.js, Django, E-Commerce, and Enterprise Solutions. 20+ production projects delivered.",
  keywords: ["Full-Stack Developer", "React", "Django", "Next.js", "Software Engineer", "E-Commerce", "Web Development", "Dhaka", "Bangladesh"],
  authors: [{ name: "Md. Mainuzzaman" }],
  openGraph: {
    type: "website",
    title: "Mainuzzaman | Full-Stack Software Engineer",
    description: "Building scalable web applications with Python, Django, React & AI",
    images: ["/mz.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mainuzzaman | Full-Stack Developer",
    description: "5+ Years | React • Django • Next.js • E-Commerce Solutions",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
