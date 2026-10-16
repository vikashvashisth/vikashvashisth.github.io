import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vikashvashisth.github.io/"),
  title: "Vikash Vashisth | CFD Engineer",
  description: "Advanced CFD for Multiphase, Reacting, and Thermal-Fluid Systems. Vikash Vashisth - validated high-fidelity CFD grounded in experimental evidence and physical understanding, connecting local flow mechanisms to system performance.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Vikash Vashisth | CFD Engineer",
    title: "Vikash Vashisth | CFD Engineer",
    description: "Advanced CFD for multiphase, reacting and thermal-fluid systems, grounded in experimental evidence and physical understanding.",
    images: [{ url: "/vikash-vashisth.webp", alt: "Vikash Vashisth, CFD Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vikash Vashisth | CFD Engineer",
    description: "Advanced CFD for multiphase, reacting and thermal-fluid systems, grounded in experimental evidence and physical understanding.",
    images: ["/vikash-vashisth.webp"],
  },
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><body>{children}</body></html>;
}
