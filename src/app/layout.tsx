import Navbar from "@/components/navbar";
import "./globals.css";
import Footer from "@/sections/footer";
import TRPCProvider from "@/providers/TRPCProvider";
import { Toaster } from "@/components/ui/toaster";
import { Metadata } from "next/types";
import { ThemeProvider } from "@/components/themeProvider";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  metadataBase: new URL("https://stephanmingoes.me"),
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
      <body className={`${GeistSans.className} dark:bg-[#101010] antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TRPCProvider>
            <div className="flex justify-center items-center ">
              <main className="w-11/12 lg:w-[850px]">
                <Navbar />
                {children}
                <Footer />
              </main>
            </div>
          </TRPCProvider>
        </ThemeProvider>

        <Toaster />
      </body>
    </html>
  );
}
