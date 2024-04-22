import { Inter, Lusitana } from 'next/font/google';

// antialiased
//	-webkit-font-smoothing: antialiased;
// -moz-osx-font-smoothing: grayscale;
export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});
