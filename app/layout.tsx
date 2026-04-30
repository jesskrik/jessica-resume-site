import type { Metadata } from "next";
import { Besley, Poppins } from "next/font/google";
import { profile } from "@/lib/content";
import "./globals.css";

const besley = Besley({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  style: ["normal", "italic"],
  variable: "--font-besley",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.firstName} ${profile.lastName} — ${profile.title}`,
  description: profile.tagline,
  openGraph: {
    title: `${profile.firstName} ${profile.lastName} — ${profile.title}`,
    description: profile.tagline,
    url: profile.websiteUrl,
    siteName: `${profile.firstName} ${profile.lastName}`,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${besley.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
