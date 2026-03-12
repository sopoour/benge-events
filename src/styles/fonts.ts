import { Asap,  Jura,  Roboto_Mono, Ubuntu_Mono } from 'next/font/google';

// define your variable fonts
const text = Asap({
  weight: ['400', '500', '600','700'],
  style: ['normal'],
  subsets: ['latin'],
  fallback: ['sans-serif'],
  display: 'block',
  preload: true,
});

//TODO: Ubuntu ausprobieren
const header = Ubuntu_Mono({
  weight: ['400', '700'],
  style: ['normal', ],
  subsets: ['latin'],
  fallback: ['monospace'],
  preload: true,
});

export { text, header };
