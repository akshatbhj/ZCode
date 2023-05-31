import "./globals.css";
import "./favicon.png"
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ZCode",
  description: "Web Application that enables, programmmers to test their skills using coding problems",
  icon: "favicon.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <link rel={"icon"} href={"favicon.png"} />
      </head>
      <body>{children}</body>
    </html>
  );
}
