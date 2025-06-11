const experienceTemplates = [
  "• Collaborated with cross-functional teams to deliver high-quality solutions\n• Implemented best practices and improved system efficiency\n• Contributed to project planning and execution",
  "• Developed and maintained key features for the platform\n• Worked closely with stakeholders to gather requirements\n• Participated in code reviews and knowledge sharing sessions",
  "• Led initiatives to improve team productivity and code quality\n• Mentored junior team members and provided technical guidance\n• Contributed to architectural decisions and system design",
  "• Analyzed requirements and delivered solutions on time\n• Participated in agile development processes and sprint planning\n• Maintained and improved existing systems and features",
  "• Collaborated with design and product teams to implement new features\n• Optimized performance and resolved technical issues\n• Documented processes and contributed to team knowledge base"
];

export function generateWorkDescription(): string {
  const randomIndex = Math.floor(Math.random() * experienceTemplates.length);
  return experienceTemplates[randomIndex];
}