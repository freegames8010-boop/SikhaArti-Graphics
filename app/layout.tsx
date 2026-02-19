import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ShikhaArti Graphics',
  description: 'Premium creative agency website with elegant 3D interactions.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
