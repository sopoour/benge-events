import { Asap, Balsamiq_Sans, Comfortaa, Fredoka, Jura, Montserrat, Nunito, Quicksand, Roboto_Mono, Signika } from 'next/font/google';

// define your variable fonts
const text = Asap({
  weight: ['400', '500', '600','700'],
  style: ['normal'],
  subsets: ['latin'],
  fallback: ['sans-serif'],
  display: 'block',
  preload: true,
});
const header = Roboto_Mono({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  fallback: ['monospace'],
  preload: true,
});

export { text, header };
