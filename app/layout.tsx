import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://rachjn.github.io/"),
  title: {
    default: "Rachel Jin",
    template: "%s | Rachel Jin",
  },
  description:
    "Hi, I'm Rachel! I'm a recent computer science enthusiast with specific interest in frontend development and UI/UX design.",
  openGraph: {
    title: "Rachel Jin",
    description:
      "Hi, I'm Rachel! I'm a recent computer science enthusiast with specific interest in frontend development and UI/UX design.",
    siteName: "Rachel Jin",
    images: "/opengraph.png",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rachel Jin",
    description: "Rachel Jin's personal site!",
    images: "/opengraph.png", // Must be an absolute URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/org5cfx.css" />
        <link rel="stylesheet" href="https://use.typekit.net/cdd6oyg.css" />
        <meta name="theme-color" content="#FB98E5" />
        <meta content="Rachel Jin" property="og:title"></meta>
        <meta
          content="Hi, I'm Rachel! I'm a recent computer science enthusiast with specific interest in frontend development and UI/UX design."
          property="og:description"
        ></meta>
        <meta content="Rachel Jin" property="og:site_name"></meta>
        <meta content="/opengraph.png" property="og:image"></meta>
      </head>
      <body className="font-greycliff">{children}</body>
    </html>
  );
}
