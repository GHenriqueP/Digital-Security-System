import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@radix-ui/themes/styles.css";

const mainFontFamily = Roboto({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-family-main",
});

export const metadata: Metadata = {
  title: "Digital Security System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${mainFontFamily.variable} w-full min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
