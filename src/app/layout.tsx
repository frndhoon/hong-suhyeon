import type { Metadata } from "next";
import { Song_Myung } from "next/font/google";
import "./globals.css";

const songMyung = Song_Myung({
  variable: "--font-song-myung",
  subsets: ["latin"],
  weight: "400",
});


export const metadata: Metadata = {
  title: "김홍 ♥ 김수현 결혼합니다",
  description: '2월 23일 오후 1시'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${songMyung.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
