/**
 * Defined at the top level of the app directory and applies to all routes. 
 * This layout is required and must contain html and body tags allowing you to modify the initial HTML returned from the server.
 *
 */

import { inter } from '@/app/ui/fonts';
import '@/app/ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
