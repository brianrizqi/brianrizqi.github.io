import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const SITE = "https://brianrizqi.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Brian Rizqi P.D. — Software Engineer",
    template: "%s · Brian Rizqi P.D.",
  },
  description:
    "Dr. Brian Rizqi Paradisiaca Darnoto — Software Engineer, Lecturer & Project Manager. 5+ tahun membangun aplikasi web, mobile, dan sistem enterprise.",
  keywords: [
    "Brian Rizqi",
    "Software Engineer",
    "Fullstack Developer",
    "Project Manager",
    "Dosen",
    "Jember",
    "Surabaya",
  ],
  authors: [{ name: "Brian Rizqi Paradisiaca Darnoto" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE,
    siteName: "Brian Rizqi P.D.",
    title: "Brian Rizqi P.D. — Software Engineer",
    description:
      "Software Engineer, Lecturer & Project Manager. Membangun produk digital yang scalable, cepat, dan berdampak nyata.",
    images: [{ url: "/images/brian.jpeg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brian Rizqi P.D. — Software Engineer",
    description:
      "Software Engineer, Lecturer & Project Manager. Membangun produk digital yang scalable dan berdampak.",
    images: ["/images/brian.jpeg"],
  },
  icons: { icon: "/images/logo.png" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f7ff" },
    { media: "(prefers-color-scheme: dark)", color: "#050810" },
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
    <html lang="id" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${sans.variable} ${display.variable}`}>{children}</body>
    </html>
  );
}
