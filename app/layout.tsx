import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'GAMGAM — Move value freely',
  description: 'Swap, bridge, and move assets across chains with GAMGAM.',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
