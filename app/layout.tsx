import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "BicaraPintar - Enterprise AI Platform for Intelligent Conversations",
  description:
    "Transform customer experience with our agentic AI platform. Autonomous conversations across voice, chat, and visual channels. Enterprise-grade solutions for modern businesses.",
  keywords: [
    "AI Platform",
    "Conversational AI",
    "Agentic AI",
    "Enterprise AI",
    "Customer Experience",
    "WhatsApp Business API",
    "Voice AI",
    "Chatbot",
    "Indonesia AI",
    "Business Automation",
  ],
  authors: [{ name: "PT Bicara Pintar Indonesia" }],
  creator: "PT Bicara Pintar Indonesia",
  publisher: "PT Bicara Pintar Indonesia",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bicarapintar.ai",
    title:
      "BicaraPintar - Enterprise AI Platform for Intelligent Conversations",
    description:
      "Transform customer experience with our agentic AI platform. Autonomous conversations across voice, chat, and visual channels.",
    siteName: "BicaraPintar",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BicaraPintar - Enterprise AI Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BicaraPintar - Enterprise AI Platform",
    description:
      "Transform customer experience with agentic AI. Autonomous conversations across all channels.",
    images: ["/og-image.jpg"],
    creator: "@bicarapintar",
  },
  alternates: {
    canonical: "https://bicarapintar.ai",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          as="style"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#6A2FF7" />
        <meta name="msapplication-TileColor" content="#6A2FF7" />

        {/* Viewport for responsive design */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "PT Bicara Pintar Indonesia",
              alternateName: "BicaraPintar",
              url: "https://bicarapintar.ai",
              logo: "https://bicarapintar.ai/logo.png",
              description:
                "Enterprise AI platform for intelligent conversations and business automation",
              foundingDate: "2023",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Jakarta",
                addressCountry: "Indonesia",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+62-21-1234-5678",
                contactType: "customer service",
                email: "hello@bicarapintar.ai",
              },
              sameAs: [
                "https://linkedin.com/company/bicarapintar",
                "https://twitter.com/bicarapintar",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:top-4 focus:left-4 z-50 focus:absolute bg-primary-600 px-4 py-2 rounded-lg text-white"
        >
          Skip to main content
        </a>

        <div id="main-content">{children}</div>

        {/* Analytics Scripts (add your tracking codes) */}
        {process.env.NODE_ENV === "production" && (
          <>
            {/* Google Analytics */}
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'GA_MEASUREMENT_ID', {
                    page_title: document.title,
                    page_location: window.location.href,
                  });
                `,
              }}
            />
          </>
        )}
      </body>
    </html>
  );
}
