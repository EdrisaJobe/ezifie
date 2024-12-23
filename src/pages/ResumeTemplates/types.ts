export type TemplateStyle = 'Simple' | 'Abstract' | 'Modern';

export interface ResumeTemplate {
  id: string;
  name: string;
  style: TemplateStyle;
  image: string;
  description: string;
}