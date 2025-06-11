const summaryTemplates = [
  "Experienced professional with a proven track record of delivering high-quality results and driving team success.",
  "Dedicated professional passionate about creating innovative solutions and exceeding expectations.",
  "Results-driven professional with strong problem-solving skills and a commitment to excellence.",
  "Motivated professional with expertise in leading projects and collaborating with cross-functional teams.",
  "Detail-oriented professional focused on continuous learning and delivering impactful solutions."
];

export function generateProfessionalSummary(): string {
  const randomIndex = Math.floor(Math.random() * summaryTemplates.length);
  return summaryTemplates[randomIndex];
}