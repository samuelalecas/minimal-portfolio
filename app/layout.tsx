import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { Smile } from "@/components";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Samuel Alegre | Web Developer & Senior Graphic Designer",
  description:
    "Portfolio of Samuel Alegre - A professional web developer and senior graphic designer with expertise in motion graphics. Explore my projects, skills, and contact information.",
  keywords:
    "Samuel Alegre, web developer, graphic designer, motion graphics, portfolio, front-end developer, UI/UX design, hire web developer, hire graphic designer",
  authors: [{ name: "Samuel Alegre" }],
  creator: "Samuel Alegre",
  openGraph: {
    title: "Samuel Alegre | Web Developer & Senior Graphic Designer",
    description:
      "Explore the portfolio of Samuel Alegre, showcasing web development and graphic design projects with a focus on motion graphics.",
    url: "https://samuelalegre.com",
    type: "website",
    images: [
      {
        url: "https://your-portfolio-domain.com/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Samuel Alegre's Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@SamuelAlegreC",
    title: "Samuel Alegre | Web Developer & Senior Graphic Designer",
    description:
      "Check out the portfolio of Samuel Alegre, featuring web development and graphic design projects with motion graphics.",
    images:
      "https://pbs.twimg.com/profile_banners/1579032804494557184/1665306459/600x200",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.className} max-w-[1800px] mx-auto`}>
        {children}
        <Smile />
      </body>
    </html>
  );
}
