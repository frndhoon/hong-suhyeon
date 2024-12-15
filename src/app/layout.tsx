import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: '김홍 ♥ 김수현 결혼합니다',
  description: '2월 23일 오후 1시',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
