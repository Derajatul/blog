import "./globals.css";
import type { Metadata } from "next";
import { Patrick_Hand } from "next/font/google";
import Nav from "../components/ui/Nav";
import { ThemeProvider } from "../components/theme-provider";
import Footer from "@/components/ui/footer";

const patrickHand = Patrick_Hand({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dera",
  description: "Blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${patrickHand.className} dark:pp-background`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
