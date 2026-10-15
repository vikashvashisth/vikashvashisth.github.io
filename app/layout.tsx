import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vikash Vashisth | CFD Engineer",
  description: "Advanced CFD for Multiphase, Reacting, and Thermal-Fluid Systems. Vikash Vashisth - validated high-fidelity CFD grounded in experimental evidence and physical understanding, connecting local flow mechanisms to system performance.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><body>{children}</body></html>;
}
