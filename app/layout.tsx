import type { Metadata, Viewport } from "next";
import { Inter, Archivo } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

// Tight grotesk for the oversized editorial headlines.
const display = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const TITLE = "Brian Rizqi P.D. — Software Engineer & Lecturer";
const DESCRIPTION =
  "Dr. Brian Rizqi Paradisiaca Darnoto — Software Engineer, Lecturer, and Project Manager with 9+ years building web, mobile, and enterprise systems in Indonesia.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: TITLE,
    template: "%s · Brian Rizqi P.D.",
  },
  description: DESCRIPTION,
  applicationName: "Brian Rizqi P.D.",
  keywords: [
    "Brian Rizqi",
    "Brian Rizqi Paradisiaca Darnoto",
    "Software Engineer Indonesia",
    "Fullstack Developer Jember",
    "Project Manager",
    "Lecturer",
    "Web Developer Surabaya",
    "Laravel Developer",
    "Next.js Developer",
  ],
  authors: [{ name: "Brian Rizqi Paradisiaca Darnoto", url: SITE }],
  creator: "Brian Rizqi Paradisiaca Darnoto",
  publisher: "Brian Rizqi Paradisiaca Darnoto",
  alternates: { canonical: "/" },
  category: "technology",
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: SITE,
    siteName: "Brian Rizqi P.D.",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Brian Rizqi P.D. — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5f3" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

// Applies the stored theme before first paint so there is no light/dark flash.
const themeScript = `
(function(){
  try {
    var t = localStorage.getItem('br-theme');
    if (!t) t = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', t);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${sans.variable} ${display.variable}`}>{children}</body>
    </html>
  );
}
