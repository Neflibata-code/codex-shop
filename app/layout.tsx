import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://heyan-jiangnan.balmy-box-2170.chatgpt.site'),
  title: '禾宴｜江南时令料理',
  description: '循着二十四节气，以当代手法呈现江南山野的鲜活滋味。',
  openGraph: {
    title: '禾宴｜江南时令料理',
    description: '山野入席，四季有味。',
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1792,
        height: 1024,
        alt: '禾宴｜山野入席，四季有味',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '禾宴｜江南时令料理',
    description: '山野入席，四季有味。',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
