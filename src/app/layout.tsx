import Navbar from "@/components/navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/sections/footer";
import TRPCProvider from "@/providers/TRPCProvider";
import { Toaster } from "@/components/ui/toaster";
import { Metadata } from "next/types";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stephan Mingoes",
  description: "Full-Stack Software Engineer",
  authors: { name: "Stephan Mingoes" },
  keywords: [
    "Stephan Mingoes",
    "Software Developer Jamaica",
    "Software Engineer Jamaica",
    "Software Engineer",
    "Stephan",
    "Mingoes",
    "Stephen Mingoes",
    "Stephen",
    "stephanmingoes",
    "stephanmingoes.com",
    "stephanmingoes.me",
  ],
  applicationName: "Stephan Mingoes Website",
  verification: { google: "xuOATogA7bGXH7ysROpHxP7a4LHoLZYwf6MceSeqoiM" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <TRPCProvider>
          <div className="flex justify-center items-center ">
            <main className="w-11/12 lg:w-[850px]">
              <Navbar />
              {children}
              <Footer />
            </main>
          </div>
        </TRPCProvider>
        <Toaster />
      </body>
    </html>
  );
}
