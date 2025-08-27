import type { Metadata } from "next";
import { Kanit} from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ["latin", "thai"],
  weight: ["100","200","300","400","500","600", "700"],
  variable: "--font-kanit",
});

export const metadata: Metadata = {
  title: "Calculator Varity 2025 by Sigma",
  description: "เครื้องคำนวนหลากหลายโดย Sigma",
  keywords: ["Calculator","เครื่องคำนวณ","BMR","Fat","LookMaxx"],
  icons:{
    icon: "/calculator.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kanit.className} ${kanit.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
