import type { Metadata, Viewport } from "next";
import { Archivo_Black, Space_Mono } from "next/font/google";
import "./globals.css";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#C6F24E",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Rajhi Ismail | AI & Software Engineer",
  description:
    "Master's student in Computer Science at Henan University of Technology. I build intelligent, full-stack and mobile applications, with a growing focus on deep learning.",
  keywords: [
    "Rajhi Ismail",
    "AI Engineer",
    "Deep Learning",
    "Full-Stack Developer",
    "Next.js",
    "Angular",
    "Flutter",
    "Machine Learning",
    "Portfolio",
  ],
  authors: [{ name: "Rajhi Ismail", url: "https://ismailraj.netlify.app" }],
  creator: "Rajhi Ismail",
  metadataBase: new URL("https://ismailraj.netlify.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ismailraj.netlify.app",
    title: "Rajhi Ismail | AI & Software Engineer",
    description:
      "Master's student in Computer Science at Henan University of Technology. Building intelligent full-stack and mobile applications.",
    siteName: "Rajhi Ismail Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rajhi Ismail - AI & Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajhi Ismail | AI & Software Engineer",
    description:
      "Master's student in Computer Science at Henan University of Technology. Building intelligent full-stack and mobile applications.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rajhi Ismail",
  jobTitle: "AI & Software Engineer",
  url: "https://ismailraj.netlify.app",
  email: "mailto:ismailrajhi07@gmail.com",
  telephone: "+216 26922955",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Zhengzhou",
    addressCountry: "China",
  },
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "Henan University of Technology",
    },
    {
      "@type": "EducationalOrganization",
      name: "Faculty of Science of Monastir (FSM)",
    },
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Deep Learning",
    "Software Engineering",
    "Full-Stack Web Development",
    "Mobile Development",
    "Next.js",
    "Angular",
    "Flutter",
    "Python",
    "TypeScript",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${archivoBlack.variable} ${spaceMono.variable} antialiased selection:bg-yellow selection:text-ink`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-cream text-ink font-mono flex flex-col items-center">
        {children}
      </body>
    </html>
  );
}
