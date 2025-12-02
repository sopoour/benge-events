import { getMedia } from './media';

const theme = {
  media: getMedia,
  colors: {
    bg: {
      default: '#6d5cdb',
      soft: 'rgba(109, 92, 219, 0.5)',
    },
    fg: {
      default: '#FFFFFF',
      contrast: '#6d5cdb',
      inactive: 'rgba(255, 255, 255, 0.75)',
    },
    accent: {
      pink: '#fa56a8',
      lightPink: '#D57ED8',
      orange: '#FF4F09',
      green: '#30FF7F',
    },
  },
  filters: {
    backdrop: 'blur(8px)',
  }
} as const;

export default theme;
