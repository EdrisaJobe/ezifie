import { Font } from '../types';

export const fonts: Font[] = [
  { name: 'Arial', family: 'Arial, sans-serif', category: 'sans-serif' },
  { name: 'Helvetica', family: 'Helvetica, Arial, sans-serif', category: 'sans-serif' },
  { name: 'Calibri', family: 'Calibri, sans-serif', category: 'sans-serif' },
  { name: 'Times New Roman', family: '"Times New Roman", Times, serif', category: 'serif' },
  { name: 'Georgia', family: 'Georgia, serif', category: 'serif' },
  { name: 'Garamond', family: 'Garamond, serif', category: 'serif' }
];

export const defaultFont: Font = fonts[0];