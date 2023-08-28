import Navbar from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/sections/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stephan Mingoes",
  description: "Full-Stack Software Developer",
  authors: { name: "Stephan Mingoes" },
  keywords: [
    "Stephan Mingoes",
    "Software Developer Jamaica",
    "Software Developer",
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
        {" "}
        <div className="flex justify-center items-center ">
          <main className="w-10/12 lg:w-[850px]">
            {" "}
            <Navbar />
            {children}
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
