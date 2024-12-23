export interface ResumeColor {
  name: string;
  primary: string;
  light: string;
  hover: string;
}

export const resumeColors: ResumeColor[] = [
  {
    name: 'Blue',
    primary: 'rgb(27,172,255)',
    light: 'rgba(27,172,255,0.15)',
    hover: 'rgb(24,155,230)'
  },
  {
    name: 'Green',
    primary: 'rgb(34,197,94)',
    light: 'rgba(34,197,94,0.15)',
    hover: 'rgb(21,178,77)'
  },
  {
    name: 'Purple',
    primary: 'rgb(168,85,247)',
    light: 'rgba(168,85,247,0.15)',
    hover: 'rgb(147,51,234)'
  },
  {
    name: 'Red',
    primary: 'rgb(239,68,68)',
    light: 'rgba(239,68,68,0.15)',
    hover: 'rgb(220,38,38)'
  },
  {
    name: 'Teal',
    primary: 'rgb(20,184,166)',
    light: 'rgba(20,184,166,0.15)',
    hover: 'rgb(13,148,136)'
  }
];

export const defaultColor = resumeColors[0];