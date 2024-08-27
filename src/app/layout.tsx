import type { Metadata } from "next";
import { roboto, inter } from "@/lib/shared/fonts";
import "./globals.css";
import NavbarComponent from "@/components/navbar";
import FooterComponent from "@/components/footer";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "Blog - SK",
  description: "sylvain kadjo website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <body className={`${inter.className} main-container`}>
        <NavbarComponent />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
