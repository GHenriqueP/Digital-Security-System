import "../globals.css";
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
    <html lang="en" className={mainFontFamily.variable}>
      <body>
        <header className="flex w-full h-[60px] bg-slate-300 justify-center flex-col pl-4 text-2xl font-bold">
          Pesquisar Sistema
        </header>
        <div className="flex w-full h-screen">{children}</div>
      </body>
    </html>
  );
}
