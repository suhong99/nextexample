import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>타이틀 바꾸기</title>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
